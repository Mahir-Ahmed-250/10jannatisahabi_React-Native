import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../Theme/spacing'
import { colors } from '../Theme/colors'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function App_Header({ backBtn, title = "ASHARAY MUBASHSHARA" }) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {backBtn && (
                <Pressable style={{ marginRight: spacing[4] }} onPress={() => {
                    navigation.goBack()
                }}>
                    <AntDesign name='left' size={24} color="black" />
                </Pressable>
            )}
            <Text preset='h1'>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing[6],
        borderBottomWidth: 0.6,
        borderBottomColor: colors.black,
        flexDirection: "row",
        alignItems: "center"
    }
})