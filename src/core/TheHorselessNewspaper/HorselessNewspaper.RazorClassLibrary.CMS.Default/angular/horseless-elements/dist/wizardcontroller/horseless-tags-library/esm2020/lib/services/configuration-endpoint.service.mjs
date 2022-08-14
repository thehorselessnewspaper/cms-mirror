import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ConfigurationEndpointService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.clientConfiguration = new Observable();
        this.ensureConfigurationPipe();
    }
    /**
     * call the client configuration endpoint
     * and set the result to the the observable
     */
    ensureConfigurationPipe() {
        let url = window.location.href;
        let headers = new HttpHeaders();
        // command channel message to the client configuration endpoint middleware
        headers = headers.set('RestClientConfigurationEndpoint', 'get');
        console.log(`getting client configuration for ${url}`);
        this.clientConfiguration$ =
            this.httpClient.post(url, '', {
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
    probeClientConfiguration() {
        let url = window.location.href;
        let headers = new HttpHeaders();
        // command channel message to the client configuration endpoint middleware
        headers = headers.set('RestClientConfigurationEndpoint', 'get');
        console.log(`getting client configuration for ${url}`);
        return this.httpClient.post(url, '', {
            headers: headers,
        });
    }
}
ConfigurationEndpointService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConfigurationEndpointService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
ConfigurationEndpointService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConfigurationEndpointService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConfigurationEndpointService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi1lbmRwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd2l6YXJkY29udHJvbGxlci9ob3JzZWxlc3MtdGFncy1saWJyYXJ5L3NyYy9saWIvc2VydmljZXMvY29uZmlndXJhdGlvbi1lbmRwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUtsQyxNQUFNLE9BQU8sNEJBQTRCO0lBTXZDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFMbkMsd0JBQW1CLEdBQ3hCLElBQUksVUFBVSxFQUFtQyxDQUFDO1FBS2xELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSSx1QkFBdUI7UUFDNUIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNoQywwRUFBMEU7UUFDMUUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsb0JBQW9CO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFrQyxHQUFHLEVBQUUsRUFBRSxFQUFFO2dCQUM3RCxPQUFPLEVBQUUsT0FBTzthQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksd0JBQXdCO1FBQzdCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQy9CLElBQUksT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDaEMsMEVBQTBFO1FBQzFFLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWhFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdkQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBa0MsR0FBRyxFQUFFLEVBQUUsRUFBRTtZQUNwRSxPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDOzt5SEE1Q1UsNEJBQTRCOzZIQUE1Qiw0QkFBNEIsY0FGM0IsTUFBTTsyRkFFUCw0QkFBNEI7a0JBSHhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlY3VyaXR5UmVzdENsaWVudENvbmZpZ3VyYXRpb24gfSBmcm9tICdAd2l6YXJkY29udHJvbGxlcnByZXJlbGVhc2UvaG9yc2VsZXNzLWNvbnRlbnRhcGktbGliJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25FbmRwb2ludFNlcnZpY2Uge1xuICBwdWJsaWMgY2xpZW50Q29uZmlndXJhdGlvbjogT2JzZXJ2YWJsZTxTZWN1cml0eVJlc3RDbGllbnRDb25maWd1cmF0aW9uPiA9XG4gICAgbmV3IE9ic2VydmFibGU8U2VjdXJpdHlSZXN0Q2xpZW50Q29uZmlndXJhdGlvbj4oKTtcblxuICBjbGllbnRDb25maWd1cmF0aW9uJCE6IE9ic2VydmFibGU8U2VjdXJpdHlSZXN0Q2xpZW50Q29uZmlndXJhdGlvbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7XG4gICAgdGhpcy5lbnN1cmVDb25maWd1cmF0aW9uUGlwZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNhbGwgdGhlIGNsaWVudCBjb25maWd1cmF0aW9uIGVuZHBvaW50XG4gICAqIGFuZCBzZXQgdGhlIHJlc3VsdCB0byB0aGUgdGhlIG9ic2VydmFibGVcbiAgICovXG4gIHB1YmxpYyBlbnN1cmVDb25maWd1cmF0aW9uUGlwZSgpIHtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICAvLyBjb21tYW5kIGNoYW5uZWwgbWVzc2FnZSB0byB0aGUgY2xpZW50IGNvbmZpZ3VyYXRpb24gZW5kcG9pbnQgbWlkZGxld2FyZVxuICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnUmVzdENsaWVudENvbmZpZ3VyYXRpb25FbmRwb2ludCcsICdnZXQnKTtcblxuICAgIGNvbnNvbGUubG9nKGBnZXR0aW5nIGNsaWVudCBjb25maWd1cmF0aW9uIGZvciAke3VybH1gKTtcbiAgICB0aGlzLmNsaWVudENvbmZpZ3VyYXRpb24kID1cbiAgICAgIHRoaXMuaHR0cENsaWVudC5wb3N0PFNlY3VyaXR5UmVzdENsaWVudENvbmZpZ3VyYXRpb24+KHVybCwgJycsIHtcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNhbGxzIHRoZSBob3JzZWxlc3Mgc2l0ZSBsb2FkZWQgaW4gdGhlIGJyb3dzZXJcbiAgICogYW5kIHNlbmRzIGNvbnRyb2wgY2hhbm5lbCBjb21tYW5kcyB0byB0aGVcbiAgICogUmVzdENsaWVudENvbmZpZ3VyYXRpb24gZW5kcG9pbnRcbiAgICogdGhlblxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPFNlY3VyaXR5UmVzdENsaWVudENvbmZpZ3VyYXRpb24+XG4gICAqL1xuICBwdWJsaWMgcHJvYmVDbGllbnRDb25maWd1cmF0aW9uKCkge1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIC8vIGNvbW1hbmQgY2hhbm5lbCBtZXNzYWdlIHRvIHRoZSBjbGllbnQgY29uZmlndXJhdGlvbiBlbmRwb2ludCBtaWRkbGV3YXJlXG4gICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdSZXN0Q2xpZW50Q29uZmlndXJhdGlvbkVuZHBvaW50JywgJ2dldCcpO1xuXG4gICAgY29uc29sZS5sb2coYGdldHRpbmcgY2xpZW50IGNvbmZpZ3VyYXRpb24gZm9yICR7dXJsfWApO1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdDxTZWN1cml0eVJlc3RDbGllbnRDb25maWd1cmF0aW9uPih1cmwsICcnLCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIH0pO1xuICB9XG59XG4iXX0=