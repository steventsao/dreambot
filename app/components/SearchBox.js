import React from 'react';


const SearchBox = React.createClass({
  onEnter(e){
    if (e.which === 13) {
      this.props.handleKeyPress(this._input.value)
    }
  },
  render(){
    return (
      <input ref={ (ref) => this._input = ref }
      // onChange={this.props.detectChange} 
      onKeyPress={this.onEnter} 
      className="input is-text-centered" 
      type="text" 
      placeholder="Ask Dream Bot Anything" />
      );
  }
})

export default SearchBox;