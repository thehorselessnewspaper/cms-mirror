//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IdentitySet } from './identityset.complex';
import { SharepointIds } from './sharepointids.complex';
import { File } from './file.complex';
import { FileSystemInfo } from './filesysteminfo.complex';
import { Folder } from './folder.complex';
import { Image } from './image.complex';
import { Package } from './package.complex';
import { ItemReference } from './itemreference.complex';
import { Shared } from './shared.complex';
import { SpecialFolder } from './specialfolder.complex';
import { Video } from './video.complex';
//#endregion

export interface RemoteItem {
  //#region ODataApiGen Properties
  createdBy?: IdentitySet;
  createdDateTime?: Date;
  file?: File;
  fileSystemInfo?: FileSystemInfo;
  folder?: Folder;
  image?: Image;
  id?: string;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  name?: string;
  package?: Package;
  parentReference?: ItemReference;
  shared?: Shared;
  sharepointIds?: SharepointIds;
  size?: number;
  specialFolder?: SpecialFolder;
  video?: Video;
  webDavUrl?: string;
  webUrl?: string;
  //#endregion
}