export * from './contentCollection.service';
import { ContentCollectionService } from './contentCollection.service';
export * from './filesystemAsset.service';
import { FilesystemAssetService } from './filesystemAsset.service';
export * from './holonym.service';
import { HolonymService } from './holonym.service';
export * from './horselessContent.service';
import { HorselessContentService } from './horselessContent.service';
export * from './horselessSession.service';
import { HorselessSessionService } from './horselessSession.service';
export * from './jSONAsset.service';
import { JSONAssetService } from './jSONAsset.service';
export * from './meronym.service';
import { MeronymService } from './meronym.service';
export * from './mimeType.service';
import { MimeTypeService } from './mimeType.service';
export * from './navigationMenu.service';
import { NavigationMenuService } from './navigationMenu.service';
export * from './navigationMenuItem.service';
import { NavigationMenuItemService } from './navigationMenuItem.service';
export * from './tenant.service';
import { TenantService } from './tenant.service';
export const APIS = [ContentCollectionService, FilesystemAssetService, HolonymService, HorselessContentService, HorselessSessionService, JSONAssetService, MeronymService, MimeTypeService, NavigationMenuService, NavigationMenuItemService, TenantService];
