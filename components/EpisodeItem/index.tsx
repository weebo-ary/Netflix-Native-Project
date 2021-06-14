import React from 'react';
import { Image, Pressable } from 'react-native';
import styles from '../../components/EpisodeItem/styles';
import { Text, View } from '../Themed';
import { AntDesign } from '@expo/vector-icons';
import { Episode } from '../../types';

interface EpisodeItemProps {
    episode : {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video: string
    },

    onPress: (episode: Episode)  => {}
}

const EpisodeItem = (props: EpisodeItemProps) => {
    const { episode, onPress } = props;

    return (
      <Pressable style = {{ margin: 15, }} onPress = {() => onPress (episode)}>
        <View style={styles.row}>
          <Image style={styles.image} source={{ uri: episode.poster }} />
          <View style = {styles.titleContainer}>
            <Text style={styles.title}>{episode.title}</Text>
            <Text style={styles.duration}>{episode.duration}</Text>
          </View>
          <AntDesign name="download" size={24}  color = {'white'}/>
        </View>

        <Text style = {styles.plot}>{episode.plot}</Text>
      </Pressable>
    );
}

export default EpisodeItem;
