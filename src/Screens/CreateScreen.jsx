import React, { useState, useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IndexScreen from './IndexScreen';

const CreateScreen = ({ navigation }) => {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  let formData = {
    body,
    title,
  };

  const { createBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.row}>
      <Text style={styles.title}>Blog</Text>
      <TextInput
        placeholder='Blog Title'
        style={styles.textInput}
        value={title}
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={(newValue) => setTitle(newValue)}
      />
      <TextInput
        placeholder='Blog'
        style={styles.textInput}
        value={body}
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={(newValue) => setBody(newValue)}
      />

      <TouchableOpacity onPress={() => createBlogPost(formData)}>
        <Text>Create Blog</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#F0EEEE',
    marginTop: 15,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 18,
    flex: 1,
    color: 'black',
  },
  title: {
    fontSize: 18,
  },
});

export default CreateScreen;
