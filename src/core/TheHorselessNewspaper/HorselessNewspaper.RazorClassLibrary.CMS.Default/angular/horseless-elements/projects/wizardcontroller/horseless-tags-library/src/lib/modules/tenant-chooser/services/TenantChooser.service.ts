import { Injectable } from '@angular/core';
import { ODataServiceFactory } from '@vigouredelaruse/angular-odata';
import {
  ClientConfigurationService,
  ContentEntitiesTenant,
  HostingEntitiesTenant,
  TenantRESTService,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { BehaviorSubject, take, tap } from 'rxjs';
import { ConfigurationEndpointService } from '../../../services/configuration-endpoint.service';

@Injectable({
  providedIn: 'any',
})
export class TenantChooserService {

  hostingEntitiesTenantsSubject = new BehaviorSubject<HostingEntitiesTenant[]>(new Array<HostingEntitiesTenant>());
  hostingEntitiesTenantsCount! : number;

  contentEntitiesTenantsSubject = new BehaviorSubject<ContentEntitiesTenant[]>(new Array<ContentEntitiesTenant>());
  contentEntitiesTenantsCount!: number;

  constructor(
    private clientConfigService: ConfigurationEndpointService,
    private factory: ODataServiceFactory,
    private tenantService: TenantRESTService
  ) {}

  public pullClientConfiguration() {
    console.log(
      'tenant chooser service is subscribing to client configuration'
    );
    this.clientConfigService.clientConfiguration$
      .pipe(
        take(1),
        tap((t) => {
          console.log(
            'tenant chooser service has new client configuration %s',
            t
          );
        })
      )
      .subscribe((currentClientConfig) => {
        console.log(
          `tenant chooser service has client config: rest api endpoint %s`,
          currentClientConfig.RESTEndpoint
        );
      });
  }

  pullHostingEntitiesTenantsByOffset(offset: number, rowCount: number): void {
    let ret: HostingEntitiesTenant[] = new Array<HostingEntitiesTenant>();

    //init service
    let contentTenantsSvc = this.factory.entitySet<HostingEntitiesTenant>(
      'Tenants',
      'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant'
    );
    let tenantEntities = contentTenantsSvc.entities();

    // build query
    tenantEntities.query((q) => {
      q.orderBy((h) => h.e().ascending(h.s.CreatedAt));
      q.skip(offset);
      q.top(rowCount);
    });

    tenantEntities
      .fetch({ withCount: true })
      .subscribe(({ entities, annots }) => {
        console.log('got odata response');
        ret = entities as HostingEntitiesTenant[];
      });

    this.hostingEntitiesTenantsSubject.next(ret);
  }

  pullContentEntitiesTenantsByOffset(offset: number, rowCount: number): void {
    let ret: ContentEntitiesTenant[] = new Array<ContentEntitiesTenant>();

    //init service
    let contentTenantsSvc = this.factory.entitySet<ContentEntitiesTenant>(
      'Tenants',
      'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant'
    );
    let tenantEntities = contentTenantsSvc.entities();

    // build query
    tenantEntities.query((q) => {
      q.orderBy((h) => h.e().ascending(h.s.CreatedAt));
      q.skip(offset);
      q.top(rowCount);
    });

    tenantEntities
      .fetch({ withCount: true })
      .subscribe(({ entities, annots }) => {
        console.log('got odata response');
        ret = entities as ContentEntitiesTenant[];
      });

    this.contentEntitiesTenantsSubject.next(ret);
  }

  pullContentEntitiesTenantsCount(): void {
    let ret: ContentEntitiesTenant[] = new Array<ContentEntitiesTenant>();

    //init service
    let contentTenantsSvc = this.factory.entitySet<ContentEntitiesTenant>(
      'Tenants',
      'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant'
    );
    let tenantEntities = contentTenantsSvc.entities();

    let contentEntitiesTenantsCount = tenantEntities.count().fetch();

  }

  pullHostingEntitiesTenantsCount(): void {
    let ret: HostingEntitiesTenant[] = new Array<HostingEntitiesTenant>();

    //init service
    let contentTenantsSvc = this.factory.entitySet<HostingEntitiesTenant>(
      'Tenants',
      'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant'
    );

    let tenantEntities = contentTenantsSvc.entities();

    let hostingEntitiesTenantsCount = tenantEntities.count().fetch();

  }
}
