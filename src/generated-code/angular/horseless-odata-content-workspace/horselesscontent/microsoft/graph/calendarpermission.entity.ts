//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { CalendarRoleType } from './calendarroletype.enum';
import { EmailAddress } from './emailaddress.complex';
//#endregion

export interface CalendarPermission extends Entity {
  //#region ODataApiGen Properties
  emailAddress?: EmailAddress;
  isRemovable?: boolean;
  isInsideOrganization?: boolean;
  role?: CalendarRoleType;
  allowedRoles?: CalendarRoleType;
  //#endregion
}