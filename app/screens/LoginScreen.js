import React from 'react';
import { Platform, StyleSheet, Image, KeyboardAvoidingView, View } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup'

import { AppFormField, AppForm, SubmitButton } from '../components/forms'
import routes from '../navigation/routes'


function LoginScreen({ navigation })  {

    const validationSchema = Yup.object().shape( {
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password")
    })

    return (
        <KeyboardAvoidingView 
            style={{flex : 1}} 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <Screen>
                <Image style={styles.logo} source={ require("../assets/nike.png")}></Image>

                <View style={{flex : 1}}  >
                    <AppForm
                    initialValues={{ email:'', password:''}}
                    onSubmit={values => navigation.navigate(routes.WELCOME)}
                    validationSchema={validationSchema}
                    >
            
                            <AppFormField 
                                autoCapitalize="none"
                                icon="email"
                                name="email"
                                placeholder="email"
                                autoCorrect={false}
                                keyboardType="email-address"
                                textContentType="emailAddress"

                            />
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock"
                                name="password"
                                placeholder="password"
                                textContentType="password"
                                secureTextEntry
                            />
                            <View style={styles.submitButton}>
                                <SubmitButton title="login" />
                            </View>
                    </AppForm>
                </View>
                
            </Screen>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
        marginBottom: 20,
        flex : 1,
    },
    submitButton : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    }
})

export default LoginScreen;