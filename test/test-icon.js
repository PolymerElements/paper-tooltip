import '../../polymer/polymer.js';
import '../paper-tooltip.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: inline-block;
      }

      #icon {
        width: 100px;
        height: 20px;
        background-color: red;
      }

      paper-tooltip {
        width: 70px;
        height: 30px;
      }

    </style>

    <div id="icon"></div>
    <paper-tooltip id="iconTooltip" for="icon"><slot></slot></paper-tooltip>
`,

  is: 'test-icon'
});
