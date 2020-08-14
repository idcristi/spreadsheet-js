import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createTable} from './table.template';

export class Table extends SpreadsheetComponent {
  static className = 'spreadsheet__table';

  toHTML() {
    return createTable(34);
  }
}
