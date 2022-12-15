import { values } from 'lodash';

import { MaskJSONAsObject, MaskStyleData } from '@divi/mask-and-pattern-library';

import maskExampleOne from './mask-example-1.json';
import maskExampleTwo from './mask-example-2.json';


const map: MaskJSONAsObject = {
  [maskExampleOne.name]: maskExampleOne,
  [maskExampleTwo.name]: maskExampleTwo,
};

const sanitize = (maskStyleRaw: MaskJSONAsObject): MaskStyleData[] => (

  // On VB json files are imported as array, on storybook they are imported as Obj{default: array;}
  values(maskStyleRaw?.default ?? maskStyleRaw)
);

export const exampleMaskStyles = sanitize(map);
