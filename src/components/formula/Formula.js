import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class Formula extends SpreadsheetComponent {
  static className = 'spreadsheet__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable="" spellcheck="false"></div>
    `;
  }

  onInput() {
    console.log('Formula: onInput', event.target.textContent.trim());
  }

  onClick() {}
}
