var it = require('tape');
var international = require('../index');

var arr = [
  'Jón Margeir Jónson', 'Fríður', 'Ægir', 'Friðgeir', 'Aron Sigurðsson', 'Ásmundur', '.DS_Store', 'Élgraður', 'Sólmundur', 'Aron Ómarsson', 'Aron Omarsson'
];

var expectedArr = [
  '.DS_Store', 'Aron Omarsson', 'Aron Ómarsson', 'Aron Sigurðsson', 'Ásmundur', 'Élgraður', 'Friðgeir', 'Fríður', 'Jón Margeir Jónson', 'Sólmundur', 'Ægir'
];

var objArr = [
  {name: 'Jón Margeir Jónson', age: 67}, {name: 'Fríður', age: 67}, {name: 'Ægir', age: 67}, {name: 'Friðgeir', age: 67}, {name: 'Ásmundur', age: 67}, {name: '.DS_Store', age: 67}, {name: 'Élgraður', age: 67}, {name: 'Sólmundur', age: 67}, {name: 'Aron Ómarsson', age: 67}, {name: 'Aron Omarsson', age: 67}
];

var expectedObjArr = [
  {name: '.DS_Store', age: 67}, {name: 'Aron Omarsson', age: 67}, {name: 'Aron Ómarsson', age: 67}, {name: 'Ásmundur', age: 67}, {name: 'Élgraður', age: 67}, {name: 'Friðgeir', age: 67}, {name: 'Fríður', age: 67}, {name: 'Jón Margeir Jónson', age: 67}, {name: 'Sólmundur', age: 67}, {name: 'Ægir', age: 67}
];

it('Should order names corectly', function (test) {
  test.plan(arr.length);

  arr.sort( international() ).forEach(function ( item, index ) {
    test.equals(index, expectedArr.indexOf(item));
  });
});

it('Should order objects corectly', function (test) {
  test.plan(objArr.length);

  objArr.sort( international('name') ).forEach(function ( item, index ) {
    test.same(item, expectedObjArr[ index ]);
  });
});