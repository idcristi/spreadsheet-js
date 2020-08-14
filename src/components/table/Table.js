import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class Table extends SpreadsheetComponent {
  static className = 'spreadsheet__table';

  toHTML() {
    return `
       <div class="row">
          <div class="row-info"></div>
          <div class="row-data">
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">D</div>
            <div class="column">E</div>
            <div class="column">F</div>
            <div class="column">G</div>
            <div class="column">H</div>
            <div class="column">I</div>
            <div class="column">J</div>
            <div class="column">L</div>
            <div class="column">L</div>
            <div class="column">M</div>
            <div class="column">N</div>
            <div class="column">O</div>
          </div>
        </div>

        <div class="row">
          <div class="row-info">1</div>
          <div class="row-data">
            <div class="cell selected" contenteditable="">1</div>
            <div class="cell" contenteditable="">2</div>
            <div class="cell" contenteditable="">3</div>
          </div>
        </div>

        <div class="row">
          <div class="row-info">1</div>
          <div class="row-data">
            <div class="cell" contenteditable="">1</div>
            <div class="cell" contenteditable="">2</div>
            <div class="cell" contenteditable="">3</div>
          </div>
        </div>
    `;
  }
}
