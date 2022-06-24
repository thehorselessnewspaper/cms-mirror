//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ACEPermissionScope } from './acepermissionscope.enum';
import { ACEPermission } from './acepermission.enum';
import { ACEPermissionType } from './acepermissiontype.enum';
import { ContentCollection } from './contentcollection.entity';
import { HorselessContent } from './horselesscontent.entity';
import { HorselessSession } from './horselesssession.entity';
import { HorselessView } from './horselessview.entity';
import { Principal } from './principal.entity';
import { Publication } from './publication.entity';
import { Tenant } from './tenant.entity';
//#endregion

export interface AccessControlEntry {
  //#region ODataApiGen Properties
  Id: string;
  DisplayName?: string;
  ObjectId?: string;
  IsSoftDeleted?: boolean;
  CreatedAt?: Date;
  IsActive?: boolean;
  Scope: ACEPermissionScope;
  Permission: ACEPermission;
  PermissionType: ACEPermissionType;
  Timestamp: ArrayBuffer;
  UpdatedAt?: Date;
  DictionaryKey?: string;
  AccessControlEntries?: AccessControlEntry[];
  Owners?: Principal[];
  SubjectAccessControlEntries?: AccessControlEntry[];
  SubjectHorselessSessions?: HorselessSession[];
  SubjectPrincipals?: Principal[];
  SubjectTenants?: Tenant[];
  ManagedContentCollections?: ContentCollection[];
  ManagedHorselessContents?: HorselessContent[];
  ManagedHorselessViews?: HorselessView[];
  ManagedPublications?: Publication[];
  //#endregion
}