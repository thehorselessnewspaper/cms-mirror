//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { BooleanColumn } from './booleancolumn.complex';
import { CalculatedColumn } from './calculatedcolumn.complex';
import { ChoiceColumn } from './choicecolumn.complex';
import { CurrencyColumn } from './currencycolumn.complex';
import { DateTimeColumn } from './datetimecolumn.complex';
import { DefaultColumnValue } from './defaultcolumnvalue.complex';
import { LookupColumn } from './lookupcolumn.complex';
import { NumberColumn } from './numbercolumn.complex';
import { PersonOrGroupColumn } from './personorgroupcolumn.complex';
import { TextColumn } from './textcolumn.complex';
//#endregion

export interface ColumnDefinition extends Entity {
  //#region ODataApiGen Properties
  boolean?: BooleanColumn;
  calculated?: CalculatedColumn;
  choice?: ChoiceColumn;
  columnGroup?: string;
  currency?: CurrencyColumn;
  dateTime?: DateTimeColumn;
  defaultValue?: DefaultColumnValue;
  description?: string;
  displayName?: string;
  enforceUniqueValues?: boolean;
  hidden?: boolean;
  indexed?: boolean;
  lookup?: LookupColumn;
  name?: string;
  number?: NumberColumn;
  personOrGroup?: PersonOrGroupColumn;
  readOnly?: boolean;
  required?: boolean;
  text?: TextColumn;
  //#endregion
}