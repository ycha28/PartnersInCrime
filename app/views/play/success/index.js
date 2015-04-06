'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image
} = React;

var styles = require('./style');

var Loading = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mediumText}>Nice moves slick!</Text>
        <Text style={styles.mediumText}>You decoded the keyword.</Text>
        <Image source={require('image!kitten')} style={styles.image} />
        <View style={styles.button}>
          <Text style={styles.answer}>DONKEY</Text>
        </View>
      </View>
    );
  }
})

module.exports = Loading;