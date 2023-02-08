import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/paramList';
import styles from '../assets/styles/styles';
import { Icon } from '@rneui/base';
import { primary } from '../assets/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface ProfileScreenProps {
    route: RouteProp<RootStackParamList, 'ProfileScreen'>;
}

const ProfileScreen: React.FC<ProfileScreenProps> = props => {
    const { name, email } = props.route.params;
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'ProfileScreen'>>();
    return (
        <ScrollView contentContainerStyle={[styles.main_view, { justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 20, }]} showsVerticalScrollIndicator={false}>
            <View style={styles.top_nav}>
                <Icon 
                    onPress={() => navigation.goBack()}
                    type='antdesign' 
                    name='leftcircle' 
                    color={primary} 
                    containerStyle={{ marginRight: 10, }}
                    size={48} />
                <Text style={styles.top_nav_title}>Your Profile</Text>
            </View>

            <View style={styles.user_details}>
                <View style={styles.profile_picute_holder}>
                    <Text style={styles.profile_name_initial}>{name[0]}</Text>
                </View>

                <View style={styles.user_text_holder}>
                    <Text style={styles.user_name}>{name}</Text>
                    <Text style={styles.user_email}>{email}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default ProfileScreen