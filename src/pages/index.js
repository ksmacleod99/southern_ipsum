import React from "react"
import Input from "../components/input";
import { LoremIpsum } from "lorem-ipsum";

import Layout from "../components/layout"


class IndexPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {input: ''};
  this.handleInput = this.handleInput.bind(this);
  }

  handleInput(input) {
    this.setState(input);
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
          max: 8,
          min: 4
      },
      wordsPerSentence: {
          max: 16,
          min: 4
      }
    }); 
    
    const para = document.createElement('p');
    const text = document.createTextNode(lorem.generateParagraphs(this.state));
    para.appendChild(text);
  
    const targetDiv = document.getElementById('target');
    targetDiv.appendChild(para);
  }

  render() {
   return (
    <Layout>
      <h1>Southen Ipsum</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Input
        onInputSubmit={this.handleInput} 
        />
      <div className="generated-text">
        <div className='target-div' id='target'></div>
      </div>
    </Layout>
  )
  }
}


export default IndexPage;