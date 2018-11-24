import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Platform, Image } from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+'],
    ['sen','cos','tan','fat'],
    ['raiz quadrada'],
    ['CE']
];

export default class CalculadoraCientifica extends React.Component {
    static navigationOptions = {
        title: 'Calculadora Científica',
        headerStyle: {
            backgroundColor: 'steelblue',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        }
    };

  constructor(props) {
      super(props);

      this.state = {
          previousInputValue: 0,
          inputValue: 0,
          selectedSymbol: null
      }
  }
  componentWillMount() {
    console.log("componentWillMount")
  }
  componentDidMount() {
    console.log("componentDidMount")  
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
          {/* <Text style={{fontWeight: 'bold', fontSize: 10}}> </Text>
          <Button style={styles.button} onPress={() => this.props.navigation.goBack()} color="#ff0000"
            title="Voltar"/> */}
      </View>
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

  _fatorial(input) {
      if (input < 0)
        return -1;
      else if (input == 0)
        return 1;
        else {
            return (input * this._fatorial(input - 1));
        }
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
            case 'sen':
                let symbolSen = this.state.selectedSymbol,
                // inputValueSen = Math.sin(this.state.inputValue * Math.PI / 180),
                inputValueSen = Math.sin(this.state.inputValue),
                previousInputValueSen = this.state.previousInputValue;

                console.log(symbolSen)
                console.log(inputValueSen)

                this.setState({
                    previousInputValue: 0,
                    inputValue: inputValueSen,
                    selectedSymbol: null
                });
                break;
            case 'cos':
                let symbolCos = this.state.selectedSymbol,
                inputValueCos = Math.cos(this.state.inputValue),
                previousInputValueCos = this.state.previousInputValue;

                console.log(symbolCos)
                console.log(inputValueCos)

                this.setState({
                    previousInputValue: 0,
                    inputValue: inputValueCos,
                    selectedSymbol: null
                });
                break;
            case 'tan':
                let symbolTan = this.state.selectedSymbol,
                inputValueTan = Math.tan(this.state.inputValue),
                previousInputValueTan = this.state.previousInputValue;

                console.log(symbolTan)
                console.log(inputValueTan)

                this.setState({
                    previousInputValue: 0,
                    inputValue: inputValueTan,
                    selectedSymbol: null
                });
                break;
            case 'fat':
                let symbolFat = this.state.selectedSymbol,
                inputValueFat = this._fatorial(this.state.inputValue),
                previousInputValueFat = this.state.previousInputValue;

                console.log(symbolFat)
                console.log(inputValueFat)

                this.setState({
                    previousInputValue: 0,
                    inputValue: inputValueFat,
                    selectedSymbol: null
                });
                break;
            case 'raiz quadrada':
                let symbolRaiz = this.state.selectedSymbol,
                inputValueRaiz = Math.sqrt(this.state.inputValue),
                previousInputValueRaiz = this.state.previousInputValue;

                console.log(symbolRaiz)
                console.log(inputValueRaiz)

                this.setState({
                    previousInputValue: 0,
                    inputValue: inputValueRaiz,
                    selectedSymbol: null
                });
                break;
            case 'CE':
                this.setState({
                    previousInputValue: 0,
                    inputValue: 0,
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