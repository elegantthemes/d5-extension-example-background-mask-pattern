import { values } from 'lodash';

import { PatternJSONAsObject, PatternStyleData } from '@divi/mask-and-pattern-library';

import patternExampleOne from './pattern-example-1.json';
import patternExampleTwo from './pattern-example-2.json';


const map: PatternJSONAsObject = {
  [patternExampleOne.name]: patternExampleOne,
  [patternExampleTwo.name]: patternExampleTwo,
};

const sanitize = (patternStyleRaw: PatternJSONAsObject): PatternStyleData[] => (

  // On VB json files are imported as array, on storybook they are imported as Obj{default: array;}
  values(patternStyleRaw?.default ?? patternStyleRaw)
);

export const examplePatternStyles = sanitize(map);

