QUnit.test( "check helloworld", function( assert ) {
  var out;
  helloworld(function(a) { out = a; });
  assert.equal(out, 'Hello, World!');
});
