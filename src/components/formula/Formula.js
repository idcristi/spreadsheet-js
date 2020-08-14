import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class Formula extends SpreadsheetComponent {
  static className = 'spreadsheet__formula';

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable="" spellcheck="false"></div>
    `;
  }
}
