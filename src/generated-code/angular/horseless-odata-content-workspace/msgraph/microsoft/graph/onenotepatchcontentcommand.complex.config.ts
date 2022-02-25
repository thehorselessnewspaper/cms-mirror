//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenotePatchContentCommand } from './onenotepatchcontentcommand.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnenotePatchContentCommandComplexConfig = {
  name: 'onenotePatchContentCommand',
  fields: {
    action: {type: 'graph.onenotePatchActionType', nullable: false},
    target: {type: 'Edm.String', nullable: false},
    content: {type: 'Edm.String'},
    position: {type: 'graph.onenotePatchInsertPosition'}
  }
} as StructuredTypeConfig<OnenotePatchContentCommand>;
//#endregion