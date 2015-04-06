'use strict';

var React = require('react-native');

var {
  StyleSheet
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 10
  },

  smallText: {
    fontSize: 15,
    marginBottom: 15
  },

  largeText: {
    fontSize: 30
  }
});