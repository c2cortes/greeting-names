import React, { Component } from 'react';
import { languages } from './data';

export default class DropDownLanguages extends Component {
  
    renderLanguageOption(item) {
      return <option key={item.greeting} value={item.greeting}>{item.language}</option>
    }

    render() {
      return (
        <select onChange={(e) => e.target.value != 0 ? this.props.changeLanguage(e) : null }>
          <option value='0'>Select a language</option>
          { languages.map((item) => this.renderLanguageOption(item)) }
        </select>
      );
    }
  }