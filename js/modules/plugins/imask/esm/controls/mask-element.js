import { a as _createClass, b as _classCallCheck } from '../_rollupPluginBabelHelpers-3c58f0e3.js';
import IMask from '../core/holder.js';

/**
  Generic element API to use with mask
  @interface
*/
var MaskElement =
/*#__PURE__*/
function () {
  function MaskElement() {
    _classCallCheck(this, MaskElement);
  }

  _createClass(MaskElement, [{
    key: "select",

    /** Safely sets element selection */
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",

    /** Should be overriden in subclasses */
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }, {
    key: "selectionStart",

    /** */

    /** */

    /** */

    /** Safely returns selection start */
    get: function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
  }]);

  return MaskElement;
}();
IMask.MaskElement = MaskElement;

export default MaskElement;
