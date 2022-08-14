import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";
import { SecurityRestClientConfiguration } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import {
  BehaviorSubject,
  catchError,
  concatMap,
  EMPTY,
  map,
  Observable,
  ReplaySubject,
  take,
  tap,
  throwError,
} from 'rxjs';
import { HorselessTagsLibraryModule } from '../horseless-tags-library.module';
import { IClaimsIdentityAuthService as IClaimsIdentiyAuthService } from './IClaimsIdentityAuthService';

@AutoUnsubscribe()
@Injectable({
  providedIn: 'root',
})
export class ConfigurationEndpointService implements IClaimsIdentiyAuthService {

  public accessToken : string = '';

  private clientConfiguration$: BehaviorSubject<SecurityRestClientConfiguration>  =
                                new BehaviorSubject<SecurityRestClientConfiguration>({})

  currentConfiguration$ : Observable<SecurityRestClientConfiguration> = this.clientConfiguration$.asObservable();

  constructor(private httpClient: HttpClient) {
console.log("configuration endpoint service starting");
// this.probeClientConfiguration().subscribe(clientConfig => {
//   console.log("client configuration probed");
//   this.clientConfiguration$.next(clientConfig);
//   this.accessToken = clientConfig.AccessToken as string;
// });

    this.getClientConfiguration();

    console.log("configuration endpoint service constructed");
  }

  /**
   * supporting getting claims identity
   * auth token from server by delegating
   * auth to the browser cookies
   */
  getAccessToken(): string {
    return this.accessToken;
  }

  public getClientConfiguration() : void {
    let url = window.location.href;
    let headers = new HttpHeaders();
    // command channel message to the client configuration endpoint middleware
    headers = headers.set('RestClientConfigurationEndpoint', 'get');

    console.log(`probeClientConfiguration getting client configuration for ${url}`);
    this.httpClient.post<SecurityRestClientConfiguration>(url, '', {
      headers: headers,
    })
      .pipe(
        map(clientConfig => {
          console.log(`probeClientConfiguration handling client configuration result for ${url}`)
          this.clientConfiguration$.next(clientConfig);
          this.accessToken = clientConfig.AccessToken as string;
          return clientConfig;
        })
      ).subscribe(data => {
        console.log("client configuration probe pipe subscriber executed");
      });
  }

  /**
   * calls the horseless site loaded in the browser
   * and sends control channel commands to the
   * RestClientConfiguration endpoint
   * then
   * @returns Observable<SecurityRestClientConfiguration>
   */
  public probeClientConfiguration() : Observable<SecurityRestClientConfiguration> {
    let url = window.location.href;
    let headers = new HttpHeaders();
    // command channel message to the client configuration endpoint middleware
    headers = headers.set('RestClientConfigurationEndpoint', 'get');

    console.log(`probeClientConfiguration getting client configuration for ${url}`);
    return this.httpClient.post<SecurityRestClientConfiguration>(url, '', {
      headers: headers,
    })
      .pipe(
        map(clientConfig => {
          console.log(`probeClientConfiguration handling client configuration result for ${url}`)
          this.clientConfiguration$.next(clientConfig);
          this.accessToken = clientConfig.AccessToken as string;
          return clientConfig;
        })
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  ngOnDestroy() {
    // We'll throw an error if it doesn't
  }
}
