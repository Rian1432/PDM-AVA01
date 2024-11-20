import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import HeaderWithTitle from '../components/headers/HeaderWithTitle'
import Scrollable from '../components/containers/Scrollable'

export default function index() {
  const menuLinks = [
    { name: 'Sobre', path: '/about' }
  ]

  return (
    <Scrollable>
        <HeaderWithTitle title='Home' links={menuLinks} />

        <Text>index</Text>
    </Scrollable>
  )
}   