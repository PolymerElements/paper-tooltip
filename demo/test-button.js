import '../../polymer/polymer.js';
import '../../paper-icon-button/paper-icon-button.js';
import '../../iron-icons/iron-icons.js';
import '../paper-tooltip.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: inline-block;
      }

      paper-icon-button {
        padding: 0;
      }
    </style>

    <paper-icon-button id="m" icon="menu" alt="menu"></paper-icon-button>
    <paper-tooltip for="m" offset="8">hot dogs</paper-tooltip>
`,

  is: 'test-button'
});
