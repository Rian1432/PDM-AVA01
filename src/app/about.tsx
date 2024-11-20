import { View, Text } from 'react-native'
import React from 'react'
import HeaderWithTitle from '../components/headers/HeaderWithTitle'
import Scrollable from '../components/containers/Scrollable'

export default function about() {
  return (
    <Scrollable>
        <HeaderWithTitle title='Sobre' />

        <Text>About</Text>
    </Scrollable>
  )
}