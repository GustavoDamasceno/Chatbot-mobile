import React, { Component } from 'react';

import Bot from 'react-native-chatbot';

//Instruções que o chatbot irá seguir:
const steps = [
    {
      id: '1',
      message: 'Olá, eu sou o seu assistente, qual é o seu nome?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: 'ola',
    },
    {
      id: 'ola',
      message: 'Olá {previousValue}',
      trigger: '3',
    },
    {
      id: '3',
      message: 'O que você quer saber de mim?',
      trigger: '4',
    },
    {
      id: '4',
      options: [
        { value: 1, label: 'Quantas disciplinas você já reprovou?', trigger: '5' },
        { value: 2, label: 'Isso é realmente verdade?', trigger: '6' },
        { value: 3, label: 'Qual foi sua disciplina mais fácil?', trigger: '7' },
        { value: 4, label: 'Quero nada não, tchau', trigger: '8' },
      ],
    },
    {
      id: '5',
      message: 'Reprovei nenhuma disciplina, engenharia de computação é muito fácil!',
      trigger: '3',
    },
    {
      id: '6',
      message: 'É verdade, não minto!',
      trigger: '3',
    },
    {
      id: '7',
      message: 'Arquitetura II, sem dúvidas',
      trigger: '3',
    },
    {
      id: '8',
      message: 'Até mais',
      end: true,
    },
  ];

export default class ChatBot extends Component {
  render() {
    return (
      <Bot steps={steps} />
    );
  }
}