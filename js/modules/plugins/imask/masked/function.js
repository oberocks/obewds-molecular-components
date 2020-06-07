import { d as _inherits, a as _createClass, b as _classCallCheck, e as _possibleConstructorReturn, f as _getPrototypeOf, g as _get } from '../_rollupPluginBabelHelpers-3c58f0e3.js';
import '../core/utils.js';
import '../core/change-details.js';
import '../core/continuous-tail-details.js';
import IMask from '../core/holder.js';
import Masked from './base.js';

/** Masking by custom Function */

var MaskedFunction =
/*#__PURE__*/
function (_Masked) {
  _inherits(MaskedFunction, _Masked);

  function MaskedFunction() {
    _classCallCheck(this, MaskedFunction);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedFunction).apply(this, arguments));
  }

  _createClass(MaskedFunction, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;

      _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedFunction;
}(Masked);
IMask.MaskedFunction = MaskedFunction;

export default MaskedFunction;
