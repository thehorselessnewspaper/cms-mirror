//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SharingDetail } from './sharingdetail.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SharingDetailComplexConfig = {
  name: 'sharingDetail',
  fields: {
    sharedBy: {type: 'graph.insightIdentity'},
    sharedDateTime: {type: 'Edm.DateTimeOffset'},
    sharingSubject: {type: 'Edm.String'},
    sharingType: {type: 'Edm.String'},
    sharingReference: {type: 'graph.resourceReference'}
  }
} as StructuredTypeConfig<SharingDetail>;
//#endregion