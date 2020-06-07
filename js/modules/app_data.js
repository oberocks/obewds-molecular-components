export { DM_BRAND } from './app_data/brand_data.js';
export { DM_STRUCTURE } from './app_data/structure_data.js';


import { DM_BRAND } from './app_data/brand_data.js';
import { DM_STRUCTURE } from './app_data/structure_data.js';


let DM = {};


DM.brand = DM_BRAND;
DM.structure = DM_STRUCTURE;


const APP_DATA = DM;


export { APP_DATA }