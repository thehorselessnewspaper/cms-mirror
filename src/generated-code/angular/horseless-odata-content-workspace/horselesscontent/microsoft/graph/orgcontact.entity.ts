//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObject } from './directoryobject.entity';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.complex';
import { PhysicalOfficeAddress } from './physicalofficeaddress.complex';
import { Phone } from './phone.complex';
//#endregion

export interface OrgContact extends DirectoryObject {
  //#region ODataApiGen Properties
  addresses?: PhysicalOfficeAddress[];
  companyName?: string;
  department?: string;
  displayName?: string;
  givenName?: string;
  jobTitle?: string;
  mail?: string;
  mailNickname?: string;
  onPremisesSyncEnabled?: boolean;
  onPremisesLastSyncDateTime?: Date;
  onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
  phones?: Phone[];
  proxyAddresses: string[];
  surname?: string;
  manager?: DirectoryObject;
  directReports?: DirectoryObject[];
  memberOf?: DirectoryObject[];
  transitiveMemberOf?: DirectoryObject[];
  //#endregion
}