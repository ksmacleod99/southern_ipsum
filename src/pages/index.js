import React from "react"
import Input from "../components/input"
import { LoremIpsum } from "lorem-ipsum";
import Layout from "../components/layout"

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        number: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
}

handleInput(e) {
    let value = e.target.value;
    this.setState({number: value});
} 

handleFormSubmit(e){
    e.preventDefault();
    let number= Number(this.state.number);
    const lorem = new LoremIpsum();

    var node = document.getElementById('placeholder');
    var newNode = document.createElement('p');
    newNode.appendChild(document.createTextNode(lorem.generateParagraphs(number)));
    node.appendChild(newNode);
}
render(){
    return(
      <Layout>
      <h1>Southern Ipsum</h1>
      <p>another Lorem Ipsum generator.</p>
        <form className="form-container" onSubmit={this.handleFormSubmit}>
            <Input
            value={this.state.value}
            handleChange={this.handleInput}
            />
            <button type="submit" value="submit">Mash It</button>
        </form>
        <div id="placeholder"> </div>
      </Layout>

    )
  }
}
export default IndexPage;
