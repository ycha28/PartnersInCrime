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

  profileInfo: {
    flex: 1,
    marginTop: 70,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  profileDetails: {
    marginTop: 20,
    marginLeft: 20
  },

  profileName: {
    fontSize: 20,
    marginBottom: 10
  },

  profileImage: {
    width: 100,
    height: 100,
    marginTop: 20
  },

  list: {
    height: 300,
    flex: 2
  },

  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  tableRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  tableCell: {
    borderWidth: 1,
    borderColor: '#cdced0',
    width: 90,
    height: 40,
    textAlign: 'center'
  },

  socialMedia: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  mediaImage: {
    width: 50,
    height: 50
  }
});