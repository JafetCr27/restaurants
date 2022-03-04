import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native'
import { closeSession } from '../../utils/actions';

export default function UserLogged() {
    const navigation = useNavigation()
    return (
        <View>
            <Button
                title="Cerrar sesión"
                containerStyle = {styles.btnContainer}
                buttonStyle={styles.btn}
                onPress = {()=> {
                    closeSession()
                    navigation.navigate("restaurants")
                }}

            />
        </View>
    )
}
const styles = StyleSheet.create({
    btnContainer:{
        marginTop:20,
        width:"95%",
        alignSelf:"center"
    },
    btn:{
        backgroundColor:"red"
    }
})
