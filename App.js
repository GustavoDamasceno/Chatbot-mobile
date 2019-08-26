import React, { Component } from 'react';

//Importação do nosso Chatbot Personalizado
import Chatbot from './src/components/chatbot';

export default class App extends Component {
  render() {
    return (
      <Chatbot />
    );
  }
}