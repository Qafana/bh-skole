import { exportToCsv, exportToJson, replaceChars } from "./transform-data.js";
import { schools } from "./schools.js";

exportToCsv(schools, 'data/schools.csv');
exportToJson(schools, 'data/schools.json');
const modifiedSchools = replaceChars(schools);
exportToCsv(modifiedSchools, 'data/schools-ascii.csv');
exportToJson(modifiedSchools, 'data/schools-ascii.json');
