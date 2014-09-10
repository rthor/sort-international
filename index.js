var groperty = require('groperty')
  , alphabet = 'aāáǎàâãąbcćčçdďðeēéěèêëęfgğhıiīíǐìîïjklłmnńňñoōóǒòôpqrřsśšştťuūúǔùůûüǖǘǚǜvwxyýzźżžþæœøõåäö';

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
      if (!a[i] && b[i]) return -1;
      if (a[i] && !b[i]) return 1;
      aIndex = alphabet.indexOf(a[i]);
      bIndex = alphabet.indexOf(b[i]);
      if (aIndex === -1 || bIndex === -1) {
        if (a[i] < b[i]) return -1;
        if (a[i] > b[i]) return 1;
      }
    } while (aIndex === bIndex && i < a.length && i < b.length);

    return aIndex - bIndex;
  };
}

if (typeof module === 'object' && module.hasOwnProperty('exports')) {
  module.exports = international;
}