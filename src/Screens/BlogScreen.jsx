import React, { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import { View, Text, StyleSheet } from 'react-native';

const BlogScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const blogPost = state.blogPosts.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );
  return (
    <View>
      <Text style={styles.title}>{`${blogPost.id}`}</Text>
      <Text style={styles.title}>{`${blogPost.title}`}</Text>
    </View>
  );
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
  title: {
    fontSize: 18,
  },
  deleteIcon: {
    fontSize: 26,
  },
});

export default BlogScreen;
