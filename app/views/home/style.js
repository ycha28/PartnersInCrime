'use strict';

var React = require('react-native');

var {
  StyleSheet
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#297ACC',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loginButton: {
    borderWidth: 2,
    borderColor: '#cdced0',
    backgroundColor: '#99CCFF',
    width: 150,
    height: 35,
    marginTop: 30,
    justifyContent: 'center'
  },

  signupButton: {
    borderWidth: 2,
    borderColor: '#cdced0',
    backgroundColor: '#FF9900',
    width: 150,
    height: 35,
    marginTop: 30,
    justifyContent: 'center'
  },

  buttonText: {
    textAlign: 'center',
    color: 'white'
  },

  inputField: {
    width: 150,
    height: 30,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom: 20
  }
});