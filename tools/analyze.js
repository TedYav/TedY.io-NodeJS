import run from './run';
import clean from './clean';
import copy from './copy';
import outputAnalysis from './outputAnalysis';
/**
 * Creates application bundles from the source files.
 */
async function analyze() {
  await run(clean);
  await run(copy);
  await run(outputAnalysis);
}

export default analyze;
