[![Published on NPM](https://img.shields.io/npm/v/@polymer/paper-tooltip.svg)](https://www.npmjs.com/package/@polymer/paper-tooltip)
[![Build status](https://travis-ci.org/PolymerElements/paper-tooltip.svg?branch=master)](https://travis-ci.org/PolymerElements/paper-tooltip)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/paper-tooltip)

## &lt;paper-tooltip&gt;
`<paper-tooltip>` is a label that appears on hover and focus when the user
hovers over an element with the cursor or with the keyboard. It will be centered
to an anchor element specified in the `for` attribute, or, if that doesn't exist,
centered to the parent node containing it.

See: [Documentation](https://www.webcomponents.org/element/@polymer/paper-tooltip),
  [Demo](https://www.webcomponents.org/element/@polymer/paper-tooltip/demo/demo/index.html).

## Usage

### Installation
```
npm install --save @polymer/paper-tooltip
```

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '@polymer/paper-tooltip/paper-tooltip.js';
    </script>
  </head>
  <body>
    <div style="display:inline-block">
      <button>Click me!</button>
      <paper-tooltip>Tooltip text</paper-tooltip>
    </div>

    <div>
      <button id="btn">Click me!</button>
      <paper-tooltip for="btn">Tooltip text</paper-tooltip>
    </div>
  </body>
</html>
```
### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-tooltip/paper-tooltip.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <div style="display:inline-block">
        <button>Click me!</button>
        <paper-tooltip>Tooltip text</paper-tooltip>
      </div>

      <div>
        <button id="btn">Click me!</button>
        <paper-tooltip for="btn">Tooltip text</paper-tooltip>
      </div>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/PolymerElements/paper-tooltip
cd paper-tooltip
npm install
npm install -g polymer-cli
```

### Running the demo locally
```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
