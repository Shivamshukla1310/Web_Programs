import { multiply } from './math';

async function loadMathModule(){
    const math  = await import('./math.js');
    console.log('Dynamic imports output:');
    console.log('Addition: ' add(5,5));
    console.log("Multiply: " multiply(5,5));
}