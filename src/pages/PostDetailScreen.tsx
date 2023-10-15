import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {UserProfile} from '../components/UserProfile';
import {LineHorizontal} from '../components/LineHorizontal';
import {TruncatedText} from '../components/TruncatedText';
import {ListComment} from '../components/ListComment';
import ActionPost from '../components/ActionPost';

function PostDetailScreen({route}) {
  const {data} = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View>
          <UserProfile
            name={data.name}
            date={data.date}
            avatar={data.photo_profile}
            onBack={() => navigation.goBack()}
          />
          <LineHorizontal height={0.5} />
          <View>
            <TruncatedText text={data.description} />
            <Image source={{uri: data.image}} height={200} />
          </View>
          <ActionPost />
          <LineHorizontal height={0.5} />
        </View>

        <ListComment
          avatar="https://picsum.photos/200"
          comments="hi mom"
          username="coco"
        />
      </ScrollView>
      <View style={styles.formComment}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#888"
          placeholder="Enter Comment"
        />
        <TouchableOpacity onPress={() => console.log('comment')}>
          <Text>Comment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  formComment: {
    position: 'absolute',
    bottom: 20,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    zIndex: 10,
    gap: 10,
  },
  input: {
    width: '80%',
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
