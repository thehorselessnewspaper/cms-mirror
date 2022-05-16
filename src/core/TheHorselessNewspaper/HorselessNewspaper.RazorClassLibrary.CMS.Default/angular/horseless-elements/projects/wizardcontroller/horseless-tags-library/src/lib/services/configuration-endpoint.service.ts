import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityRestClientConfiguration } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { catchError, Observable, ReplaySubject, tap, throwError } from 'rxjs';
import { HorselessTagsLibraryModule } from '../horseless-tags-library.module';

@Injectable(
  {
    providedIn: 'any'
  }
)
export class ConfigurationEndpointService {
  public clientConfiguration: Observable<SecurityRestClientConfiguration> =
    new Observable<SecurityRestClientConfiguration>();

  clientConfiguration$!: ReplaySubject<SecurityRestClientConfiguration>;

  constructor(private httpClient: HttpClient) {
    this.pullClientConfiguration();
  }

  /**
   * call the client configuration endpoint
   * and set the result to the the observable
   */
  public pullClientConfiguration() {
    let url = window.location.href;
    let headers = new HttpHeaders();
    // command channel message to the client configuration endpoint middleware
    headers = headers.set('RestClientConfigurationEndpoint', 'get');

    console.log(`getting client configuration for ${url}`);

    this.httpClient.post<SecurityRestClientConfiguration>(url, '', {
        headers: headers,
      })
      .pipe(
        catchError(this.handleError),
        tap(t => {
          console.log("configuration endpoint service has a request result")
        })
      )
      .subscribe(requestResult => {
        // update subscribers to client config
        this.clientConfiguration$.next(requestResult);
      });
  }

  /**
   * calls the horseless site loaded in the browser
   * and sends control channel commands to the
   * RestClientConfiguration endpoint
   * then
   * @returns Observable<SecurityRestClientConfiguration>
   */
  public probeClientConfiguration() {
    let url = window.location.href;
    let headers = new HttpHeaders();
    // command channel message to the client configuration endpoint middleware
    headers = headers.set('RestClientConfigurationEndpoint', 'get');

    console.log(`getting client configuration for ${url}`);
    return this.httpClient.post<SecurityRestClientConfiguration>(url, '', {
      headers: headers,
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
