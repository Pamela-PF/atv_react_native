import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'

const numAleatorios = () => {
  let num = [];
  for (let i = 0; i < 6; i++){
    let numSorteado = Math.floor(Math.random() * 60 + 1);
    while(num.includes(numSorteado)){
      numSorteado = Math.floor(Math.random() * 60 + 1);
    }
    num.push(numSorteado);
  }
  return num;
}

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      texto: 'Gerador de números Mega-sena',
      saida: numAleatorios()
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.texto}</Text>
        <Text>1º: {this.state.saida[0]}</Text>
        <Text>2º: {this.state.saida[1]}</Text>
        <Text>3º: {this.state.saida[2]}</Text>
        <Text>4º: {this.state.saida[3]}</Text>
        <Text>5º: {this.state.saida[4]}</Text>
        <Text>6º: {this.state.saida[5]}</Text>
        <Button
          title="Clique para sortear"
          onPress={() => {this.setState({saida: (this.saida = numAleatorios())})}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98FB98',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


