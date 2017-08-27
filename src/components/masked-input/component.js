module.exports = class {
  onInput( input, output ) {
    let phone = input.phone || "999999999";
    console.log( "phone: ", phone );
    let display = this.displayText( phone );
    console.log( "display: ", display );
    this.state = {
      editing: false,
      typed: phone,
      display: display,
    }
    console.log( "this.state: ", this.state );
  }

  displayText( phone ) {
    let display_text = "(" + phone.substr(0,3) + ") " + phone.substr( 3 );
    return display_text;
  }

  clean( input ) {
    return input.replace( /[^0-9]/g, '' );
  }

  handleFocus() {
    console.log( "handleFocus()" );
    this.state.editing = true;
    window.setTimeout( () => {
      let el = this.getEl('abc');
      el.value = this.state.typed;
      this.state.display = this.state.typed;
    }, 1 );
  }

  handleInput() {
    console.log( "handleInput()" );
    let el = this.getEl('abc');
    let val = el.value;
    this.state.typed = this.clean( val );
  }

  handleBlur() {
    console.log( "handleBlur()" );
    this.state.editing = false;
    let el = this.getEl('abc');
    let typed = this.clean( el.value );
    let display = this.displayText( typed );
    this.state.typed = typed;
    this.state.display = display;
  }

};
