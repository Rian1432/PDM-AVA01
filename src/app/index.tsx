import { View, Text, SectionList, StyleSheet, Image } from 'react-native'
import React from 'react'
import HeaderWithTitle from '../components/headers/HeaderWithTitle'
import Scrollable from '../components/containers/Scrollable'
import data from '../services/data-passengers'
import { transformData } from '../helpers/helpers'

export default function index() {
  const menuLinks = [
    { name: 'Sobre', path: '/about' }
  ]

  return (
    <Scrollable>
      <HeaderWithTitle title='Home' links={menuLinks} />

      <Text style={styles.pageTitle}>Lista de passageiros</Text>

      <SectionList
        sections={transformData(data)}
        keyExtractor={(item) => item.id.toString()}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>
            {title}
          </Text>
        )}
        renderItem={({item}) => (
          <View style={styles.item}>
            {/* <Image style={styles.avatar} source={{uri: item.passenger_avatar}} /> */}

            <View>
              <View style={styles.travelInfo}>
                <Text style={styles.subTitle}>Passageiro:</Text>
                <Text>{item.passenger_name}</Text>
              </View>
              
              <View style={styles.travelInfo}>
                <Text style={styles.subTitle}>Origem:</Text>
                <Text>{item.origin}</Text>
              </View>
              
              <View style={styles.travelInfo}>
                <Text style={styles.subTitle}>Destino:</Text>
                <Text>{item.destination}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </Scrollable>
  )
}   

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 28,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#c9e8f2',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  header: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 5,
  },
  travelInfo: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 5
  },
  subTitle: {
    fontWeight: 'bold'
  },
  avatar: {
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 50
  }
});