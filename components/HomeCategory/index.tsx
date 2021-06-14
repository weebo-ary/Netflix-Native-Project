import * as React from 'react';
import { Image, FlatList, Pressable, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import EditScreenInfo from '../../components/EditScreenInfo';
import styles from './styles';
import { Text } from '../../components/Themed';

interface HomeCategoryProps {
  category: {
    movie: string;
    poster: string;
    id: string;
    title: string;
    subtitle: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    
    const navigation = useNavigation ();

    const onMoviePress  = (movie) => {
      navigation.navigate ( 'MovieDetailsScreen', { id: movie.id } )
    }
   
  return (
    <>
      <View>
        <Text style={styles.title}>{category.title}</Text>
        <Text style={{ color: "grey", fontSize: 16, fontWeight: "bold" }}>
          {category.subtitle}
        </Text>
        <FlatList
          data={category.movies}
          renderItem={({ item }) => (
            <Pressable onPress={() => onMoviePress(item)}>
              <Image style={styles.image} source={{ uri: item.poster }} />
            </Pressable>
          )}
          horizontal
        />
      </View>
    </>
  );
}


export default HomeCategory;