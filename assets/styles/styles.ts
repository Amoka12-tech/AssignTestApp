import { StyleSheet, Dimensions, Platform } from "react-native";
import { black, danger, grey, light, primary, white } from "../colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const platform = Platform.OS;

const styles = StyleSheet.create({
    onboard_view: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_view: {
        display: 'flex',
        width: screenWidth,
        height: screenHeight,
        flexDirection: 'column',
        paddingTop: platform === 'android' ? 60 : 80,
        alignItems: 'center',
        backgroundColor: light,
        padding: 10,
    },
    bg: {
        width: screenWidth,
        height: screenHeight,
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    onboard_logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 35,
    },
    welcome_text: {
        fontSize: 35,
        fontWeight: '600',
        color: primary,
        marginBottom: 15,
    },
    auth_button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: screenWidth/1.2,
        height: 45,
        backgroundColor: white,
        borderRadius: 20,
        marginBottom: 15,
        marginTop: 15,
    },
    auth_button_text: {
        fontSize: 24,
        fontWeight: '600',
        color: primary,
    },
    set_up_text: {
        fontSize: 35,
        fontWeight: '600',
        color: primary,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        marginTop: 40,
    },
    input_error: {
        fontSize: 12,
        fontWeight: '500',
        color: danger,
        marginTop: 10,
        alignSelf: 'flex-start',
        paddingLeft: 10,
    },
    login_button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: screenWidth/2,
        height: 45,
        backgroundColor: primary,
        borderRadius: 20,
        marginBottom: 15,
        marginTop: 50,
    },
    login_button_text: {
        fontSize: 24,
        fontWeight: '600',
        color: white,
    },
    top_nav: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    top_nav_title: {
        fontSize: 32,
        fontWeight: '700',
        color: primary,
        letterSpacing: 1,
    },
    profile_picute_holder: {
        width: 50,
        height: 50,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primary,
        marginRight: 10,
    },
    profile_name_initial: {
        fontSize: 24,
        fontWeight: '600',
        color: white,
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    user_details: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60,
    },
    user_text_holder: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    user_name: {
        fontSize: 18,
        fontWeight: '700',
        color: black,
        marginBottom: 5,
    },
    user_email: {
        fontSize: 12,
        fontWeight: '400',
        color: grey,
    },

});

export default styles;