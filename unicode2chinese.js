String.prototype.hexEncode = function() {
  var hex, i;

  var result = "";
  for (i = 0; i < this.length; i++) {
    hex = this.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }

  return result;
};

String.prototype.hexDecode = function() {
  var j;
  var hexes = this.match(/.{1,4}/g) || [];
  var back = "";
  for (j = 0; j < hexes.length; j++) {
    back += String.fromCharCode(parseInt(hexes[j], 16));
  }

  return back;
};

function unicode2chinese(str) {
  return unescape(str.replace(/\\u/g, '%u'));
}

var str = "\u6f22\u5b57"; // "\u6f22\u5b57" === "漢字"
alert(str.hexEncode().hexDecode());
alert(unicode2chinese(str));
