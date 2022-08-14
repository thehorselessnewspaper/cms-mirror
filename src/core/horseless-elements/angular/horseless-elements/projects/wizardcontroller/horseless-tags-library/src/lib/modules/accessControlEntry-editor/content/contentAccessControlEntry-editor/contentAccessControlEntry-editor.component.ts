import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContentEntitiesAccessControlEntry, ContentEntitiesACEPermission, ContentEntitiesACEPermissionScope, ContentEntitiesACEPermissionType } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { BehaviorSubject, from, map, Observable } from 'rxjs';

@Component({
  selector: 'lib-contentAccessControlEntry-editor',
  templateUrl: './contentAccessControlEntry-editor.component.html',
  styleUrls: ['./contentAccessControlEntry-editor.component.css']
})
export class ContentAccessControlEntryEditorComponent implements OnInit, OnChanges {
  @Input() accessControlEntries: ContentEntitiesAccessControlEntry[] = new Array<ContentEntitiesAccessControlEntry>();
  public ACEPermissionType = ContentEntitiesACEPermissionType;
  public ACEPermission = ContentEntitiesACEPermission;
  public ACEPermissionScope = ContentEntitiesACEPermissionScope;

  private accessControlEntrySubject : BehaviorSubject<ContentEntitiesAccessControlEntry[]> = new BehaviorSubject<ContentEntitiesAccessControlEntry[]>(
    this.accessControlEntries
  );

  public accessControlEntries$ = this.accessControlEntrySubject.pipe(
    map(data => {
      return data;
    })
  );

  constructor() {

   }

  ngOnChanges(changes: SimpleChanges): void {

    console.log("ContentAccessControlEntryEditorComponent change detection starting");


    // for(const propName in changes){
    //   console.log(`changed property name ${propName}`);

    //   console.log(`current value ${changes[propName].currentValue}`);
    //   console.log(`previous value ${changes[propName].previousValue}`);
    //   console.log(`first change ${changes[propName].firstChange}`);
    // }


    let accessControlEntryChanges = changes["accessControlEntries"];
    if(accessControlEntryChanges?.currentValue != null && accessControlEntryChanges?.currentValue != undefined)
    {
      console.log(`current value ${accessControlEntryChanges.currentValue}`);
      // this.accessControlEntries = accessControlEntryChanges.currentValue  as ContentEntitiesAccessControlEntry[];
      this.accessControlEntrySubject.next(this.accessControlEntries);
    }
    else{
      this.accessControlEntrySubject.next(this.accessControlEntries);
    }

    console.log("ContentAccessControlEntryEditorComponent change detection complete");
  }

  ngOnInit() {
    this.accessControlEntrySubject.next(this.accessControlEntries);
  }

}
