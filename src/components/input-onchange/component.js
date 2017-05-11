module.exports = class {
  onInput( input, output ) {
    this.state = {
      hello: input.hello || "world"
    }
  }

  handleChange() {
    console.log( "change: handled!" );
  }
};
