//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OutlookItem } from './outlookitem.entity';
import { EmailAddress } from './emailaddress.complex';
import { PhysicalAddress } from './physicaladdress.complex';
import { ProfilePhoto } from './profilephoto.entity';
import { Extension } from './extension.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
//#endregion

export interface Contact extends OutlookItem {
  //#region ODataApiGen Properties
  parentFolderId?: string;
  birthday?: Date;
  fileAs?: string;
  displayName?: string;
  givenName?: string;
  initials?: string;
  middleName?: string;
  nickName?: string;
  surname?: string;
  title?: string;
  yomiGivenName?: string;
  yomiSurname?: string;
  yomiCompanyName?: string;
  generation?: string;
  emailAddresses?: EmailAddress[];
  imAddresses?: string[];
  jobTitle?: string;
  companyName?: string;
  department?: string;
  officeLocation?: string;
  profession?: string;
  businessHomePage?: string;
  assistantName?: string;
  manager?: string;
  homePhones?: string[];
  mobilePhone?: string;
  businessPhones?: string[];
  homeAddress?: PhysicalAddress;
  businessAddress?: PhysicalAddress;
  otherAddress?: PhysicalAddress;
  spouseName?: string;
  personalNotes?: string;
  children?: string[];
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  photo?: ProfilePhoto;
  extensions?: Extension[];
  //#endregion
}