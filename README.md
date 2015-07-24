# paper-tooltip

`<paper-tooltip>` is a Material Design label that appears when the user hovers
over an element with the cursor, or focuses the element with the keyboard.

If the target is focusable, the focus and blur event are preferred over the mouse-events.
So if the cursor is still in an input field, the tooltip stays althought the mouse was moved elsewhere.

## Attributes

* `align` - ['left', 'center', 'right']. Aligns the tooltip accordingly
* `margin-top` – The margin to keep to the target as a number in pixels
* `target` - specify the **ID** besides which the tooltip shall be shown; if none is given, the tooltip will the aligned to the parentNode.