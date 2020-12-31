import React, {useState} from 'react';

import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import UserProfile from './components/UserProfile';

const App = () => {
  const [items, setItems] = useState([
    {id: 0, text: 'Milk'},
    {id: 1, text: 'Eggs'},
    {id: 2, text: 'Bread'},
    {id: 3, text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems((prevItems) => {
        console.log(prevItems);
        return [{id: prevItems.length, text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <UserProfile />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 15,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

export default App;
