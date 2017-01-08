module.exports = {
  '': ''

  ,onInput( input, output ) {
    this.state = {
      hello: input.hello || "world"
    }
  }

  ,onMount() {
    console.log( "MOUNTED! blue button" );
  }

  ,onClick( a ) {
    console.log( "blue button clicker - " + this.state.hello + '... ' + a);
  }

  ,otherFunction() {
    console.log( "DEF" );
  }
};
