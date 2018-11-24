import React from 'react';
import { StyleSheet, Text, TextInput,
     View, Button, Platform, Image } from 'react-native';

export default class PropComponent extends React.Component {

    constructor(bbb) {
        super(bbb)

        this.state = {
            buttonClicked : null
        }
    }

    componentWillMount() {
        console.log(this.props)
    }

    componentDidMount() {
        console.log("didmount")
    }
    render(){
        console.log("render")
        return (
            <View>
                <Text>{this.state.buttonClicked}</Text>
                <Button onPress={
                    () => this.setState({
                        buttonClicked: 2
                    })
                } title="2"></Button>
                <Button onPress={
                    () => this.setState({
                        buttonClicked: 3
                    })
                } title="3"></Button>
            </View>
        )
    }
}