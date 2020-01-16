import React, { Component } from 'react';
//import react in our code. 
import { View, StyleSheet, Text, Linking } from 'react-native';
//import all the components we are going to use.
 
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() => {
            //on clicking we are going to open the URL using Linking
            Linking.openURL('http://akashsir.com');
          }}>
          Click Here http://akashsir.com
        </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
  },
});
