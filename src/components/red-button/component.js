module.exports = class {
  onInput( input, output ) {
    this.state = {
      hello: input.hello || "world"
    }
  }

  onMount() {
    console.log( "MOUNTED! red button" );
  }

  onClick( a ) {
    console.log( "red button clicker - " + this.state.hello + '... ' + a);
  }

  somethingFunction() {
    console.log( "ABC" );
  }
};
