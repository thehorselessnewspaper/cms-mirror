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
import { AccessControlEntry } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/accesscontrolentry.entity';
import { ContentCollection } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/contentcollection.entity';
import { FilesystemAsset } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/filesystemasset.entity';
import { HorselessContent } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/horselesscontent.entity';
import { JSONAsset } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/jsonasset.entity';
import { MIMEType } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/mimetype.entity';
import { Principal } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/principal.entity';
//#endregion

@Injectable()
export class HorselessContentService extends ODataEntitySetService<HorselessContent> {
  constructor(client: ODataClient) {
    super(client, 'HorselessContent', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.HorselessContent');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlList(key: EntityKey<HorselessContent>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlList'); 
  }
  public fetchAccessControlList(key: EntityKey<HorselessContent>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlList(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlList(key: EntityKey<HorselessContent>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlList(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlList(key: EntityKey<HorselessContent>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlList(key).reference()
      .remove(target);
  }
  public contentCollections(key: EntityKey<HorselessContent>): ODataNavigationPropertyResource<ContentCollection> { 
    return this.entity(key).navigationProperty<ContentCollection>('ContentCollections'); 
  }
  public fetchContentCollections(key: EntityKey<HorselessContent>, options?: ODataQueryArgumentsOptions<ContentCollection>) {
    return this.fetchNavigationProperty<ContentCollection>(
      this.contentCollections(key), 
      'entities', options) as Observable<ODataEntities<ContentCollection>>;
  }
  public addContentCollectionToContentCollections(key: EntityKey<HorselessContent>, target: ODataEntityResource<ODataEntities<ContentCollection>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.contentCollections(key).reference()
      .add(target);
  }
  public removeContentCollectionFromContentCollections(key: EntityKey<HorselessContent>, {target, etag}: {target?: ODataEntityResource<ODataEntities<ContentCollection>>, etag?: string} = {}): Observable<any> {
    return this.contentCollections(key).reference()
      .remove(target);
  }
  public filesystemAsset(key: EntityKey<HorselessContent>): ODataNavigationPropertyResource<FilesystemAsset> { 
    return this.entity(key).navigationProperty<FilesystemAsset>('FilesystemAsset'); 
  }
  public fetchFilesystemAsset(key: EntityKey<HorselessContent>, options?: ODataQueryArgumentsOptions<FilesystemAsset>) {
    return this.fetchNavigationProperty<FilesystemAsset>(
      this.filesystemAsset(key), 
      'entity', options) as Observable<ODataEntity<FilesystemAsset>>;
  }
  public setFilesystemAssetAsFilesystemAsset(key: EntityKey<HorselessContent>, target: ODataEntityResource<ODataEntity<FilesystemAsset>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.filesystemAsset(key).reference()
      .set(target, {etag});
  }
  public unsetFilesystemAssetAsFilesystemAsset(key: EntityKey<HorselessContent>, {target, etag}: {target?: ODataEntityResource<ODataEntity<FilesystemAsset>>, etag?: string} = {}): Observable<any> {
    return this.filesystemAsset(key).reference()
      .unset({etag});
  }
  public jSONAsset(key: EntityKey<HorselessContent>): ODataNavigationPropertyResource<JSONAsset> { 
    return this.entity(key).navigationProperty<JSONAsset>('JSONAsset'); 
  }
  public fetchJSONAsset(key: EntityKey<HorselessContent>, options?: ODataQueryArgumentsOptions<JSONAsset>) {
    return this.fetchNavigationProperty<JSONAsset>(
      this.jSONAsset(key), 
      'entity', options) as Observable<ODataEntity<JSONAsset>>;
  }
  public setJSONAssetAsJSONAsset(key: EntityKey<HorselessContent>, target: ODataEntityResource<ODataEntity<JSONAsset>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.jSONAsset(key).reference()
      .set(target, {etag});
  }
  public unsetJSONAssetAsJSONAsset(key: EntityKey<HorselessContent>, {target, etag}: {target?: ODataEntityResource<ODataEntity<JSONAsset>>, etag?: string} = {}): Observable<any> {
    return this.jSONAsset(key).reference()
      .unset({etag});
  }
  public mIMEType(key: EntityKey<HorselessContent>): ODataNavigationPropertyResource<MIMEType> { 
    return this.entity(key).navigationProperty<MIMEType>('MIMEType'); 
  }
  public fetchMIMEType(key: EntityKey<HorselessContent>, options?: ODataQueryArgumentsOptions<MIMEType>) {
    return this.fetchNavigationProperty<MIMEType>(
      this.mIMEType(key), 
      'entity', options) as Observable<ODataEntity<MIMEType>>;
  }
  public setMIMETypeAsMIMEType(key: EntityKey<HorselessContent>, target: ODataEntityResource<ODataEntity<MIMEType>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.mIMEType(key).reference()
      .set(target, {etag});
  }
  public unsetMIMETypeAsMIMEType(key: EntityKey<HorselessContent>, {target, etag}: {target?: ODataEntityResource<ODataEntity<MIMEType>>, etag?: string} = {}): Observable<any> {
    return this.mIMEType(key).reference()
      .unset({etag});
  }
  public owners(key: EntityKey<HorselessContent>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<HorselessContent>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<HorselessContent>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<HorselessContent>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  //#endregion
}
