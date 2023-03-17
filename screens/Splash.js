import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const Splash = () => {

    const [IsGo, setIsGo] = useState(true);
    const Navigation = useNavigation();

    useEffect(() => {
        if (IsGo == true) {
            setTimeout(() => {
                Navigation.navigate('Home');
                setIsGo(false);
            }, 2000);
        }

    });

    return (
        <View style={styles.backGround}>
            <ImageBackground source={require("../assests/images/9.jpg")}
                style={styles.image}
                resizeMode="stretch">

                <Text style={styles.Welcome}>Welcome...</Text>

                <View style={{ marginBottom: '200%' }}></View>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    backGround: {

    },

    Welcome: {
        textAlign: 'center',
        paddingTop: 280,
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
    },

    imageContainer: {
        width: 130,
        height: 200,
    },

    imgLocation: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
});

export default Splash;