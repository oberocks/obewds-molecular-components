import { d as _inherits, a as _createClass, b as _classCallCheck, e as _possibleConstructorReturn, f as _getPrototypeOf, g as _get } from '../_rollupPluginBabelHelpers-3c58f0e3.js';
import '../core/utils.js';
import '../core/change-details.js';
import '../core/continuous-tail-details.js';
import IMask from '../core/holder.js';
import Masked from './base.js';

/** Masking by RegExp */

var MaskedRegExp =
/*#__PURE__*/
function (_Masked) {
  _inherits(MaskedRegExp, _Masked);

  function MaskedRegExp() {
    _classCallCheck(this, MaskedRegExp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRegExp).apply(this, arguments));
  }

  _createClass(MaskedRegExp, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };

      _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedRegExp;
}(Masked);
IMask.MaskedRegExp = MaskedRegExp;

export default MaskedRegExp;
