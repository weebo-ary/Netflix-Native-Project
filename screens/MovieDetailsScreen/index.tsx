import React, { useState } from "react";
import { Text, View } from "../../components/Themed";
import styles from "../MovieDetailsScreen/styles";
import movie from "../../assets/data/movie";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome, Feather, Entypo, AntDesign } from "@expo/vector-icons";
import { Image, Pressable, FlatList} from "react-native";
import EpisodeItem from "../../components/EpisodeItem";
import { Picker } from "@react-native-picker/picker";
import VideoPlayer from "../../components/VideoPlayer";

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];


const MovieDetailsScreen = () => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const [currentEpisode, setCurrentEpisode] = useState(firstSeason.episodes.items[0]);
  const seasonNames = movie.seasons.items.map (season => season.name);
  return (
    <View>
      <VideoPlayer episode={currentEpisode} />

      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
          <EpisodeItem episode={item} onPress={setCurrentEpisode} />
        )}
        style={{ marginBottom: 202 }}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={styles.match}> Live 💧 </Text>
              <Text style={styles.year}>Published In {movie.year} </Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>Relaxing</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Episodes </Text>
              <MaterialIcons
                name="hd"
                size={24}
                color="white"
                style={{ marginTop: -3 }}
              />
            </View>

            {/* Play Button */}

            <View style={{ marginTop: 7 }}>
              <Pressable
                onPress={() => {
                  console.warn("Play");
                }}
                style={styles.playButton}
              >
                <Text style={styles.playButtonText}>
                  <FontAwesome name="play" size={14} color="black" /> Play{" "}
                  <Text style = {{ color: '#e04122',}}>Live</Text>
                </Text>
              </Pressable>

              {/* Download Button */}

              <Pressable
                onPress={() => {
                  console.warn("Downloading");
                }}
                style={styles.downloadButton}
              >
                <Text style={styles.downloadButtonText}>
                  <Feather name="download" size={20} color="white" /> Download <Text style = {{color : '#3b3b3b',}}> (After Live) </Text>
                </Text>
              </Pressable>
              <Text style={{ marginTop: 10 }}>{movie.plot}</Text>
              <Text style={{ marginTop: 10, color: "grey" }}>
                Instructor: {movie.cast}
                <Text style={{ color: "#f1f1f1" }}> . . . more</Text>
              </Text>
              <Text style={{ marginTop: 5, color: "grey" }}>
                Creator: {movie.creator}
              </Text>
              {/* Row with icon button */}

              <View style={{ flexDirection: "row" }}>
                <View>
                  <View style={{ flexDirection: "row", marginTop: 25 }}>
                    <Pressable
                      onPress={() => {
                        console.warn("Following");
                      }}
                    >
                      <View
                        style={{ alignItems: "center", marginHorizontal: 22 }}
                      >
                        <Entypo name="plus" size={20} color="pink" />
                        <Text style={{ color: "#c0c0c0" }}> Follow </Text>
                      </View>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        console.warn("Liked");
                      }}
                    >
                      <View
                        style={{ alignItems: "center", marginHorizontal: 22 }}
                      >
                        <AntDesign name="like2" size={20} color="skyblue" />
                        <Text style={{ color: "#c0c0c0" }}> Like </Text>
                      </View>
                    </Pressable>
                    <View
                      style={{ alignItems: "center", marginHorizontal: 22 }}
                    >
                      <Feather name="send" size={20} color="darkgrey" />
                      <Text style={{ color: "#c0c0c0" }}> Share </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Picker
                selectedValue={currentSeason.name}
                onValueChange={(itemValue, itemIndex) => {
                  setCurrentSeason(movie.seasons.items[itemIndex]);
                }}
                style={{ color: "black", marginTop: 15 }}
              >
                {seasonNames.map((seasonName) => (
                  <Picker.Item
                    label={seasonName}
                    value={seasonName}
                    key={seasonName}
                  />
                ))}
              </Picker>
              <View style={{ marginLeft: 80, marginTop: -30 }}>
                <AntDesign name="caretdown" size={10} color="black" />
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
