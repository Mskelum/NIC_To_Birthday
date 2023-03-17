import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import lankaNIC from 'lanka-nic';

const Home = () => {
  const [nic, setNic] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

  const onLogin = () => {
    if (nic.length === 10) {
      const { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(nic);
      setNic(nic);
      setDob(dateOfBirth);
      setGender(gender);
    } else {
      setNic('Invalid nic number')
      setDob('');
      setGender('');
    }
  };

  const onReset = () => {
    setNic('');
    setDob('');
    setGender('');
  };

  return (
    <View>
      <ImageBackground source={require("../assests/images/3.jpg")}
        style={styles.image}
        resizeMode="stretch">
        <View>
          <Text style={{ margin: 10, marginHorizontal: 110, fontSize: 23, color: 'white', fontWeight: "bold" }}>  Sri lanka NIC</Text>
        </View>

        <View>
          <Image style={styles.Imagecontainer} source={require("../assests/images/16.png")} resizeMode="stretch" />
        </View>

        <View style={styles.list}>
          <TextInput
            label="Enter Your NIC: "
            value={nic}
            onChangeText={(text) => setNic(text)}
          />
        </View>

        <View style={styles.LoginContainer}>
          <Button icon="login" onPress={onLogin} mode="contained">
            Submit
          </Button>
        </View>

        <View style={styles.LoginContainer}>
          <Button icon="login" onPress={onReset} mode="contained">
            Reset
          </Button>
        </View>

        <View style={styles.showContainer}>
          <Text style={styles.birthContainer}>Your NIC number:</Text>
          <Text style={styles.genContainer}>{nic.toString()}</Text>
        </View>

        <View style={styles.showContainer}>
          <Text style={styles.birthContainer}>Date of Birth:</Text>
          <Text style={styles.genContainer}>{dob.toString()}</Text>
        </View>

        <View style={styles.showContainer}>
          <Text style={styles.birthContainer}>Gender:</Text>
          <Text style={styles.genContainer}>{gender.toString()}</Text>
        </View>

        <View style={{ marginBottom: 100 }}></View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  Imagecontainer: {
    height: 180,
    width: 370,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginContainer: {
    margin: 2,
    height: 60,
    marginLeft: 60,
    marginRight: 60
  },

  page: {
    margin: 10,
    justifyContent: 'center',
    padding: 5,
  },

  list: {
    margin: 10,
  },

  showContainer: {
    height: 70,
    flexDirection: 'column',
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    elevation: 3,
  },
  birthContainer: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold'
  },
  genContainer: {
    padding: 5,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default Home;
