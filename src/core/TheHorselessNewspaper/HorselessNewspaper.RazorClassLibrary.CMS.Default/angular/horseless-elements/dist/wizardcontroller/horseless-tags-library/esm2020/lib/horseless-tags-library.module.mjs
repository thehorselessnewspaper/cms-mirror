import { NgModule } from '@angular/core';
import { HorselessTagsLibraryComponent } from './horseless-tags-library.component';
import { TenantChooserComponent } from './modules/tenant-chooser/tenant-chooser.component';
import { TenantEditorComponent } from './modules/tenant-editor/tenant-editor.component';
import { createCustomElement } from '@angular/elements';
import { ConfigurationEndpointService } from './services/configuration-endpoint.service';
import * as i0 from "@angular/core";
export class HorselessTagsLibraryModule {
    constructor(injector) {
        this.injector = injector;
    }
    ngDoBootstrap() {
        // Convert `PopupComponent` to a custom element.
        const tenantChooserElement = createCustomElement(TenantChooserComponent, { injector: this.injector });
        // Register the custom element with the browser.
        customElements.define('horseless-tenant-chooser', tenantChooserElement);
        // Convert `PopupComponent` to a custom element.
        const tenantEditorElement = createCustomElement(TenantEditorComponent, { injector: this.injector });
        // Register the custom element with the browser.
        customElements.define('horseless-tenant-editor', tenantEditorElement);
    }
}
HorselessTagsLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
HorselessTagsLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryModule, declarations: [HorselessTagsLibraryComponent], exports: [HorselessTagsLibraryComponent] });
HorselessTagsLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryModule, providers: [
        ConfigurationEndpointService
    ], imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: HorselessTagsLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HorselessTagsLibraryComponent
                    ],
                    imports: [],
                    providers: [
                        ConfigurationEndpointService
                    ],
                    exports: [
                        HorselessTagsLibraryComponent
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9yc2VsZXNzLXRhZ3MtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93aXphcmRjb250cm9sbGVyL2hvcnNlbGVzcy10YWdzLWxpYnJhcnkvc3JjL2xpYi9ob3JzZWxlc3MtdGFncy1saWJyYXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXhGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXhELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQWV6RixNQUFNLE9BQU8sMEJBQTBCO0lBRXJDLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFFdEMsQ0FBQztJQUVELGFBQWE7UUFDWCxnREFBZ0Q7UUFDaEQsTUFBTSxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RyxnREFBZ0Q7UUFDaEQsY0FBYyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRXhFLGdEQUFnRDtRQUNoRCxNQUFNLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDLHFCQUFxQixFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3BHLGdEQUFnRDtRQUNoRCxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDeEUsQ0FBQzs7dUhBaEJVLDBCQUEwQjt3SEFBMUIsMEJBQTBCLGlCQVhuQyw2QkFBNkIsYUFRN0IsNkJBQTZCO3dIQUdwQiwwQkFBMEIsYUFQMUI7UUFDVCw0QkFBNEI7S0FDN0IsWUFKUSxFQUNSOzJGQVFVLDBCQUEwQjtrQkFidEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osNkJBQTZCO3FCQUM5QjtvQkFDRCxPQUFPLEVBQUUsRUFDUjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsNEJBQTRCO3FCQUM3QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsNkJBQTZCO3FCQUM5QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhvcnNlbGVzc1RhZ3NMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9ob3JzZWxlc3MtdGFncy1saWJyYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbmFudENob29zZXJDb21wb25lbnQgfSBmcm9tICcuL21vZHVsZXMvdGVuYW50LWNob29zZXIvdGVuYW50LWNob29zZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVuYW50RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9tb2R1bGVzL3RlbmFudC1lZGl0b3IvdGVuYW50LWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xyXG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25FbmRwb2ludFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24tZW5kcG9pbnQuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgSG9yc2VsZXNzVGFnc0xpYnJhcnlDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ29uZmlndXJhdGlvbkVuZHBvaW50U2VydmljZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgSG9yc2VsZXNzVGFnc0xpYnJhcnlDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb3JzZWxlc3NUYWdzTGlicmFyeU1vZHVsZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdEb0Jvb3RzdHJhcCgpIHtcclxuICAgIC8vIENvbnZlcnQgYFBvcHVwQ29tcG9uZW50YCB0byBhIGN1c3RvbSBlbGVtZW50LlxyXG4gICAgY29uc3QgdGVuYW50Q2hvb3NlckVsZW1lbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KFRlbmFudENob29zZXJDb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XHJcbiAgICAvLyBSZWdpc3RlciB0aGUgY3VzdG9tIGVsZW1lbnQgd2l0aCB0aGUgYnJvd3Nlci5cclxuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaG9yc2VsZXNzLXRlbmFudC1jaG9vc2VyJywgdGVuYW50Q2hvb3NlckVsZW1lbnQpO1xyXG5cclxuICAgIC8vIENvbnZlcnQgYFBvcHVwQ29tcG9uZW50YCB0byBhIGN1c3RvbSBlbGVtZW50LlxyXG4gICAgY29uc3QgdGVuYW50RWRpdG9yRWxlbWVudCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoVGVuYW50RWRpdG9yQ29tcG9uZW50LCB7IGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xyXG4gICAgLy8gUmVnaXN0ZXIgdGhlIGN1c3RvbSBlbGVtZW50IHdpdGggdGhlIGJyb3dzZXIuXHJcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hvcnNlbGVzcy10ZW5hbnQtZWRpdG9yJywgdGVuYW50RWRpdG9yRWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==