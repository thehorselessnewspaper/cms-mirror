import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataSingletonService,
  ODataEntity,
  ODataEntities,
  ODataProperty,
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerTask } from './plannertask.entity';
import { PlannerPlan } from './plannerplan.entity';
import { Planner } from './planner.entity';
import { PlannerBucket } from './plannerbucket.entity';
//#endregion

@Injectable()
export class PlannerService extends ODataSingletonService<Planner> {
  constructor(client: ODataClient) {
    super(client, 'planner', 'microsoft.graph.planner');
  }

  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}