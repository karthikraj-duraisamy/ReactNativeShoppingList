import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Name</Text>
      <Image
        style={styles.img}
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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

export default UserProfile;
