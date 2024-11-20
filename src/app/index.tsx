import { View, Text } from 'react-native'
import React from 'react'
import HeaderWithTitle from '../components/headers/HeaderWithTitle'
import Scrollable from '../components/containers/Scrollable'

export default function index() {
  return (
    <Scrollable>
        <HeaderWithTitle title='Home' />

        <Text>index</Text>
    </Scrollable>
  )
}   