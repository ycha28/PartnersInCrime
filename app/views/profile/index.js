'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Image,
  ListView
} = React;

var styles = require('./style');
var mockData = [
                  {rank: 1, userName: 'ppzgenome', title: 'Street Thug', missions: 5},
                  {rank: 2, userName: 'richard', title: 'Kingpin', missions: 100},
                  {rank: 3, userName: 'ycha28', title: 'Crony', missions: 8}
               ]

var Instructions = React.createClass({
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(mockData)
    }
  },

  renderHeader() {
    return (
      <View style={styles.tableHeader}>
        <Text style={styles.tableCell}>Rank</Text>
        <Text style={styles.tableCell}>Username</Text>
        <Text style={styles.tableCell}>Title</Text>
        <Text style={styles.tableCell}>Missions</Text>        
      </View>
    );
  },

  renderRow(rowData) {
    return (
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>{rowData.rank}</Text>
        <Text style={styles.tableCell}>{rowData.userName}</Text>
        <Text style={styles.tableCell}>{rowData.title}</Text>
        <Text style={styles.tableCell}>{rowData.missions}</Text>
      </View>
    );
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileInfo}>
          <Image source={require('image!mugshot')} style={styles.profileImage}/>
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Ppzgenome</Text>
            <Text style={styles.profileClass}>Street Thug</Text>
            <Text style={styles.profilePoints}>BP: 150</Text>
            <Text style={styles.profileRank}>Rank: 150/11505</Text>
          </View>
        </View>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderHeader={this.renderHeader}
          renderRow={this.renderRow}/>
        <View style={styles.socialMedia}>
          <Image source={require('image!facebook-icon')} style={styles.mediaImage}/>
        </View>
      </View>
    );
  }
})

module.exports = Instructions;