import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
  ODataEntity,
  ODataEntities,
  ODataProperty,
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MdmAuthority } from './mdmauthority.enum';
import { AssignedPlan } from './assignedplan.complex';
import { ProvisionedPlan } from './provisionedplan.complex';
import { PrivacyProfile } from './privacyprofile.complex';
import { VerifiedDomain } from './verifieddomain.complex';
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
import { Organization } from './organization.entity';
//#endregion

@Injectable()
export class OrganizationService extends ODataEntitySetService<Organization> {
  constructor(client: ODataClient) {
    super(client, 'organization', 'microsoft.graph.organization');
  }
  //#region ODataApiGen Actions
  public setMobileDeviceManagementAuthority(key: EntityKey<Organization>): ODataActionResource<null, number> { 
    return this.entity(key).action<null, number>('microsoft.graph.setMobileDeviceManagementAuthority');
  }
  public callSetMobileDeviceManagementAuthority(key: EntityKey<Organization>, options?: ODataQueryArgumentsOptions<number>) {
    return this.callAction<null, number>(
      null, 
      this.setMobileDeviceManagementAuthority(key), 
      'property', options) as Observable<ODataProperty<number>>;
  }
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public certificateBasedAuthConfiguration(key: EntityKey<Organization>): ODataNavigationPropertyResource<CertificateBasedAuthConfiguration> { 
    return this.entity(key).navigationProperty<CertificateBasedAuthConfiguration>('certificateBasedAuthConfiguration'); 
  }
  public fetchCertificateBasedAuthConfiguration(key: EntityKey<Organization>, options?: ODataQueryArgumentsOptions<CertificateBasedAuthConfiguration>) {
    return this.fetchNavigationProperty<CertificateBasedAuthConfiguration>(
      this.certificateBasedAuthConfiguration(key), 
      'entities', options) as Observable<ODataEntities<CertificateBasedAuthConfiguration>>;
  }
  public addCertificateBasedAuthConfigurationToCertificateBasedAuthConfiguration(key: EntityKey<Organization>, target: ODataEntityResource<ODataEntities<CertificateBasedAuthConfiguration>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.certificateBasedAuthConfiguration(key).reference()
      .add(target);
  }
  public removeCertificateBasedAuthConfigurationFromCertificateBasedAuthConfiguration(key: EntityKey<Organization>, {target, etag}: {target?: ODataEntityResource<ODataEntities<CertificateBasedAuthConfiguration>>, etag?: string} = {}): Observable<any> {
    return this.certificateBasedAuthConfiguration(key).reference()
      .remove(target);
  }
  //#endregion
}
