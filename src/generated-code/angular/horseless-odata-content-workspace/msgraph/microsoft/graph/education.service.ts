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
import { EducationRoot } from './educationroot.entity';
import { EducationClass } from './educationclass.entity';
import { EducationSchool } from './educationschool.entity';
import { EducationUser } from './educationuser.entity';
//#endregion

@Injectable()
export class EducationService extends ODataSingletonService<EducationRoot> {
  constructor(client: ODataClient) {
    super(client, 'education', 'microsoft.graph.educationRoot');
  }

  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}