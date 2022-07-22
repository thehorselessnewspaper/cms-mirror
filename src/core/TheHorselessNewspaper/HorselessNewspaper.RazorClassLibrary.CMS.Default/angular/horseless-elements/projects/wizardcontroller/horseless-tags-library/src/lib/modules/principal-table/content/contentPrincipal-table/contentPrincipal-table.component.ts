import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { PrincipalService } from '@horselessnewspaper/horseless-content-odataapi';
import { ContentEntitiesAccessControlEntry, ContentEntitiesPrincipal } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { PrincipalQueryService } from './services/principalQuery.service';
import {from, Observable, BehaviorSubject} from 'rxjs';
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
  principals$: BehaviorSubject<ContentEntitiesPrincipal[]> =
    new BehaviorSubject<ContentEntitiesPrincipal[]>(
      new Array<ContentEntitiesPrincipal>()
    );

  constructor() {


  }

  ngOnInit(): void {
    console.log(`ContentPrincipalTableComponent starting`);

  }

}
