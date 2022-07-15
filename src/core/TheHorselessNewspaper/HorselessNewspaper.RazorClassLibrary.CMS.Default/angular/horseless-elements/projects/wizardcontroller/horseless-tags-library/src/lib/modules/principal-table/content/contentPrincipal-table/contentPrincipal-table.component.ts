import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ContentEntitiesAccessControlEntry, ContentEntitiesPrincipal } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { PrincipalQueryService } from './services/principalQuery.service';

@Component({
  selector: 'lib-contentPrincipal-table',
  templateUrl: './contentPrincipal-table.component.html',
  styleUrls: ['./contentPrincipal-table.component.css']
})

export class ContentPrincipalTableComponent implements OnInit {

  @Input() principals: ContentEntitiesPrincipal[] =
    new Array<ContentEntitiesPrincipal>();
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  public selectedItem!: ContentEntitiesPrincipal;
  panelOpenState : boolean = false;
  principalService! : PrincipalQueryService;

  constructor(principalService: PrincipalQueryService) {
    this.principalService = principalService;
  }

  ngOnInit() {
    console.log(`ContentPrincipalTableComponent starting`);
  }

}
