//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { CalendarColor } from './calendarcolor.enum';
import { OnlineMeetingProviderType } from './onlinemeetingprovidertype.enum';
import { EmailAddress } from './emailaddress.complex';
import { Event } from './event.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { CalendarPermission } from './calendarpermission.entity';
//#endregion

export interface Calendar extends Entity {
  //#region ODataApiGen Properties
  name?: string;
  color?: CalendarColor;
  changeKey?: string;
  canShare?: boolean;
  canViewPrivateItems?: boolean;
  canEdit?: boolean;
  owner?: EmailAddress;
  allowedOnlineMeetingProviders?: OnlineMeetingProviderType;
  defaultOnlineMeetingProvider?: OnlineMeetingProviderType;
  isTallyingResponses?: boolean;
  isRemovable?: boolean;
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  calendarPermissions?: CalendarPermission[];
  events?: Event[];
  calendarView?: Event[];
  //#endregion
}