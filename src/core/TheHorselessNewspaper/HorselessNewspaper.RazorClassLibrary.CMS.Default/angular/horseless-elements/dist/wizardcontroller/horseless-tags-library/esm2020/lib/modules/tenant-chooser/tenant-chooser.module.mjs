import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantChooserComponent } from './tenant-chooser.component';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ClientConfigurationService, TenantRESTService } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import * as i0 from "@angular/core";
export class TenantChooserModule {
}
TenantChooserModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantChooserModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TenantChooserModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantChooserModule, declarations: [TenantChooserComponent], imports: [CommonModule,
        MatListModule,
        MatSliderModule], exports: [TenantChooserComponent] });
TenantChooserModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantChooserModule, providers: [
        TenantRESTService,
        ClientConfigurationService,
        OidcSecurityService
    ], imports: [[
            CommonModule,
            MatListModule,
            MatSliderModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TenantChooserModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TenantChooserComponent],
                    imports: [
                        CommonModule,
                        MatListModule,
                        MatSliderModule
                    ],
                    providers: [
                        TenantRESTService,
                        ClientConfigurationService,
                        OidcSecurityService
                    ],
                    exports: [
                        TenantChooserComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LWNob29zZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd2l6YXJkY29udHJvbGxlci9ob3JzZWxlc3MtdGFncy1saWJyYXJ5L3NyYy9saWIvbW9kdWxlcy90ZW5hbnQtY2hvb3Nlci90ZW5hbnQtY2hvb3Nlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7QUFnQnJILE1BQU0sT0FBTyxtQkFBbUI7O2dIQUFuQixtQkFBbUI7aUhBQW5CLG1CQUFtQixpQkFiZixzQkFBc0IsYUFFbkMsWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlLGFBT2Ysc0JBQXNCO2lIQUViLG1CQUFtQixhQVBuQjtRQUNULGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsbUJBQW1CO0tBQUMsWUFSYjtZQUNQLFlBQVk7WUFDWixhQUFhO1lBQ2IsZUFBZTtTQUNoQjsyRkFRVSxtQkFBbUI7a0JBZC9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsZUFBZTtxQkFDaEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGlCQUFpQjt3QkFDakIsMEJBQTBCO3dCQUMxQixtQkFBbUI7cUJBQUM7b0JBQ3RCLE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7cUJBQUM7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGVuYW50Q2hvb3NlckNvbXBvbmVudCB9IGZyb20gJy4vdGVuYW50LWNob29zZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xyXG5pbXBvcnQgeyBNYXRTbGlkZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xyXG5pbXBvcnQgeyBPaWRjU2VjdXJpdHlTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1hdXRoLW9pZGMtY2xpZW50JztcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvblNlcnZpY2UsIFRlbmFudFJFU1RTZXJ2aWNlIH0gZnJvbSAnQHdpemFyZGNvbnRyb2xsZXJwcmVyZWxlYXNlL2hvcnNlbGVzcy1jb250ZW50YXBpLWxpYic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1RlbmFudENob29zZXJDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdExpc3RNb2R1bGUsXHJcbiAgICBNYXRTbGlkZXJNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgVGVuYW50UkVTVFNlcnZpY2UsXHJcbiAgICBDbGllbnRDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIE9pZGNTZWN1cml0eVNlcnZpY2VdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFRlbmFudENob29zZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW5hbnRDaG9vc2VyTW9kdWxlIHsgfVxyXG4iXX0=