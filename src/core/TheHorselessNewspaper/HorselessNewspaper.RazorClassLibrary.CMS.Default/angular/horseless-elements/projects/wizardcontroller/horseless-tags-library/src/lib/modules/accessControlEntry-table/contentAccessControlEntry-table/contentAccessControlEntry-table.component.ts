import { Component, Input, OnInit } from '@angular/core';
import {
  ContentEntitiesAccessControlEntry,
  ContentEntitiesACEPermission,
  ContentEntitiesACEPermissionScope,
  ContentEntitiesACEPermissionType,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { StringCoercionPipe } from '../../../pipe/horseless-tags-pipes/stringCoercion.pipe';
@Component({
  selector: 'lib-contentAccessControlEntry-table',
  templateUrl: './contentAccessControlEntry-table.component.html',
  styleUrls: ['./contentAccessControlEntry-table.component.css'],
})
export class ContentAccessControlEntryTableComponent implements OnInit {
  @Input() accessControlEntries: ContentEntitiesAccessControlEntry[] =
    new Array<ContentEntitiesAccessControlEntry>();
  public selectedItem!: ContentEntitiesAccessControlEntry;

  public ACEPermissionType = ContentEntitiesACEPermissionType;
  public ACEPermission = ContentEntitiesACEPermission;
  public ACEPermissionScope = ContentEntitiesACEPermissionScope;
  constructor() {}

  ngOnInit() {}
}
