export default {
  /**
   * 特殊符号替换 *
   */
  symbolReplace: function (val) {
    return val.replace(/@/g, "'");
  },
  isNull(val) {
    return val === undefined || val === null;
  },
  isNotNull(val) {
    return !this.isNull(val);
  },
  isEmpty(val) {
    if (val === undefined || val === null) {
      return true;
    }
    if (val instanceof Date) {
      return val === null;
    }
    if (Array.isArray(val)) {
      return 0 === val.length;
    }
    if (typeof val === 'object') {
      return Object.keys(val).length === 0;
    }
    return 0 === String(val).trim().length;
  },
  isNotEmpty(val) {
    return !this.isEmpty(val);
  }

}