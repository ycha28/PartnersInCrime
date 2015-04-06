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
    width: 100,
    height: 100,
    marginBottom: 10
  },

  text: {
    fontSize: 15
  }
});