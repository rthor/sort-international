var groperty = require('groperty')
  , alphabet = '._!*@()[]{}#^&%-=+01234567989aāáǎàâãąbcćčçdďðeēéěèêëęfgğhıiīíǐìîïjklłmnńňñoōóǒòôpqrřsśšştťuūúǔùůûüǖǘǚǜvwxyýzźżžþæœøõåäö';
  
function international ( propList ) {
  return function(a, b) {
    var i = -1
      , aIndex
      , bIndex;

    if ( propList ) {
      a = groperty(a, propList);
      b = groperty(b, propList);
    }

    a = a.toLowerCase();
    b = b.toLowerCase();

    do {
      i++;
      aIndex = alphabet.indexOf(a[i]);
      bIndex = alphabet.indexOf(b[i]);
    } while (aIndex === bIndex);

    return aIndex - bIndex;
  };
}

if (typeof module === 'object' && module.hasOwnProperty('exports')) {
  module.exports = international;
}