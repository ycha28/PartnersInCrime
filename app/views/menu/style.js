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

  button: {
    borderWidth: 2,
    borderColor: '#cdced0',
    backgroundColor: '#99CCFF',
    width: 150,
    height: 35,
    justifyContent: 'center',
    marginTop: 30
  },

  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
});