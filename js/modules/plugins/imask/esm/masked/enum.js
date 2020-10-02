import { d as _inherits, a as _createClass, b as _classCallCheck, e as _possibleConstructorReturn, f as _getPrototypeOf, g as _get } from '../_rollupPluginBabelHelpers-3c58f0e3.js';
import '../core/utils.js';
import '../core/change-details.js';
import '../core/continuous-tail-details.js';
import IMask from '../core/holder.js';
import './base.js';
import './factory.js';
import './pattern/input-definition.js';
import './pattern/fixed-definition.js';
import './pattern/chunk-tail-details.js';
import './regexp.js';
import MaskedPattern from './pattern.js';

/** Pattern which validates enum values */

var MaskedEnum =
/*#__PURE__*/
function (_MaskedPattern) {
  _inherits(MaskedEnum, _MaskedPattern);

  function MaskedEnum() {
    _classCallCheck(this, MaskedEnum);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedEnum).apply(this, arguments));
  }

  _createClass(MaskedEnum, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

      _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedEnum;
}(MaskedPattern);
IMask.MaskedEnum = MaskedEnum;

export default MaskedEnum;
