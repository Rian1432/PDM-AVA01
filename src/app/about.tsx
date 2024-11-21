import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderWithTitle from '../components/headers/HeaderWithTitle'
import Scrollable from '../components/containers/Scrollable'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function about() {
  return (
    <Scrollable>
        <HeaderWithTitle title='Sobre' />

        <Text style={styles.pageTitle}>Sobre</Text>

        <View style={styles.item}>
          <Text>Versão 1.0</Text>
          <Text style={styles.textBold}>Desenvolvido por:</Text><Text>Rian Beltrão</Text>
          <Text>clique para acessar o perfil no github:</Text>
          <Link href={'https://github.com/Rian1432/PDM-AVA01'}>
            <Ionicons name='logo-github' size={40} color={'#000000'} />
          </Link>
        </View>
    </Scrollable>
  )
}

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 28,
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: '#c9e8f2',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15
  },
});