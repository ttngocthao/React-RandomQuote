import React from "react";
import Quote from "./Quote";
class QuoteBox extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      quotes: [
        {
          quote:
            "Life isn’t about getting and having, it’s about giving and being.",
          author: "Kevin Kruse"
        },
        {
          quote:
            "Whatever the mind of man can conceive and believe, it can achieve.",
          author: "Napoleon Hill"
        },
        {
          quote: "Strive not to be a success, but rather to be of value.",
          author: "Albert Einstein"
        }
      ]
    };
    this.clickHandle = this.clickHandle.bind(this);
  }
  componentDidMount() {
    const randomIndex = Math.floor(Math.random() * 3);
    // console.log(randomIndex);
    this.setState({
      quote: this.state.quotes[randomIndex]
    });
  }
  clickHandle() {
    const randomIndex = Math.floor(Math.random() * 3);
    // console.log(randomIndex);
    this.setState({
      quote: this.state.quotes[randomIndex]
    });
  }

  render() {
    return (
      <div id="quote-box">
        <Quote
          quote={this.state.quote.quote}
          author={this.state.quote.author}
        />
        <button id="new-quote" onClick={this.clickHandle}>
          Next Quote
        </button>
      </div>
    );
  }
}
export default QuoteBox;
