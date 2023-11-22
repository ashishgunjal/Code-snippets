import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,

} from 'react-native';
const App = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json()).then(response => {
            console.log('aaaaa ', response)
            setFilteredData(response)
        }).catch(e => {

        })
    }, [])

    const handleSearch = (query) => {
        console.log("::::query ", query)
        setSearch(query);

        const array = filteredData.filter((item, index) => {
            console.log(":::::item ", item)
        })
        console.log("::::array ", array)

        // setFilteredData(array)
    };

    return (
        <>
        <View>
        <TextInput
          style= { styles.textInputStyle }
    onChangeText = { handleSearch }
    value = { search }
    underlineColorAndroid = "transparent"
    placeholder = "Search Here"
        />
        <View>
        {
            filteredData.map((x) => (
                <Text style= { styles.itemStyle } > { x.title } < /Text>
            ))
        }
        < /View>
        < /View>
        < />
  );
};
const styles = StyleSheet.create({
    itemStyle: {
        borderWidth: 1,
        borderColor: 'thistle',
        padding: 10,
        textTransform: 'capitalize',
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
});
export default App;

