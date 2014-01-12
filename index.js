var groperty = require('groperty')
  , alphabet = '._!*@()[]{}#^&%-=+01234567989aāáǎàâãąbcćčçdďðeēéěèêëęfgğhıiīíǐìîïjklłmnńňñoōóǒòôpqrřsśšştťuūúǔùůûüǖǘǚǜvwxyýzźżžþæœøõåäö'
  , firstA
  , firstB;
  
module.exports = function ( propList ) {
  return function(a, b) {
    if ( propList ) {
      a = groperty(a, propList);
      b = groperty(b, propList);
    }

    a = a.toLowerCase();
    b = b.toLowerCase();

    firstA = alphabet.indexOf(a[0]);
    firstB = alphabet.indexOf(b[0]);

    return firstA === firstB ? a === b ? 0 : a < b ? -1 : 1 : firstA - firstB;
  }
};