import { 
  StyleSheet,
  Text, 
  View, 
  ScrollView
 } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from '../components/FlatCards'
import ElevatedCards from '../components/ElevatedCards'
import FancyCard from '../components/FancyCard'
import ActionCard from '../components/ActionCard'
import ContactList from '../components/ContactList'

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}
export default index
