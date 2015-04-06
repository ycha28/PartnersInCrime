'use strict';

var React = require('react-native');

var {
  StyleSheet
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },

  headline: {
    fontSize: 40,
    marginTop: 70,
    textAlign: 'center'
  },

  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 10
  },

  paragraph: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 25,
    fontSize: 20
  },

  unorderedList: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 20
  },

  button: {
    borderWidth: 2,
    borderColor: '#cdced0',
    backgroundColor: '#99CCFF',
    width: 250,
    height: 50,
    justifyContent: 'center',
    marginTop: 30,
    alignSelf: 'center'
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  }
});