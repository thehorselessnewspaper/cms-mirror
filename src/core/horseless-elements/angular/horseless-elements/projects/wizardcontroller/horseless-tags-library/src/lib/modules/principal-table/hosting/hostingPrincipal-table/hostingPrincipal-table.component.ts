import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ContentEntitiesPrincipal, HostingEntitiesPrincipal } from '@wizardcontrollerprerelease/horseless-contentapi-lib';

@Component({
  selector: 'lib-hostingPrincipal-table',
  templateUrl: './hostingPrincipal-table.component.html',
  styleUrls: ['./hostingPrincipal-table.component.css']
})
export class HostingPrincipalTableComponent implements OnInit {

  @Input() principals: HostingEntitiesPrincipal[] =
    new Array<HostingEntitiesPrincipal>();
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  public selectedItem!: ContentEntitiesPrincipal;
  panelOpenState : boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
