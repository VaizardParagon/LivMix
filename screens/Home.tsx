import * as React from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,  } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import categories from '../assets/data/categories';
const firstCategory = categories.items[0];
const secondCategory = categories.items[1];
const thirdCategory = categories.items[2];
const fourthCategory = categories.items[3];
const fifthCategory = categories.items[4];
export default function TabOneScreen({ navigation }: 
  RootTabScreenProps<'Home'>) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Popular on Netflix</Text>  
      <FlatList
        data={firstCategory.movies }
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri:item.poster}} />
        )}
          horizontal
      />  

      <Text style={styles.title}>Trending Now</Text>  
      <FlatList
        data={secondCategory.movies }
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri:item.poster}} />
        )}
          horizontal
      /> 

      <Text style={styles.title}>Latin American Movies & TV</Text>  
      <FlatList
        data={thirdCategory.movies }
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri:item.poster}} />
        )}
          horizontal
      /> 

<Text style={styles.title}>Comedies</Text>  
      <FlatList
        data={fourthCategory.movies }
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri:item.poster}} />
        )}
          horizontal
      /> 

<Text style={styles.title}>Top 10</Text>  
      <FlatList
        data={fifthCategory.movies }
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri:item.poster}} />
        )}
          horizontal
      /> 


    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    height:150,
    width:100,
    resizeMode:'cover',
    borderRadius:10,
    margin:5,
  },
  container: {
    flex: 1,
    padding:20,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
