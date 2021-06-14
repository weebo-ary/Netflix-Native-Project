import React, { useRef, useState, useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import styles from './styles'
import { Video } from 'expo-av';
import { Episode } from '../../types';
import { Playback } from 'expo-av/build/AV';

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;
    const video = useRef<Playback>(null);

    useEffect(() => {
        if (!video) {
            return;
        }
      (async () => {
          await video.current?.unloadAsync()
          await video.current?.loadAsync(
              {uri : episode.video},
              {},
              false

          );
      })();
    }, [episode])

    const [status, setStatus] = useState({});

    
//     const handleVideoRef = (component) => {
//         const playbackObject = component;
//         console.log (playbackObject)

//         const source = {
//             uri: episode.video
//         };

//         const initialStatus = {

//         };

//         playbackObject.loadAsync (source, initialStatus, false)
// }


    return (
      <Video
        style={styles.video}
        source={{
          uri: episode.video
        }}
        posterSource = {{
            uri: episode.poster,
        }}
        posterStyle = {{ 
            resizeMode: 'cover'
         }}
        usePoster = { true }
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    );
}

export default VideoPlayer;
