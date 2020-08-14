import {Spreadsheet} from './components/spreadsheet/Spreadsheet';
import './scss/index.scss';

const spreadsheet = new Spreadsheet('#app', {
  componets: [],
});
console.log('Spreadsheet', spreadsheet);
