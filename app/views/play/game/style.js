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

  lives: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 70
  },

  lifeImage: {
    width: 30,
    height: 30
  },

  main: {
    flex: 3,
    flexDirection: 'row',

  },

  mainImageContainer: {
    flex: 3,
    flexDirection: 'column',
    marginLeft: 10
  },

  headline: {
    fontSize: 25,
    marginBottom: 10
  },

  mainImage: {
    width: 200,
    height: 200
  },

  crimeTechContainer: {
    flex: 1,
    flexDirection: 'column'
  },

  crimeTechImage: {
    width: 50,
    height: 50
  },

  guess: {
    flex: 2,
    justifyContent: 'center',
    height: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 150,
    marginTop: 100
  }
});