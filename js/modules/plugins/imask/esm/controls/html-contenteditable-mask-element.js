import { d as _inherits, a as _createClass, b as _classCallCheck, e as _possibleConstructorReturn, f as _getPrototypeOf } from '../_rollupPluginBabelHelpers-3c58f0e3.js';
import IMask from '../core/holder.js';
import './mask-element.js';
import HTMLMaskElement from './html-mask-element.js';

var HTMLContenteditableMaskElement =
/*#__PURE__*/
function (_HTMLMaskElement) {
  _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);

  function HTMLContenteditableMaskElement() {
    _classCallCheck(this, HTMLContenteditableMaskElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(HTMLContenteditableMaskElement).apply(this, arguments));
  }

  _createClass(HTMLContenteditableMaskElement, [{
    key: "_unsafeSelect",

    /**
      Sets HTMLElement selection
      @override
    */
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "_unsafeSelectionStart",

    /**
      Returns HTMLElement selection start
      @override
    */
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && selection.anchorOffset;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && this._unsafeSelectionStart + String(selection).length;
    }
  }, {
    key: "value",
    get: function get() {
      // $FlowFixMe
      return this.input.textContent;
    },
    set: function set(value) {
      this.input.textContent = value;
    }
  }]);

  return HTMLContenteditableMaskElement;
}(HTMLMaskElement);
IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

export default HTMLContenteditableMaskElement;
