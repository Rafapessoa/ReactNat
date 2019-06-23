import React, { PureComponent } from 'react'
import { ActivityIndicator, StyleSheet, Spinner } from 'react-native'
import { View, Text } from 'react-native'

export default class Load extends PureComponent {

    render() {
        return (
            <View style={style.Load}>
                <ActivityIndicator />
                <Text style={style.Load} >Carregando Aguarde...</Text>
            </View>
        );
    }
}

let style = StyleSheet.create({
    Load: {
        textAlign: 'center'
    }
});
