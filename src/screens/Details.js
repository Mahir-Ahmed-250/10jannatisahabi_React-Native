import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Linking, Image } from 'react-native'
import React from 'react'
import { colors } from '../Theme/colors';
import { spacing } from '../Theme/spacing';
import Text from '../Components/text/text'
import App_Header from '../Components/App_Header';
import { AntDesign } from '@expo/vector-icons';

export default function Details({ route }) {
    const sahabi = route.params.sahabi
    const { name, icon, description, videoLink } = sahabi


    const onPressLink = () => {
        Linking.openURL(videoLink)
    }

    return (
        <SafeAreaView style={styles.container}>
            <App_Header backBtn={true} />
            <ScrollView >
                <Image style={styles.imageView} resizeMode="cover" source={{ uri: `${icon}` }} />
                <Text preset='h1' style={styles.name}>
                    {name}
                </Text>
                <TouchableOpacity onPress={onPressLink} style={styles.video}>
                    <Text >
                        Watch on Youtube
                    </Text>
                    <AntDesign style={{ marginLeft: 5 }} name="youtube" size={24} color="red" />
                </TouchableOpacity>
                <Text preset='h4' style={styles.description}>{description}</Text>

            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageView: {
        marginTop: spacing[8],
        alignItems: "center",
        justifyContent: "center",
        width: 400,
        height: 380,
    },
    name: {
        textTransform: "uppercase",
        textAlign: "center"
    },
    description: {
        textAlign: "justify",
        marginTop: spacing[5],
        lineHeight: 26,
        paddingHorizontal: spacing[10],
        fontSize: 16
    },
    video: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: spacing[5]
    }
})