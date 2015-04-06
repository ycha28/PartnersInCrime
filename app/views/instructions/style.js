'use strict';

var React = require('react-native');

var {
  StyleSheet
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  header: {
    fontSize: 40,
    marginTop: 70,
    marginBottom: 50,
    alignSelf: 'center'
  },

  paragraph: {
    marginLeft: 10,
    marginBottom: 25,
    fontSize: 20
  }
});