var alphabet = '._!*@()[]{}#^&%-=+01234567989aāáǎàâãąbcćčçdďðeēéěèêëęfgğhıiīíǐìîïjklłmnńňñoōóǒòôpqrřsśšştťuūúǔùůûüǖǘǚǜvwxyýzźżžþæœøõåäö'
  , firstA
  , firstB;
  
module.exports = function ( by ) {
  return function(a, b) {
    if (by) {
      a = a[ by ];
      b = b[ by ];
    }

    a = a.toLowerCase();
    b = b.toLowerCase();

    firstA = alphabet.indexOf(a[0]);
    firstB = alphabet.indexOf(b[0]);

    return firstA === firstB ? a === b ? 0 : a < b ? -1 : 1 : firstA - firstB;
  }
};