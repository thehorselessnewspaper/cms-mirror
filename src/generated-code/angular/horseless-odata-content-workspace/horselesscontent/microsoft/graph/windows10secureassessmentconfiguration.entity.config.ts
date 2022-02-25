//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Windows10SecureAssessmentConfiguration } from './windows10secureassessmentconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const Windows10SecureAssessmentConfigurationEntityConfig = {
  name: 'windows10SecureAssessmentConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    launchUri: {type: 'Edm.String'},
    configurationAccount: {type: 'Edm.String'},
    allowPrinting: {type: 'Edm.Boolean', nullable: false},
    allowScreenCapture: {type: 'Edm.Boolean', nullable: false},
    allowTextSuggestion: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<Windows10SecureAssessmentConfiguration>;
//#endregion