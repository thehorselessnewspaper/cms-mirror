//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationService } from './education.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const EducationServiceEntitySetConfig = {
  name: 'education',
  entityType: 'microsoft.graph.educationRoot',
  service: EducationService
} as EntitySetConfig;
//#endregion