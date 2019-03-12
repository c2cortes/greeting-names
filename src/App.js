import React, { Component } from 'react';
import './App.css';
import NamesList from './namesList';
import DropDownLanguages from './dropDownLanguages';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputTextValue: ''
    }
  }

  changeLanguage(e) {
    const currentInputTextValue = this.state.inputTextValue.split(/\n/);

    for(let i in currentInputTextValue){
      currentInputTextValue[i] = currentInputTextValue[i].split(' ').length == 2 ? (e.target.value + ' ' + currentInputTextValue[i].split(' ')[1]) : (e.target.value + ' ' + currentInputTextValue[i])
    }

    this.setState({ inputTextValue: currentInputTextValue.join('\n') })
  }

  render() {
    return (
      <div className="App">
        <h1>Greeting Names</h1>
        <NamesList changeInputTextValue={(e) => this.setState({ inputTextValue: e.target.value }) } inputTextValue={this.state.inputTextValue} />
        <DropDownLanguages changeLanguage={ (e) => this.changeLanguage(e) } />
      </div>
    );
  }
}

export default App;
