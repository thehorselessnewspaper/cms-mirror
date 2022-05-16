import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityRestClientConfiguration } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationEndpointService {
  public clientConfiguration: Observable<SecurityRestClientConfiguration> =
    new Observable<SecurityRestClientConfiguration>();

  clientConfiguration$!: Observable<SecurityRestClientConfiguration>;

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
    this.clientConfiguration$ =
      this.httpClient.post<SecurityRestClientConfiguration>(url, '', {
        headers: headers,
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
}
