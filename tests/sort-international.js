var it = require('tape');
var international = require('../index')();

var arr = [
  'Jón Margeir Jónson', 'Fríður', 'Ægir', 'Friðgeir', 'Ásmundur', '.DS_Store', 'Élgraður', 'Sólmundur', 'Aron Ómarsson', 'Aron Omarsson'
];

var expectedArr = [
  '.DS_Store', 'Aron Omarsson', 'Aron Ómarsson', 'Ásmundur', 'Élgraður', 'Friðgeir', 'Fríður', 'Jón Margeir Jónson', 'Sólmundur', 'Ægir'
];

it('Should order corectly', function (test) {
  test.plan(arr.length);

  arr.sort( international ).forEach(function ( item, index ) {
    test.equals(index, expectedArr.indexOf(item));
  });
});