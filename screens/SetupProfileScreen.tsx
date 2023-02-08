import { View, Text, Image, ScrollView, TouchableOpacity, } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/paramList';
import styles from '../assets/styles/styles';
import { Icon, Input, InputProps } from '@rneui/base';
import { logo } from '../assets/images';
import { TextInput } from 'react-native-paper';
import { NativeStackHeaderProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { light, primary, white } from '../assets/colors';

interface SetupProfileScreenProps {
    route: RouteProp<RootStackParamList, 'SetupProfileScreen'>;
}

interface ProfileProps {
    name: string;
    email: string;
};

interface ProfileErrorProps {
    nameError: string;
    emailError: string;
};

const initialData: ProfileProps = {
    name: '',
    email: '',
};

const initialDataError: ProfileErrorProps = {
    nameError: '',
    emailError: '',
};


const SetupProfileScreen: React.FC<SetupProfileScreenProps> = props => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'SetupProfileScreen'>>();
    const [profile, setProfile] = React.useState<ProfileProps>(initialData);
    const [profileError, setProfileError] = React.useState<ProfileErrorProps>(initialDataError);

    const onInputChange = (text: string, id: string) => {
        const payload = id === 'name' ?  {...initialData, name: text} : {...profile, email: text};
        setProfile(payload);
    };

    const onSubmit = () => {
        if (profile?.email === '' && profile.name === '') {
            setProfileError({...profileError, nameError: 'Name is required!', emailError: 'Email is required!'})
        } else if (profile?.name === '') {
            setProfileError({...profileError, nameError: 'Name is required!'});
        } else if (profile?.email === '') {
            setProfileError({...profileError, emailError: 'Email is required!'})
        } else {
            navigation.navigate('ProfileScreen', { name: profile?.name, email: profile?.email });
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.main_view} showsVerticalScrollIndicator={false}>
          <Image source={logo} style={styles.logo} />

          <Text style={styles.set_up_text}>Set Up Profile</Text>

          <TextInput
            label={'Name'}
            style={styles.input}
            selectionColor={primary}
            underlineColor={primary}
            outlineStyle={{ borderColor: primary, }}
            mode={'outlined'}
            onFocus={() => setProfileError({...profileError, nameError: ''})}
            error={profileError?.nameError !== ''}
            value={profile?.name}
            onChangeText={(e) => onInputChange(e, 'name')}
            />
            {profileError?.nameError !== '' && 
                <Text style={styles.input_error}>{profileError?.nameError}</Text>}


        <TextInput
            label={'Email'}
            style={styles.input}
            selectionColor={primary}
            underlineColor={primary}
            outlineStyle={{ borderColor: primary, }}
            mode={'outlined'}
            onFocus={() => setProfileError({...profileError, emailError: ''})}
            error={profileError?.emailError !== ''}
            value={profile?.email}
            onChangeText={(e) => onInputChange(e, 'email')}
            />
            {profileError?.emailError !== '' && 
                <Text style={styles.input_error}>{profileError?.emailError}</Text>}

        <TouchableOpacity onPress={onSubmit} style={styles.login_button}>
            <Icon name='lock' type='materialcommunityicons' size={20} color={white} style={{ marginRight: 10, }} />
            <Text style={styles.login_button_text}>Login</Text>
        </TouchableOpacity>
        </ScrollView>
    );
};

export default SetupProfileScreen