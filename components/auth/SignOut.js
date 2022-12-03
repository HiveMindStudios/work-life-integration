import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { useAuth } from '../../context/AuthContext'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../../firebase'

export default function SignOut() {
    const { handleSignOut } = useAuth()
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (!user) navigation.replace("SignUp")
        })

        return unsubscribe
    }, [])


    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '80%'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    }
})