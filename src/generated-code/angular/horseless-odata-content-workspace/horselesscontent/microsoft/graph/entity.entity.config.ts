//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EntityEntityConfig = {
  name: 'entity',
  keys: [{name: 'id'}],
  fields: {
    id: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<Entity>;
//#endregion