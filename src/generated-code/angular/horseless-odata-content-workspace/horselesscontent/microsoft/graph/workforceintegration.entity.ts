//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ChangeTrackedEntity } from './changetrackedentity.entity';
import { WorkforceIntegrationSupportedEntities } from './workforceintegrationsupportedentities.enum';
import { WorkforceIntegrationEncryption } from './workforceintegrationencryption.complex';
//#endregion

export interface WorkforceIntegration extends ChangeTrackedEntity {
  //#region ODataApiGen Properties
  displayName?: string;
  apiVersion?: number;
  encryption?: WorkforceIntegrationEncryption;
  isActive?: boolean;
  url?: string;
  supportedEntities?: WorkforceIntegrationSupportedEntities;
  //#endregion
}