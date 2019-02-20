import React from "react";
class Quote extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <div id="text">{this.props.quote}</div>
        <div id="author">{this.props.author}</div>
      </div>
    );
  }
}
export default Quote;
