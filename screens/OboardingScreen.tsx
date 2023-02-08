import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/paramList';
import { background_image, logo } from '../assets/images';
import styles from '../assets/styles/styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { primary, white } from '../assets/colors';

interface OnboardingScreenProps {
    route: RouteProp<RootStackParamList, 'OboardingScreen'>;
}

const OboardingScreen: React.FC<OnboardingScreenProps> = props => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'OboardingScreen'>>()
    return (
        <ImageBackground source={background_image} style={styles.bg} imageStyle={{ resizeMode: 'cover' }}>
            <View style={styles.onboard_view}>
                <Image source={logo} style={styles.onboard_logo} />

                <Text style={styles.welcome_text}>Welcome</Text>

                <TouchableOpacity onPress={() => navigation.navigate('SetupProfileScreen')} style={[styles.auth_button]}>
                    <Text style={[styles.auth_button_text]}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SetupProfileScreen')} style={[styles.auth_button, { backgroundColor: primary, }]}>
                    <Text style={[styles.auth_button_text, { color: white, }]}>Log in</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default OboardingScreen