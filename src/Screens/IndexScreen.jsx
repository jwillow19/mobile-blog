import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

import { withNavigation } from 'react-navigation';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text style={styles.title}>Posts</Text>
      <Button title='Add Post' onPress={addBlogPost} />
      <Button
        title='Create Post'
        onPress={() => navigation.navigate('Create')}
      />
      <FlatList
        data={state.blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Blog', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>

                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather
                    style={styles.deleteIcon}
                    name='delete'
                    size={24}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather
            name='plus'
            style={styles.plusIcon}
            size={24}
            color='black'
          />
        </TouchableOpacity>
      );
    },
  };
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  plusIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
  },
  deleteIcon: {
    fontSize: 26,
  },
});

export default withNavigation(IndexScreen);
