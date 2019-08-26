# Chatbot mobile

1. Introdução
2. Funcionalidade

## 1. Introdução

Chatbot é um programa de computador que tenta simular um ser humano na conversação com as pessoas. O objetivo é responder as perguntas de tal forma que as pessoas tenham a impressão de estar conversando com outra pessoa e não com um programa de computador.

![Alt Text](https://media.giphy.com/media/400He9KsCbdgYt2N7N/giphy.gif)

O projeto foi desenvolvido em react native utilizando a biblioteca [react-native-chatbot](https://github.com/LucasBassetti/react-native-chatbot).


## 2. Funcionalidade

Instruções que o chatbot irá seguir:

```
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

```

Para saber mais sobre as propriedades dessa biblioteca, basta acessar a [documentação](https://github.com/LucasBassetti/react-native-chatbot).


![](https://pbs.twimg.com/media/EC29g_YWsAALaDY?format=png&name=small)