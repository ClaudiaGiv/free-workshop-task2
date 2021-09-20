// Import stylesheets
import { trackOneRuntime } from "./setup.js";
import { trackTwoRuntime } from "./setup.js";
import { trackThreeRuntime } from "./setup.js";
import { trackFourRuntime } from "./setup.js";
import { trackFiveRuntime } from "./setup.js";
import { trackSixRuntime } from "./setup.js";
import { trackSevenRuntime } from "./setup.js";

/*
  Although the track times appear correctly, the album time does not! Currently, each of the following variables is a string instead of a number.
  
  Use your knowledge of JavaScript to update all of these values into numbers so that they add correctly.
*/

let albumRuntime =
  Number(trackOneRuntime) +
  Number(trackTwoRuntime) +
  Number(trackThreeRuntime) +
  Number(trackFourRuntime) +
  Number(trackFiveRuntime) +
  Number(trackSixRuntime) +
  Number(trackSevenRuntime);

//////////////////////////////////////////////////////
// Do not change anything below here.
//////////////////////////////////////////////////////

run(albumRuntime);
