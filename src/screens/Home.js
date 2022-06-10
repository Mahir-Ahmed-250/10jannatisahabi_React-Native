import { colors } from '../Theme/colors';
import { spacing } from '../Theme/spacing';
import { SAHABI_LIST } from '../Data/SAHABI_LIST';
import Text from '../Components/text/text';
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import { FlatList, Pressable, SafeAreaView, StyleSheet, View, Platform, TextInput } from 'react-native';
import App_Header from '../Components/App_Header';
import { useState } from 'react';


const SahabiName = ({ item }) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => {
            navigation.navigate('Details', { sahabi: item })
        }} style={styles.item}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="checkcircleo" size={24} color="black" />
                <Text preset='h4' style={styles.itemName}>{item.name}</Text>
            </View>
            <AntDesign style={{ marginLeft: 1 }} name='right' size={12} color="#000000" />
        </Pressable>
    )
}
export default function Home({ navigation }) {
    const [list, setList] = useState(SAHABI_LIST);
    const renderItem = ({ item }) => {

        return (
            < SahabiName item={item} />
        )
    }
    const searchFilter = (text) => {
        const filteredList = SAHABI_LIST.filter((item) => {
            const itemName = item.name.toLocaleLowerCase();
            const userTypedText = text.toLocaleLowerCase();

            return itemName.indexOf(userTypedText) > -1;
        })
        setList(filteredList)
    }
    return (
        <SafeAreaView style={styles.container}>
            <App_Header />
            <TextInput style={styles.searchInput} placeholder='Type the sahabi`s name' placeholderTextColor={colors.black}
                autoCorrect={false} onChangeText={(text) => {
                    searchFilter(text)
                }} />
            <FlatList data={list}
                contentContainerStyle={styles.list}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'android' ? 30 : 0
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: spacing[8],
        paddingBottom: spacing[8]
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[1]
    },

    list: {
        padding: spacing[8]
    },
    separator: {
        borderBottomColor: colors.white,
        borderWidth: 0.9
    },
    searchInput: {
        padding: spacing[2],
        color: colors.black,
        borderBottomColor: colors.black,
        borderBottomWidth: 3,
        margin: spacing[3]
    }
})