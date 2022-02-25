import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
  ODataEntity,
  ODataEntities,
  ODataProperty,
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
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
import { ItemReference } from './itemreference.complex';
import { Shared } from './shared.complex';
import { SpecialFolder } from './specialfolder.complex';
import { Video } from './video.complex';
import { SearchResult } from './searchresult.complex';
import { UploadSession } from './uploadsession.complex';
import { DriveItemUploadableProperties } from './driveitemuploadableproperties.complex';
import { DriveRecipient } from './driverecipient.complex';
import { ItemPreviewInfo } from './itempreviewinfo.complex';
import { DriveItem } from './driveitem.entity';
import { Permission } from './permission.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
//#endregion

@Injectable()
export class WorkbooksService extends ODataEntitySetService<DriveItem> {
  constructor(client: ODataClient) {
    super(client, 'workbooks', 'microsoft.graph.driveItem');
  }
  //#region ODataApiGen Actions
  public checkin(key: EntityKey<DriveItem>): ODataActionResource<{checkInAs: string, comment: string}, any> { 
    return this.entity(key).action<{checkInAs: string, comment: string}, any>('microsoft.graph.checkin');
  }
  public callCheckin(key: EntityKey<DriveItem>, checkInAs: string, comment: string, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{checkInAs: string, comment: string}, any>(
      {checkInAs, comment}, 
      this.checkin(key), 
      'none', options);
  }
  public checkout(key: EntityKey<DriveItem>): ODataActionResource<null, any> { 
    return this.entity(key).action<null, any>('microsoft.graph.checkout');
  }
  public callCheckout(key: EntityKey<DriveItem>, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<null, any>(
      null, 
      this.checkout(key), 
      'none', options);
  }
  public copy(key: EntityKey<DriveItem>): ODataActionResource<{name: string, parentReference: ItemReference}, DriveItem> { 
    return this.entity(key).action<{name: string, parentReference: ItemReference}, DriveItem>('microsoft.graph.copy');
  }
  public callCopy(key: EntityKey<DriveItem>, name: string, parentReference: ItemReference, options?: ODataQueryArgumentsOptions<DriveItem>) {
    return this.callAction<{name: string, parentReference: ItemReference}, DriveItem>(
      {name, parentReference}, 
      this.copy(key), 
      'entity', options) as Observable<ODataEntity<DriveItem>>;
  }
  public createLink(key: EntityKey<DriveItem>): ODataActionResource<{type: string, scope: string, expirationDateTime: Date, password: string, message: string}, Permission> { 
    return this.entity(key).action<{type: string, scope: string, expirationDateTime: Date, password: string, message: string}, Permission>('microsoft.graph.createLink');
  }
  public callCreateLink(key: EntityKey<DriveItem>, type: string, scope: string, expirationDateTime: Date, password: string, message: string, options?: ODataQueryArgumentsOptions<Permission>) {
    return this.callAction<{type: string, scope: string, expirationDateTime: Date, password: string, message: string}, Permission>(
      {type, scope, expirationDateTime, password, message}, 
      this.createLink(key), 
      'entity', options) as Observable<ODataEntity<Permission>>;
  }
  public createUploadSession(key: EntityKey<DriveItem>): ODataActionResource<{item: DriveItemUploadableProperties}, UploadSession> { 
    return this.entity(key).action<{item: DriveItemUploadableProperties}, UploadSession>('microsoft.graph.createUploadSession');
  }
  public callCreateUploadSession(key: EntityKey<DriveItem>, item: DriveItemUploadableProperties, options?: ODataQueryArgumentsOptions<UploadSession>) {
    return this.callAction<{item: DriveItemUploadableProperties}, UploadSession>(
      {item}, 
      this.createUploadSession(key), 
      'entity', options) as Observable<ODataEntity<UploadSession>>;
  }
  public follow(key: EntityKey<DriveItem>): ODataActionResource<null, DriveItem> { 
    return this.entity(key).action<null, DriveItem>('microsoft.graph.follow');
  }
  public callFollow(key: EntityKey<DriveItem>, options?: ODataQueryArgumentsOptions<DriveItem>) {
    return this.callAction<null, DriveItem>(
      null, 
      this.follow(key), 
      'entity', options) as Observable<ODataEntity<DriveItem>>;
  }
  public unfollow(key: EntityKey<DriveItem>): ODataActionResource<null, any> { 
    return this.entity(key).action<null, any>('microsoft.graph.unfollow');
  }
  public callUnfollow(key: EntityKey<DriveItem>, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<null, any>(
      null, 
      this.unfollow(key), 
      'none', options);
  }
  public invite(key: EntityKey<DriveItem>): ODataActionResource<{requireSignIn: boolean, roles: string[], sendInvitation: boolean, message: string, recipients: DriveRecipient[], expirationDateTime: string, password: string}, Permission> { 
    return this.entity(key).action<{requireSignIn: boolean, roles: string[], sendInvitation: boolean, message: string, recipients: DriveRecipient[], expirationDateTime: string, password: string}, Permission>('microsoft.graph.invite');
  }
  public callInvite(key: EntityKey<DriveItem>, requireSignIn: boolean, roles: string[], sendInvitation: boolean, message: string, recipients: DriveRecipient[], expirationDateTime: string, password: string, options?: ODataQueryArgumentsOptions<Permission>) {
    return this.callAction<{requireSignIn: boolean, roles: string[], sendInvitation: boolean, message: string, recipients: DriveRecipient[], expirationDateTime: string, password: string}, Permission>(
      {requireSignIn, roles, sendInvitation, message, recipients, expirationDateTime, password}, 
      this.invite(key), 
      'entities', options) as Observable<ODataEntities<Permission>>;
  }
  public preview(key: EntityKey<DriveItem>): ODataActionResource<{page: string, zoom: number}, ItemPreviewInfo> { 
    return this.entity(key).action<{page: string, zoom: number}, ItemPreviewInfo>('microsoft.graph.preview');
  }
  public callPreview(key: EntityKey<DriveItem>, page: string, zoom: number, options?: ODataQueryArgumentsOptions<ItemPreviewInfo>) {
    return this.callAction<{page: string, zoom: number}, ItemPreviewInfo>(
      {page, zoom}, 
      this.preview(key), 
      'entity', options) as Observable<ODataEntity<ItemPreviewInfo>>;
  }
  //#endregion
  //#region ODataApiGen Functions
  public delta(key: EntityKey<DriveItem>): ODataFunctionResource<{token?: string}, DriveItem> { 
    return this.entity(key).function<{token?: string}, DriveItem>('microsoft.graph.delta');
  }
  public callDelta(key: EntityKey<DriveItem>, token?: string, options?: ODataQueryArgumentsOptions<DriveItem>) {
    return this.callFunction<{token?: string}, DriveItem>(
      {token}, 
      this.delta(key), 
      'entities', options) as Observable<ODataEntities<DriveItem>>;
  }
  public getActivitiesByInterval(key: EntityKey<DriveItem>): ODataFunctionResource<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat> { 
    return this.entity(key).function<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat>('microsoft.graph.getActivitiesByInterval');
  }
  public callGetActivitiesByInterval(key: EntityKey<DriveItem>, startDateTime?: string, endDateTime?: string, interval?: string, options?: ODataQueryArgumentsOptions<ItemActivityStat>) {
    return this.callFunction<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat>(
      {startDateTime, endDateTime, interval}, 
      this.getActivitiesByInterval(key), 
      'entities', options) as Observable<ODataEntities<ItemActivityStat>>;
  }
  public search(key: EntityKey<DriveItem>): ODataFunctionResource<{q: string}, DriveItem> { 
    return this.entity(key).function<{q: string}, DriveItem>('microsoft.graph.search');
  }
  public callSearch(key: EntityKey<DriveItem>, q: string, options?: ODataQueryArgumentsOptions<DriveItem>) {
    return this.callFunction<{q: string}, DriveItem>(
      {q}, 
      this.search(key), 
      'entities', options) as Observable<ODataEntities<DriveItem>>;
  }
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
