//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ExternalLink } from './externallink.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ExternalLinkComplexConfig = {
  name: 'externalLink',
  fields: {
    href: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ExternalLink>;
//#endregion