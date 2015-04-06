'use strict';

var React = require('react-native');

var {
  StyleSheet
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 60
  },

  headline: {
    fontSize: 40,
    flex: 1,
    textAlign: 'center'
  },

  vaultOptions: {
    flex: 3,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },

  button: {
    borderWidth: 1,
    borderColor: '#cdced0',
    backgroundColor: '#99CCFF',
    width: 150,
    height: 150,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: 'white'
  }
});