import { View, Text, SectionList, StyleSheet, Image } from 'react-native'
import React from 'react'
import HeaderWithTitle from '../components/headers/HeaderWithTitle'
import Scrollable from '../components/containers/Scrollable'
import data from '../services/data-passengers'
import { transformData } from '../helpers/helpers'
import { THEME_COLORS, THEME_FONTS } from '../constants/globalStyles'

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
        stickySectionHeadersEnabled={true}
        stickyHeaderHiddenOnScroll={true}
        keyExtractor={(item) => item.id.toString()}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>
            {title}
          </Text>
        )}
        renderItem={({item}) => (
          <View style={styles.item}>
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
    fontSize: THEME_FONTS.PAGE_TITLE_SIZE,
    textAlign: 'center',
  },
  item: {
    backgroundColor: THEME_COLORS.BASE_COLOR,
    marginVertical: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: THEME_COLORS.PRIMARY_COLOR,
    fontSize: 22,
    marginTop: 20,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  travelInfo: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 5
  },
  subTitle: {
    fontWeight: 'bold'
  },
});