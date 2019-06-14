import React from "react"
//import { LoremIpsum } from "lorem-ipsum";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        };


     handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
      this.onInputSubmit(this.props.value);
      event.preventDefault();
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <input type="number" value={this.props.value}  onChange={this.handleChange}/>
            <input type="submit" value="Generate" className="generate-button"/>
            </form>

        );
    }
}