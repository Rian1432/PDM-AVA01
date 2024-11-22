import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import FullScreen from '../components/containers/FullScreen'
import HeaderHidden from '../components/headers/HeaderHidden'
import { router } from 'expo-router'
import ImageButton from '../components/shared/ImageButton'
import { useAuth } from '../store/AuthContext'
import { THEME_COLORS } from '../constants/globalStyles'
import CustomInput from '../components/shared/CustomInput'

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
                <Text style={styles.welcomeText}>Bem-vindo!</Text>
                <Text style={styles.title}>login</Text>

                <View style={styles.inputGroup}>
                    <CustomInput 
                        placeholder="Nome"
                        icon='person'
                        value={username} 
                        onChangeText={onChangeUserName}
                    />

                    <CustomInput 
                        placeholder="Senha"
                        icon='key'
                        value={password} 
                        onChangeText={onChangePassword}
                        secureTextEntry
                    />

                    <Text style={styles.errorMessage}>
                        { errorMessage }
                    </Text>
                </View>

                <ImageButton 
                    title='Entrar'
                    customStyle={{backgroundColor: THEME_COLORS.PRIMARY_COLOR}} 
                    handlePress={handleSubmit} 
                />
            </View>
        </FullScreen>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'column',
        gap: 15,
    },
    welcomeText: {
        color: THEME_COLORS.GRAY_COLOR,
        fontSize: 20,
    },
    title: {
        fontSize: 30,
        textAlign: 'left',
        marginBottom: 20,
    },
    inputGroup: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    errorMessage: {
        color: THEME_COLORS.ERROR_COLOR,
        fontWeight: '500',
    }
});
