// prove JS works
console.log( "Hello world" );

// prove ES6 works
class Foo {
  bar( a ) {
    console.log( a + ' b' );
  }
}
let x = new Foo();
x.bar( 123 );

// stupid simple "router"
let page = require('./pages/default/template.marko');
if ( location.href.match( /first/ ) ) {
  page = require('./pages/first/template.marko');
  
}
else if ( location.href.match( /second/ ) ) {
  page = require('./pages/second/template.marko');
}

// prove marko-v4 can render at all
document.addEventListener("DOMContentLoaded", (event) => {
  console.log( "DOMContentLoaded" );
  page.renderSync({}).replace( document.getElementById('app') );
} );

