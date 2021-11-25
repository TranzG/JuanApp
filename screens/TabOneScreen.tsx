import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { StatusBar } from 'expo-status-bar';
import Header from './shared/header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header text={'Juan Ad Concept'}></Header>
      <View style={styles.content}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>T-Shirt</Text>
        </View>

        <View style={styles.productsRow}>
          <View style={styles.productsShowcase}></View>
          <View style={styles.productsShowcase}></View>
        </View>

        <View style={styles.productsRow}>
          <View style={styles.productsShowcase}></View>
          <View style={styles.productsShowcase}></View>
        </View>

        <View style={styles.productsRow}>
          <View style={styles.productsShowcase}></View>
          <View style={styles.productsShowcase}></View>
        </View>
      </View>
      <View style={styles.navigation}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:-30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  content:{
    marginTop:-10,
    height: '100%',
    width: '80%',
    borderRadius: 25,
    backgroundColor: '#D2D5D8',
    alignItems: 'center',
  },
  descriptionContainer:{
    height: 60,
    width: '100%',
    padding: 20,
    backgroundColor: '#EAECED',
  },
  descriptionText:{
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    letterSpacing: 1,
  },
  productsRow:{
    height: 170,
    width: '100%',
    backgroundColor: '#FFF',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productsShowcase:{
    height: '100%',
    width: '45%',
    backgroundColor: 'blue',
    borderRadius: 25,
  },
  navigation:{

  }
});