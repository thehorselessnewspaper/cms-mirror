//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BaseItem } from './baseitem.entity';
import { GeoCoordinates } from './geocoordinates.complex';
import { Root } from './root.complex';
import { SharepointIds } from './sharepointids.complex';
import { Audio } from './audio.complex';
import { Deleted } from './deleted.complex';
import { File } from './file.complex';
import { FileSystemInfo } from './filesysteminfo.complex';
import { Folder } from './folder.complex';
import { Image } from './image.complex';
import { Package } from './package.complex';
import { Photo } from './photo.complex';
import { PublicationFacet } from './publicationfacet.complex';
import { RemoteItem } from './remoteitem.complex';
import { Shared } from './shared.complex';
import { SpecialFolder } from './specialfolder.complex';
import { Video } from './video.complex';
import { SearchResult } from './searchresult.complex';
import { ItemAnalytics } from './itemanalytics.entity';
import { ListItem } from './listitem.entity';
import { Subscription } from './subscription.entity';
import { Workbook } from './workbook.entity';
import { Permission } from './permission.entity';
import { ThumbnailSet } from './thumbnailset.entity';
import { DriveItemVersion } from './driveitemversion.entity';
//#endregion

export interface DriveItem extends BaseItem {
  //#region ODataApiGen Properties
  audio?: Audio;
  content?: any;
  cTag?: string;
  deleted?: Deleted;
  file?: File;
  fileSystemInfo?: FileSystemInfo;
  folder?: Folder;
  image?: Image;
  location?: GeoCoordinates;
  package?: Package;
  photo?: Photo;
  publication?: PublicationFacet;
  remoteItem?: RemoteItem;
  root?: Root;
  searchResult?: SearchResult;
  shared?: Shared;
  sharepointIds?: SharepointIds;
  size?: number;
  specialFolder?: SpecialFolder;
  video?: Video;
  webDavUrl?: string;
  workbook?: Workbook;
  analytics?: ItemAnalytics;
  children?: DriveItem[];
  listItem?: ListItem;
  permissions?: Permission[];
  subscriptions?: Subscription[];
  thumbnails?: ThumbnailSet[];
  versions?: DriveItemVersion[];
  //#endregion
}