import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Platform, Image } from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

export default class App extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          previousInputValue: 0,
          inputValue: 0,
          selectedSymbol: null
      }
  }
  
  render() {
    return (
      <View style={Style.rootContainer}>
          <View style={Style.displayContainer}>
              <Text style={Style.displayText}>{this.state.inputValue}</Text>
          </View>
          <View style={Style.inputContainer}>
              {this._renderInputButtons()}
          </View>
      </View>
      // <View style={styles.container}>
      //   <View style={styles.containerresultado}>
      //     <Text>TESTE TESTE</Text>
      //   </View>
      //   <View style={styles.containerbotoescoluna}>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick1} title="7"> 
      //     </Button>
      //   </View>  
      //   <View style={styles.containerbotoescoluna}>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick2} title="8"> 
      //     </Button>
      //   </View>  
      //   <View style={styles.containerbotoescoluna}>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="9"> 
      //     </Button>
      //   </View>
      //   <View style={styles.containerbotoescoluna}>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="+"> 
      //     </Button>
      //   </View>
      //   {/*<View style={styles.containerbotoes}>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="4"> 
      //     </Button>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="5"> 
      //     </Button>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="6"> 
      //     </Button>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="-"> 
      //     </Button>
      //   </View>
      //   <View style={styles.containerbotoes}>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="1"> 
      //     </Button>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="2"> 
      //     </Button>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="3"> 
      //     </Button>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="x"> 
      //     </Button>
      //   </View>
      //   <View style={styles.containerbotoes}>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="0"> 
      //     </Button>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title=","> 
      //     </Button>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="/"> 
      //     </Button>
      //     <Button style={styles.button} color="#01CD7D" onPress={this.onClick} title="="> 
      //     </Button>
      //   </View>*/}
      //   {/*<TextInput style={styles.input} placeholder="teste teste" onChangeText={(text) => {console.log(text)}} >
      //   </TextInput>*/}
      //   {/*<Image source={{uri: "https://facebook.github.io/react/logo-og.png"}} style={{width: 100, height: 100}}>
      //   </Image>*/}
      // </View>
    );
  }
  // onClick(){
  //   console.log("teste")
  // }
  _renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton
                        value={input}
                        highlight={this.state.selectedSymbol === input}
                        onPress={this._onInputButtonPressed.bind(this, input)}
                        key={r + "-" + i}/>
                );
            }

            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
    }

  _onInputButtonPressed(input) {
      switch (typeof input) {
          case 'number':
              return this._handleNumberInput(input)
          case 'string':
              return this._handleStringInput(input)
      }
  }

  _handleNumberInput(num) {
      let inputValue = (this.state.inputValue * 10) + num;

      this.setState({
          inputValue: inputValue
      })
  }

  _handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break;
            case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null
                });
                break;
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  containerbotoes: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerresultado: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: 'blue',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {   
    backgroundColor: '#808080',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {    
    backgroundColor: '#808080',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // input: {
  //   width: 100,
  //   backgroundColor: '#808080',
  //   borderColor: 'gray'
  // },
});