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
    this.handleClear = this.handleClear.bind(this);
  }

  handleInput(e) {
      this.setState({number: e.target.value});
  } 

  handleFormSubmit(e){
      e.preventDefault();
      const number= Number(this.state.number);
      this.setState({number: ''});

      const lorem = new LoremIpsum();

      const node = document.getElementById('placeholder');
      const newNode = document.createElement('p');
      newNode.appendChild(document.createTextNode(lorem.generateParagraphs(number)));
      node.appendChild(newNode);
  }

  handleClear(){
    const para = document.getElementById('placeholder');
    while ( para.firstChild){
      para.removeChild(para.firstChild);
    }
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
            <input type="submit" value="Submit" />
            
        </form>
        <button value="clear" onClick={this.handleClear}>Clear</button>
        <div id="placeholder"> </div>
      </Layout>

    )
  }
}
export default IndexPage;
