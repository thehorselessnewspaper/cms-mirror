//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ExtensionSchemaProperty } from './extensionschemaproperty.complex';
//#endregion

export interface SchemaExtension extends Entity {
  //#region ODataApiGen Properties
  description?: string;
  targetTypes: string[];
  properties: ExtensionSchemaProperty[];
  status: string;
  owner: string;
  //#endregion
}