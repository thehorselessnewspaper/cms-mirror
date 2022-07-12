import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { HostingEntitiesAccessControlEntry, HostingEntitiesACEPermission, HostingEntitiesACEPermissionType, HostingEntitiesACEPermissionScope } from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'lib-hostingAccessControlEntry-editor',
  templateUrl: './hostingAccessControlEntry-editor.component.html',
  styleUrls: ['./hostingAccessControlEntry-editor.component.css'],
})
export class HostingAccessControlEntryEditorComponent
  implements OnInit, OnChanges
{
  @Input() accessControlEntries: HostingEntitiesAccessControlEntry[] =
    new Array<HostingEntitiesAccessControlEntry>();

  public selectedItem! : HostingEntitiesAccessControlEntry;

  public ACEPermissionType = HostingEntitiesACEPermission;
  public ACEPermission = HostingEntitiesACEPermission;
  public ACEPermissionScope = HostingEntitiesACEPermissionScope;

  private accessControlEntrySubject: BehaviorSubject<
    HostingEntitiesAccessControlEntry[]
  > = new BehaviorSubject<HostingEntitiesAccessControlEntry[]>(
    this.accessControlEntries
  );

  public accessControlEntries$ = this.accessControlEntrySubject.pipe(
    map((data) => {
      return data;
    })
  );

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'HostingAccessControlEntryEditorComponent change detection starting'
    );

    for(const propName in changes){
      console.log(`changed property name ${propName}`);

      console.log(`previous value ${changes[propName].previousValue}`);
      console.log(`first change ${changes[propName].firstChange}`);
      console.log(`currentValue change ${changes[propName].currentValue}`);
    }

    let accessControlEntryChanges = changes['accessControlEntries'];

    if (
      accessControlEntryChanges?.currentValue != null &&
      accessControlEntryChanges?.currentValue != undefined
    ) {
      console.log(`current value ${accessControlEntryChanges.currentValue}`);
      this.accessControlEntries =
        accessControlEntryChanges.currentValue as HostingEntitiesAccessControlEntry[];
      this.accessControlEntrySubject.next(this.accessControlEntries);
    } else {
      this.accessControlEntrySubject.next(this.accessControlEntries);
    }
    console.log(
      'HostingAccessControlEntryEditorComponent change detection complete'
    );
  }

  ngOnInit() {
    this.accessControlEntrySubject.next(this.accessControlEntries);
  }
}
