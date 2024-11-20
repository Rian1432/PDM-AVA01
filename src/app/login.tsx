import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import FullScreen from '../components/containers/FullScreen'
import HeaderHidden from '../components/headers/HeaderHidden'

export default function login() {
    const [username, onChangeUserName] = useState('')
    const [password, onChangePassword] = useState('')

    return (
        <FullScreen center>
            <HeaderHidden />

            <View style={styles.formContainer}>


                <Text style={styles.title}>login</Text>

                <TextInput 
                    style={styles.input} 
                    value={username} 
                    onChangeText={onChangeUserName}
                    placeholder="Username"
                />

                 <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder="Password"
                    secureTextEntry 
                />

                {/* mudar para button personalizado */}
                <Button title='Entrar' />
            </View>
        </FullScreen>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'column',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
        padding: 10
    }
  });
