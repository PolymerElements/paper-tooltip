import '../../polymer/polymer.js';
import '../paper-tooltip.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: inline-block;
      }

      #button {
        width: 100px;
        height: 20px;
        background-color: red;
      }

      paper-tooltip {
        width: 70px;
        height: 30px;
      }

    </style>

    <div id="button"></div>
    <paper-tooltip id="buttonTooltip" for="button">Tooltip text</paper-tooltip>
`,

  is: 'test-button'
});
