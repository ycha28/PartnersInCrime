'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image
} = React;

var styles = require('./style');
var LoadingView = require('../loading');

var Searching = React.createClass({
  renderLoading() {
    this.props.navigator.push({
      component: LoadingView
    });
  },

  componentDidMount() {    
    setTimeout(this.renderLoading, 3000);
  },

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('image!kitten')} style={styles.image}/>
        <Text style={styles.text}>Looking for a partner in crime!</Text>
      </View>
    );
  }
})

module.exports = Searching;