//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { MimeContent } from './mimecontent.complex';
import { ManagedEBookAssignment } from './managedebookassignment.entity';
import { EBookInstallSummary } from './ebookinstallsummary.entity';
import { DeviceInstallState } from './deviceinstallstate.entity';
import { UserInstallStateSummary } from './userinstallstatesummary.entity';
//#endregion

export interface ManagedEBook extends Entity {
  //#region ODataApiGen Properties
  displayName: string;
  description?: string;
  publisher?: string;
  publishedDateTime: Date;
  largeCover?: MimeContent;
  createdDateTime: Date;
  lastModifiedDateTime: Date;
  informationUrl?: string;
  privacyInformationUrl?: string;
  assignments?: ManagedEBookAssignment[];
  installSummary?: EBookInstallSummary;
  deviceStates?: DeviceInstallState[];
  userStateSummary?: UserInstallStateSummary[];
  //#endregion
}