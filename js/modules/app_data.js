export { MC_BRAND } from './app_data/brand_data.js';
export { MC_STRUCTURE } from './app_data/structure_data.js';


import { MC_BRAND } from './app_data/brand_data.js';
import { MC_STRUCTURE } from './app_data/structure_data.js';


let MC = {};


MC.brand = MC_BRAND;
MC.structure = MC_STRUCTURE;


const APP_DATA = MC;


export { APP_DATA }