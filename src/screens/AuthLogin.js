import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../common/theme';
import { colors } from '../common/colors';
import { p } from '../common/normalize';
import { width } from '../common/config';

export default class AuthLoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text1}>Welcome to Social-Spring</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.text2}>Username</Text>

            <TextInput style={styles.input} />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: p(-30) }}>
            <Text style={styles.text2}>Password</Text>

            <TextInput style={styles.input} />
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text3}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  card: {
    marginTop: p(20),
    padding: p(18),
    paddingTop: p(30),
    backgroundColor: colors.WHITE,
    marginHorizontal: p(19),
    borderRadius: p(10),
    borderWidth: 1,
    borderColor: '#ddd',
  },
  text1: {
    color: colors.SKY,
    fontSize: p(20),
    lineHeight: p(23),
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  text2: {
    color: colors.GREY9,
    fontSize: p(15),
    lineHeight: p(24),
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    marginVertical: p(23),
    width: p(80),
  },
  text3: {
    color: colors.WHITE,
    fontSize: p(15),
    lineHeight: p(23),
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  row: {
    position: 'absolute',
    top: 0,
    width,
    height: p(100),
  },
  btn: {
    backgroundColor: 'green',
    borderRadius: 30,
    height: 55,
    justifyContent: 'center',
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 12,
    flex: 1,
    marginLeft: 20,
    fontSize: p(15),
    paddingLeft: 12,
  },
});
