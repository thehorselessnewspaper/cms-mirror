//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaPrompt } from './mediaprompt.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaPromptComplexConfig = {
  name: 'mediaPrompt',
  base: 'microsoft.graph.prompt',
  fields: {
    mediaInfo: {type: 'graph.mediaInfo', nullable: false}
  }
} as StructuredTypeConfig<MediaPrompt>;
//#endregion