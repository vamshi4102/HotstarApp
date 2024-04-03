import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FooterBar = () => {
  const NavItems = [
    {
      id: '1',
      name: 'TV',
    },
    {
      id: '2',
      name: 'Movies',
    },
    {
      id: '3',
      name: 'Sports',
    },
    {
      id: '4',
      name: 'More',
    },
  ];

  return (
    <View style={styles.container}>
      {NavItems.map((nav, index) => (
        <Pressable
          key={nav.id}
          style={[styles.nav, {borderRightWidth:index === NavItems.length - 1 ? 0 : 1}]}>
          <Text style={styles.text}>{nav.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default FooterBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D3039',
    position: 'absolute',
    bottom: 100,
    width: '70%',
    paddingVertical: 10,
    alignSelf: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nav: {
    width: '20%',
    alignItems: 'center',
    // borderRightWidth: 1,
    borderRightColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight:'bold'
  },
});
