import { Component } from '@angular/core';
import { tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@wizardcontrollerprerelease/horseless-contentapi-lib";
import * as i3 from "angular-auth-oidc-client";
import * as i4 from "../../services/configuration-endpoint.service";
import * as i5 from "@angular/material/list";
import * as i6 from "@angular/common";
export class TenantChooserComponent {
    constructor(router, tenantSvc, oidcAuthSvc, clientConfigService) {
        this.router = router;
        this.clientConfigService = clientConfigService;
        this.isAuthenticated = false;
        this.pageSize = 10;
        this.pageCount = 2;
        this.pageNumber = 1;
        this.tenantService = tenantSvc;
        this.oidcService = oidcAuthSvc;
    }
    ngOnInit() {
        this.oidcService
            .checkAuth(window.location.href)
            .subscribe((x) => (this.isAuthenticated = x.isAuthenticated));
    }
    subscribeToConfiguration() {
        this.clientConfiguration$ = this.clientConfigService.probeClientConfiguration()
            .pipe(tap(data => {
            console.log(`got client config for current url: ${window.location.href};`);
            console.log(`got access token for current url: ${data.accessToken};`);
        }));
        /*
        .subscribe(clienConfig => {
          console.log("rest endpoint is %s",clienConfig.restEndpoint);
          console.log("odata endpoint is %s", clienConfig.oDataEndpoint);
        });
        */
    }
    loadTeants() {
        console.log('about to get content entities tenants');
        this.tenantService
            .contentEntitiesTenantRESTGetByPageNumber('phantom', this.pageSize, this.pageNumber, this.pageCount)
            .subscribe((tenantQueryResult) => {
            console.log('handling tenant request response');
            tenantQueryResult.forEach((f) => this.tenants.push(f));
            console.log('retreved %d tents', this.tenants.length);
        });
    }
}
TenantChooserComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantChooserComponent, deps: [{ token: i1.Router }, { token: i2.TenantRESTService }, { token: i3.OidcSecurityService }, { token: i4.ConfigurationEndpointService }], target: i0.ɵɵFactoryTarget.Component });
TenantChooserComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: TenantChooserComponent, selector: "lib-tenant-chooser", ngImport: i0, template: "<p>tenant choosey</p>\r\n\r\n\r\n<div *ngIf=\"isAuthenticated; else unauthorized\">\r\n<div>tenant list</div>\r\n  <mat-list #tenants>\r\n\r\n</mat-list>\r\n</div>\r\n\r\n<ng-template #unauthorized>\r\n  <div>\r\n    <span>unauthorized</span>\r\n  </div>\r\n</ng-template>\r\n\r\n", styles: [""], components: [{ type: i5.MatList, selector: "mat-list, mat-action-list", inputs: ["disableRipple", "disabled"], exportAs: ["matList"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantChooserComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-tenant-chooser', template: "<p>tenant choosey</p>\r\n\r\n\r\n<div *ngIf=\"isAuthenticated; else unauthorized\">\r\n<div>tenant list</div>\r\n  <mat-list #tenants>\r\n\r\n</mat-list>\r\n</div>\r\n\r\n<ng-template #unauthorized>\r\n  <div>\r\n    <span>unauthorized</span>\r\n  </div>\r\n</ng-template>\r\n\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.TenantRESTService }, { type: i3.OidcSecurityService }, { type: i4.ConfigurationEndpointService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LWNob29zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd2l6YXJkY29udHJvbGxlci9ob3JzZWxlc3MtdGFncy1saWJyYXJ5L3NyYy9saWIvbW9kdWxlcy90ZW5hbnQtY2hvb3Nlci90ZW5hbnQtY2hvb3Nlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93aXphcmRjb250cm9sbGVyL2hvcnNlbGVzcy10YWdzLWxpYnJhcnkvc3JjL2xpYi9tb2R1bGVzL3RlbmFudC1jaG9vc2VyL3RlbmFudC1jaG9vc2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFVbEQsT0FBTyxFQUFjLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7QUFNdkMsTUFBTSxPQUFPLHNCQUFzQjtJQWNqQyxZQUFvQixNQUFjLEVBQ3BCLFNBQTRCLEVBQzVCLFdBQWdDLEVBQ3hCLG1CQUFpRDtRQUhuRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBR1osd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE4QjtRQVp2RSxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUVqQyxhQUFRLEdBQXVCLEVBQUUsQ0FBQztRQUNsQyxjQUFTLEdBQXVCLENBQUMsQ0FBQztRQUNsQyxlQUFVLEdBQXVCLENBQUMsQ0FBQztRQVNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUTtRQUVOLElBQUksQ0FBQyxXQUFXO2FBQ2IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTyx3QkFBd0I7UUFFOUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx3QkFBd0IsRUFBRTthQUM5RSxJQUFJLENBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRjs7Ozs7VUFLRTtJQUNKLENBQUM7SUFFTSxVQUFVO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhO2FBQ2Ysd0NBQXdDLENBQ3ZDLFNBQVMsRUFDVCxJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FDZjthQUNBLFNBQVMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2hELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzttSEE5RFUsc0JBQXNCO3VHQUF0QixzQkFBc0IsMERDaEJuQywwUkFnQkE7MkZEQWEsc0JBQXNCO2tCQUxsQyxTQUFTOytCQUNFLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBDb250ZW50RW50aXRpZXNUZW5hbnQsIFNlY3VyaXR5UmVzdENsaWVudENvbmZpZ3VyYXRpb24gfSBmcm9tICdAd2l6YXJkY29udHJvbGxlcnByZXJlbGVhc2UvaG9yc2VsZXNzLWNvbnRlbnRhcGktbGliJztcclxuaW1wb3J0IHtcclxuICBIb3N0aW5nRW50aXRpZXNUZW5hbnQsXHJcbiAgVGVuYW50SW5mb1JFU1RTZXJ2aWNlLFxyXG4gIFRlbmFudFJFU1RTZXJ2aWNlLFxyXG59IGZyb20gJ0B3aXphcmRjb250cm9sbGVycHJlcmVsZWFzZS9ob3JzZWxlc3MtY29udGVudGFwaS1saWInO1xyXG5pbXBvcnQgeyBPaWRjU2VjdXJpdHlTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1hdXRoLW9pZGMtY2xpZW50JztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbkVuZHBvaW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24tZW5kcG9pbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlcixOYXZpZ2F0aW9uU3RhcnR9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRhcCB9IGZyb20gJ3J4anMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10ZW5hbnQtY2hvb3NlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbmFudC1jaG9vc2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90ZW5hbnQtY2hvb3Nlci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW5hbnRDaG9vc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY2xpZW50Q29uZmlndXJhdGlvbiQhIDogT2JzZXJ2YWJsZTxTZWN1cml0eVJlc3RDbGllbnRDb25maWd1cmF0aW9uPjtcclxuXHJcbiAgdGVuYW50cyE6IENvbnRlbnRFbnRpdGllc1RlbmFudFtdO1xyXG4gIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwYWdlU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkID0gMTA7XHJcbiAgcGFnZUNvdW50OiBudW1iZXIgfCB1bmRlZmluZWQgPSAyO1xyXG4gIHBhZ2VOdW1iZXI6IG51bWJlciB8IHVuZGVmaW5lZCA9IDE7XHJcblxyXG4gIHByaXZhdGUgdGVuYW50U2VydmljZTogVGVuYW50UkVTVFNlcnZpY2U7XHJcbiAgcHJpdmF0ZSBvaWRjU2VydmljZTogT2lkY1NlY3VyaXR5U2VydmljZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHRlbmFudFN2YzogVGVuYW50UkVTVFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBvaWRjQXV0aFN2YzogT2lkY1NlY3VyaXR5U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgY2xpZW50Q29uZmlnU2VydmljZTogQ29uZmlndXJhdGlvbkVuZHBvaW50U2VydmljZSkge1xyXG4gICAgdGhpcy50ZW5hbnRTZXJ2aWNlID0gdGVuYW50U3ZjO1xyXG4gICAgdGhpcy5vaWRjU2VydmljZSA9IG9pZGNBdXRoU3ZjO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5vaWRjU2VydmljZVxyXG4gICAgICAuY2hlY2tBdXRoKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxyXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiAodGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB4LmlzQXV0aGVudGljYXRlZCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0NvbmZpZ3VyYXRpb24oKXtcclxuXHJcbiAgICB0aGlzLmNsaWVudENvbmZpZ3VyYXRpb24kID0gdGhpcy5jbGllbnRDb25maWdTZXJ2aWNlLnByb2JlQ2xpZW50Q29uZmlndXJhdGlvbigpXHJcbiAgICAucGlwZShcclxuICAgICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBnb3QgY2xpZW50IGNvbmZpZyBmb3IgY3VycmVudCB1cmw6ICR7d2luZG93LmxvY2F0aW9uLmhyZWZ9O2ApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBnb3QgYWNjZXNzIHRva2VuIGZvciBjdXJyZW50IHVybDogJHtkYXRhLmFjY2Vzc1Rva2VufTtgKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLypcclxuICAgIC5zdWJzY3JpYmUoY2xpZW5Db25maWcgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlc3QgZW5kcG9pbnQgaXMgJXNcIixjbGllbkNvbmZpZy5yZXN0RW5kcG9pbnQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9kYXRhIGVuZHBvaW50IGlzICVzXCIsIGNsaWVuQ29uZmlnLm9EYXRhRW5kcG9pbnQpO1xyXG4gICAgfSk7XHJcbiAgICAqL1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRUZWFudHMoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnYWJvdXQgdG8gZ2V0IGNvbnRlbnQgZW50aXRpZXMgdGVuYW50cycpO1xyXG4gICAgdGhpcy50ZW5hbnRTZXJ2aWNlXHJcbiAgICAgIC5jb250ZW50RW50aXRpZXNUZW5hbnRSRVNUR2V0QnlQYWdlTnVtYmVyKFxyXG4gICAgICAgICdwaGFudG9tJyxcclxuICAgICAgICB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICAgIHRoaXMucGFnZU51bWJlcixcclxuICAgICAgICB0aGlzLnBhZ2VDb3VudFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKHRlbmFudFF1ZXJ5UmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsaW5nIHRlbmFudCByZXF1ZXN0IHJlc3BvbnNlJyk7XHJcbiAgICAgICAgdGVuYW50UXVlcnlSZXN1bHQuZm9yRWFjaCgoZikgPT4gdGhpcy50ZW5hbnRzLnB1c2goZikpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygncmV0cmV2ZWQgJWQgdGVudHMnLCB0aGlzLnRlbmFudHMubGVuZ3RoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxwPnRlbmFudCBjaG9vc2V5PC9wPlxyXG5cclxuXHJcbjxkaXYgKm5nSWY9XCJpc0F1dGhlbnRpY2F0ZWQ7IGVsc2UgdW5hdXRob3JpemVkXCI+XHJcbjxkaXY+dGVuYW50IGxpc3Q8L2Rpdj5cclxuICA8bWF0LWxpc3QgI3RlbmFudHM+XHJcblxyXG48L21hdC1saXN0PlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjdW5hdXRob3JpemVkPlxyXG4gIDxkaXY+XHJcbiAgICA8c3Bhbj51bmF1dGhvcml6ZWQ8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG4iXX0=