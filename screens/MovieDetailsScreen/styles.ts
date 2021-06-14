import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 16/9,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 35,
        fontWeight:'bold',

    },

    match: {
        color: '#59d467',
        fontWeight: 'bold',
        marginRight: 15,
        marginLeft: 5,
    },

    year:{
        color: '#757575',
        fontWeight: 'bold',
        marginRight: 15
    },

    ageContainer: {
        backgroundColor: '#e0d229',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        paddingHorizontal: 5,
        marginRight: 15,
        marginTop: -5
    },

    age: {
        color: 'black',
        fontWeight: 'bold'
    },

    playButton: {
        backgroundColor: '#d9b145',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },

    playButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },

    downloadButton: {
        marginTop: 8,
        backgroundColor: '#a5b0aa',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },

    downloadButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles