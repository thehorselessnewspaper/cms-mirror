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
import { PublicError } from './publicerror.complex';
import { Root } from './root.complex';
import { SharepointIds } from './sharepointids.complex';
import { SiteCollection } from './sitecollection.complex';
import { Site } from './site.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
//#endregion

@Injectable()
export class SitesService extends ODataEntitySetService<Site> {
  constructor(client: ODataClient) {
    super(client, 'sites', 'microsoft.graph.site');
  }
  //#region ODataApiGen Actions
  public add(): ODataActionResource<{value: Site[]}, Site> { 
    return this.entities().action<{value: Site[]}, Site>('microsoft.graph.add');
  }
  public callAdd(value: Site[], options?: ODataQueryArgumentsOptions<Site>) {
    return this.callAction<{value: Site[]}, Site>(
      {value}, 
      this.add(), 
      'entities', options) as Observable<ODataEntities<Site>>;
  }
  public remove(): ODataActionResource<{value: Site[]}, Site> { 
    return this.entities().action<{value: Site[]}, Site>('microsoft.graph.remove');
  }
  public callRemove(value: Site[], options?: ODataQueryArgumentsOptions<Site>) {
    return this.callAction<{value: Site[]}, Site>(
      {value}, 
      this.remove(), 
      'entities', options) as Observable<ODataEntities<Site>>;
  }
  //#endregion
  //#region ODataApiGen Functions
  public getActivitiesByInterval(key: EntityKey<Site>): ODataFunctionResource<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat> { 
    return this.entity(key).function<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat>('microsoft.graph.getActivitiesByInterval');
  }
  public callGetActivitiesByInterval(key: EntityKey<Site>, startDateTime?: string, endDateTime?: string, interval?: string, options?: ODataQueryArgumentsOptions<ItemActivityStat>) {
    return this.callFunction<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat>(
      {startDateTime, endDateTime, interval}, 
      this.getActivitiesByInterval(key), 
      'entities', options) as Observable<ODataEntities<ItemActivityStat>>;
  }
  public getByPath(key: EntityKey<Site>): ODataFunctionResource<{path: string}, Site> { 
    return this.entity(key).function<{path: string}, Site>('microsoft.graph.getByPath');
  }
  public callGetByPath(key: EntityKey<Site>, path: string, options?: ODataQueryArgumentsOptions<Site>) {
    return this.callFunction<{path: string}, Site>(
      {path}, 
      this.getByPath(key), 
      'entity', options) as Observable<ODataEntity<Site>>;
  }
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
