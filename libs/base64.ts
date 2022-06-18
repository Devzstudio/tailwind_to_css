export var Base64 = {
  _Rixits:
    //   0       8       16      24      32      40      48      56     63
    //   v       v       v       v       v       v       v       v      v
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/',
  // You have the freedom, here, to choose the glyphs you want for
  // representing your base-64 numbers. The ASCII encoding guys usually
  // choose a set of glyphs beginning with ABCD..., but, looking at
  // your update #2, I deduce that you want glyphs beginning with
  // 0123..., which is a fine choice and aligns the first ten numbers
  // in base 64 with the first ten numbers in decimal.

  // This cannot handle negative numbers and only works on the
  //     integer part, discarding the fractional part.
  // Doing better means deciding on whether you're just representing
  // the subset of javascript numbers of twos-complement 32-bit integers
  // or going with base-64 representations for the bit pattern of the
  // underlying IEEE floating-point number, or representing the mantissae
  // and exponents separately, or some other possibility. For now, bail
  fromNumber: function (number) {
    if (
      isNaN(Number(number)) ||
      number === null ||
      number === Number.POSITIVE_INFINITY
    )
      throw 'The input is not valid';
    //if (number < 0) throw "Can't represent negative numbers now";
    if (number < 0) number = -number;

    var rixit; // like 'digit', only in some non-decimal radix
    var residual = Math.floor(number);
    var result = '';
    while (true) {
      rixit = residual % 64;
      // console.log("rixit : " + rixit);
      // console.log("result before : " + result);
      result = this._Rixits.charAt(rixit) + result;
      // console.log("result after : " + result);
      // console.log("residual before : " + residual);
      residual = Math.floor(residual / 64);
      // console.log("residual after : " + residual);

      if (residual == 0) break;
    }
    return result;
  },

  toNumber: function (rixits) {
    var result = 0;
    // console.log("rixits : " + rixits);
    // console.log("rixits.split('') : " + rixits.split(''));
    rixits = rixits.split('');
    for (var e = 0; e < rixits.length; e++) {
      // console.log("_Rixits.indexOf(" + rixits[e] + ") : " +
      // this._Rixits.indexOf(rixits[e]));
      // console.log("result before : " + result);
      result = result * 64 + this._Rixits.indexOf(rixits[e]);
      // console.log("result after : " + result);
    }
    return result;
  },
};
