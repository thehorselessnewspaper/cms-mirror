//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ColumnDefinition } from './columndefinition.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ColumnDefinitionEntityConfig = {
  name: 'columnDefinition',
  base: 'microsoft.graph.entity',
  fields: {
    boolean: {type: 'graph.booleanColumn'},
    calculated: {type: 'graph.calculatedColumn'},
    choice: {type: 'graph.choiceColumn'},
    columnGroup: {type: 'Edm.String'},
    currency: {type: 'graph.currencyColumn'},
    dateTime: {type: 'graph.dateTimeColumn'},
    defaultValue: {type: 'graph.defaultColumnValue'},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    enforceUniqueValues: {type: 'Edm.Boolean'},
    hidden: {type: 'Edm.Boolean'},
    indexed: {type: 'Edm.Boolean'},
    lookup: {type: 'graph.lookupColumn'},
    name: {type: 'Edm.String'},
    number: {type: 'graph.numberColumn'},
    personOrGroup: {type: 'graph.personOrGroupColumn'},
    readOnly: {type: 'Edm.Boolean'},
    required: {type: 'Edm.Boolean'},
    text: {type: 'graph.textColumn'}
  }
} as StructuredTypeConfig<ColumnDefinition>;
//#endregion