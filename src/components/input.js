import React from "react"
//import { LoremIpsum } from "lorem-ipsum";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        };


    handleSubmit(e) {
      e.preventDefault();
      this.props.onInputSubmit(this.props.value);

    }
    render(){
      const input = this.props.value;
        return(
        <form onSubmit={this.handleSubmit}>
            <input type="number" value={input} />
            <input type="submit" value="Generate" className="generate-button"/>
            </form>

        );
    }
}