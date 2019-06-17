import React from "react"
import Input from "../components/input"
import { LoremIpsum } from "lorem-ipsum"
import Layout from "../components/layout"
import "./styles.scss"

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
      
      <h3 className="center">A <i>lorem ipsum</i> generator with a twang.</h3>
      <p>Hey y'all, this is a small personal project I've been working on to teach myself some new coding stuff. Hope you enjoy!</p>
        <form className="form-container" onSubmit={this.handleFormSubmit}>
           <label>Paragraphs:</label> <Input
            value={this.state.value}
            handleChange={this.handleInput}
            />
            <input className="goButton" type="submit" value="Mash Me" />
            <button value="clear" onClick={this.handleClear}>Clear</button>
        </form>

        <div id="placeholder" className="placeholder">
        <p>Lorem Ipsum, y'all!</p>
         </div>
      </Layout>

    )
  }
}
export default IndexPage;
