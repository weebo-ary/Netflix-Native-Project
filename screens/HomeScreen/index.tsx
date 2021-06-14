import * as React from 'react';
import { Image, FlatList } from 'react-native';

// import EditScreenInfo from '../../components/EditScreenInfo';
import styles from './styles';
import { Text, View } from '../../components/Themed';
import categories from '../../assets/data/categories'
import HomeCategory from '../../components/HomeCategory';

const HomeScreen = () => {

  
  return (
    // List of categories
    <View style={styles.container}>
      <FlatList 
      data = {categories.items}
      renderItem = {({item}) => <HomeCategory category = {item}/>}
      />
    </View>
  );
}


export default HomeScreen;