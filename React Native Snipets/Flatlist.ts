function App() {
    const onChangeText = (text) => {
        console.log(text.target.value);
    };

    return (
        <View style= { styles.app } >
        <View style={ { flex: 3 } }>
            <TextInput
            style={ { margin: 5, backgroundColor: "white" } }
    onChange = {(text) => onChangeText(text)
}
/>
    < /View>
    < View style = {{ flex: 1 }}>
        <Pressable>
        <Text>Sign In < /Text>
            < /Pressable>
            < /View>
            < /View>
    );
  }

const styles = StyleSheet.create({
    app: {
        flexDirection: "row",
        backgroundColor: "grey",
    },
    logo: {
        height: 80,
    },
    header: {
        padding: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginVertical: "1em",
        textAlign: "center",
    },
    text: {
        lineHeight: "1.5em",
        fontSize: "1.125rem",
        marginVertical: "1em",
        textAlign: "center",
    },
    link: {
        color: "#1B95E0",
    },
    code: {
        fontFamily: "monospace, monospace",
    },
});

const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: "#2196F3",
        borderRadius: 2,
    },
    text: {
        color: "#fff",
        fontWeight: "500",
        padding: 8,
        textAlign: "center",
        textTransform: "uppercase",
    },
});

export default App;