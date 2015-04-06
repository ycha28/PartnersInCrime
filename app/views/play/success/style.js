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

  mediumText: {
    fontSize: 15,
    marginBottom: 10
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },

  answer: {
    fontSize: 25,
    textAlign: 'center'
  },

  button: {
    borderWidth: 2,
    borderColor: '#cdced0',
    width: 150,
    height: 35,
    backgroundColor: '#FF9900'
  }
});