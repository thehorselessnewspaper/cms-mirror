//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Report } from './report.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ReportComplexConfig = {
  name: 'report',
  fields: {
    content: {type: 'Edm.Stream'}
  }
} as StructuredTypeConfig<Report>;
//#endregion