import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import FullScreen from '../components/containers/FullScreen'
import HeaderHidden from '../components/headers/HeaderHidden'
import { router } from 'expo-router'
import ImageButton from '../components/shared/ImageButton'
import { useAuth } from '../store/AuthContext'

export default function login() {
    const { login } = useAuth();

    const [username, onChangeUserName] = useState('')
    const [password, onChangePassword] = useState('')
    const [errorMessage, setError] = useState('')

    // Imagem de teste para o ImageButton
    // const buttonImage = 'https://superprix.vteximg.com.br/arquivos/ids/175172-600-600/Batata-Especial--1-unidade-aprox.-200g-.png?v=636294173813730000'

    useEffect(() => {
        setError('')
    }, [username])

    useEffect(() => {
        setError('')
    }, [password])

    const handleSubmit = () => {
        if (username === 'fulano' && password === '123') {
            login()
            router.replace('/')
        } else if (username === '' && password === '') {
            setError('Preencha os campos.')
        } else {
            setError('Usuário ou senha inválidos.')
        }
    }

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

                <Text style={styles.errorMessage}>
                    { errorMessage }
                </Text>

                <ImageButton title='Entrar' customStyle={{backgroundColor: '#339488'}} handlePress={handleSubmit} />
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
        width: 230,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
        padding: 10
    },
    errorMessage: {
        color: 'red',
        fontWeight: '500'
    }
});
