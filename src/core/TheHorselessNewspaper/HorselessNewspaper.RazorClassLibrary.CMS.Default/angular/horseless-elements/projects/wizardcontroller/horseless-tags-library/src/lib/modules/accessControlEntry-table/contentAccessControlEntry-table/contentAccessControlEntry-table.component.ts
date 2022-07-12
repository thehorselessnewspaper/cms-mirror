import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ContentEntitiesAccessControlEntry,
  ContentEntitiesACEPermission,
  ContentEntitiesACEPermissionScope,
  ContentEntitiesACEPermissionType,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { StringCoercionPipe } from '../../../pipe/horseless-tags-pipes/stringCoercion.pipe';
import { MatAccordion } from '@angular/material/expansion';
@Component({
  selector: 'lib-contentAccessControlEntry-table',
  templateUrl: './contentAccessControlEntry-table.component.html',
  styleUrls: ['./contentAccessControlEntry-table.component.css'],
})
export class ContentAccessControlEntryTableComponent implements OnInit {
  @Input() accessControlEntries: ContentEntitiesAccessControlEntry[] =
    new Array<ContentEntitiesAccessControlEntry>();
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  public selectedItem!: ContentEntitiesAccessControlEntry;
  panelOpenState : boolean = false;

  public ACEPermissionType = ContentEntitiesACEPermissionType;
  public ACEPermission = ContentEntitiesACEPermission;
  public ACEPermissionScope = ContentEntitiesACEPermissionScope;
  constructor() {}

  ngOnInit() {}
}
