import { Component, Input, OnInit } from '@angular/core';
import {
  HostingEntitiesAccessControlEntry,
  HostingEntitiesACEPermission,
  HostingEntitiesACEPermissionType,
  HostingEntitiesACEPermissionScope,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { StringCoercionPipe } from '../../../pipe/horseless-tags-pipes/stringCoercion.pipe';
@Component({
  selector: 'lib-hostingAccessControlEntry-table',
  templateUrl: './hostingAccessControlEntry-table.component.html',
  styleUrls: ['./hostingAccessControlEntry-table.component.css'],
})
export class HostingAccessControlEntryTableComponent implements OnInit {
  @Input() accessControlEntries: HostingEntitiesAccessControlEntry[] =
    new Array<HostingEntitiesAccessControlEntry>();

  public selectedItem!: HostingEntitiesAccessControlEntry;
  public ACEPermissionType = HostingEntitiesACEPermission;
  public ACEPermission = HostingEntitiesACEPermission;
  public ACEPermissionScope = HostingEntitiesACEPermissionScope;
  constructor() {}

  ngOnInit() {}
}
