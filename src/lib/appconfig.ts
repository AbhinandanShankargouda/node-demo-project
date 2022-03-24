import * as path from 'path';
import  * as fs from 'fs';

import {Iconfiguration} from './typedef';

const basePath = path.join(__dirname, '..','config');
const fileSpec = path.join(basePath,'appconfig.json');

export const configuration: Iconfiguration = JSON.parse((fs.readFileSync(fileSpec).toString()));
