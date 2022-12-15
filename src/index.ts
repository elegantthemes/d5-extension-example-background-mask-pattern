import { addFilter } from '@wordpress/hooks';
import {
    MaskStyleData,
    PatternStyleData,
} from "@divi/mask-and-pattern-library";

import {
    exampleMaskStyles,
    examplePatternStyles,
} from "./components";

/**
 * Add example Patterns to Divi Pattern Styles.
 */
addFilter('divi.maskAndPatternLibrary.pattern', 'd5-extension-example-background-mask-pattern', (patternStyles: PatternStyleData[]) => {
    // Sanity check.
    if (! patternStyles.length) {
        return patternStyles;
    }

    // Add the pattern styles.
    return [
        ...patternStyles,
        ...examplePatternStyles,
    ];
}, 10);

/**
 * Add example Masks to Divi Mask Styles.
 */
addFilter('divi.maskAndPatternLibrary.mask', 'd5-extension-example-background-mask-pattern', (maskStyles: MaskStyleData[]) => {
    // Sanity check.
    if (! maskStyles.length) {
        return maskStyles;
    }

    // Add the mask styles.
    return [
        ...maskStyles,
        ...exampleMaskStyles,
    ];
}, 10);

