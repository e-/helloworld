(function(){
  function helloworld(callback){
    if(!callback) callback = console.log;
    callback('Hello, World!');
  }
  
  if (typeof define === 'function' && define.amd) {
    define(function(){
      return helloworld;
    });
  } else if (typeof exports === 'object') {
    module.exports = helloworld;
  } else {
    window.helloworld = helloworld;
  }
})();
