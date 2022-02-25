//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Phone } from './phone.complex';
import { Location } from './location.complex';
import { ScoredEmailAddress } from './scoredemailaddress.complex';
import { Website } from './website.complex';
import { PersonType } from './persontype.complex';
//#endregion

export interface Person extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  givenName?: string;
  surname?: string;
  birthday?: string;
  personNotes?: string;
  isFavorite?: boolean;
  scoredEmailAddresses?: ScoredEmailAddress[];
  phones?: Phone[];
  postalAddresses?: Location[];
  websites?: Website[];
  jobTitle?: string;
  companyName?: string;
  yomiCompany?: string;
  department?: string;
  officeLocation?: string;
  profession?: string;
  personType?: PersonType;
  userPrincipalName?: string;
  imAddress?: string;
  //#endregion
}