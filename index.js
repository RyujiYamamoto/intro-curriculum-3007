'use strict';

/**
 * 整数が17で割り切れるかどうかを判定する。
 * @param {integer} int
 * @return {boolean} 17で割り切れる整数の場合true、それ以外の場合false
 */
function isMultipleOfSeventeen(int) {
    if (!Number.isInteger(int)) {
        return false;
    }

    if (int % 17 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
