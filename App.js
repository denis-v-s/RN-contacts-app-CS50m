import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { Constants } from 'expo';

import contacts from './contacts';
import { compareNames } from './contacts';
import Row from './Row';

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts,
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }));
  };

  renderItem = o => <Row {...o.item} />;

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort contacts" onPress={this.sort} />
        // show contacts only if showContacts is true
        {this.state.showContacts && (
          <FlatList renderItem={this.renderItem} data={this.state.contacts} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
