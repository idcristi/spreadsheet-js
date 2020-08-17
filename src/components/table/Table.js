import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createTable} from './table.template';
import {resizeTable} from './table.resize';
import {shouldResize} from './table.functions';

export class Table extends SpreadsheetComponent {
  static className = 'spreadsheet__table';

  constructor($root) {
    super($root, {
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(34);
  }

  onMousedown() {
    if (shouldResize(event)) {
      resizeTable(this.$root, event);
    }
  }
}
