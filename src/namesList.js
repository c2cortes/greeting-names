import React, { Component } from 'react';

export default class NamesList extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputTextValue: this.props.inputTextValue
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({ inputTextValue: nextProps.inputTextValue })
    }

    render() {
      return (
        <div className="App">
            <textarea value={ this.state.inputTextValue } rows="8" cols="50" className="content-names" onChange={ (e) => this.props.changeInputTextValue(e) }></textarea>
        </div>
      );
    }
  }