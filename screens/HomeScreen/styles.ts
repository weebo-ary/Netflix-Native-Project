import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 18,
        marginTop: 25,
    },

    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
        margin: 9,
        marginLeft: -8
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        fontFamily: 'Montserrat',
        marginTop: 10,
        },

});

export default styles;

