import React, {useState} from 'react';
import {Image, Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {TruncatedText} from '../components/TruncatedText';

import {DUMMY_DATA, TypeDummyData} from '../constants';
import {UserProfile} from '../components/UserProfile';
import ActionPost from '../components/ActionPost';
import {LineHorizontal} from '../components/LineHorizontal';

function FeedScreen() {
  const navigation = useNavigation();

  const [listPost, setListPost] = useState<Array<TypeDummyData>>(DUMMY_DATA);

  const onNavigateTo = (url: string, params: TypeDummyData) => {
    // @ts-ignore
    navigation.navigate(url, {data: params});
  };

  const valueUpvote = (id: number) => {
    return listPost.map(item => {
      if (id === item.id) {
        return item.total_upvote;
      }
    });
  };

  const valueDownvote = (id: number) => {
    return listPost.map(item => {
      if (id === item.id) {
        return item.total_downvote;
      }
    });
  };

  function handleUpvote(id: number) {
    setListPost(prevData => {
      return prevData.map(item => {
        if (item.id === id) {
          return {...item, total_upvote: item.total_upvote + 1};
        }
        return item;
      });
    });
  }

  function handleDownvote(id: number) {
    setListPost(prevData => {
      return prevData.map(item => {
        const isDisabled =
          item.total_downvote < 0 ? item.total_downvote + 1 : 0;
        if (item.id === id) {
          return {...item, total_downvote: isDisabled};
        }
        return item;
      });
    });
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {listPost.map(item => (
          <Pressable
            key={item.name}
            onPress={() => onNavigateTo('post-detail', item)}>
            <View>
              <UserProfile
                avatar={item.photo_profile}
                name={item.name}
                date={item.date}
              />
              <LineHorizontal height={0.5} />
              <View>
                <TruncatedText
                  isTruncate
                  initialLength={150}
                  text={item.description}
                />
                <Image source={{uri: item.image}} height={200} />
              </View>
              <ActionPost
                downVote={valueDownvote(item.id as number)}
                upVote={valueUpvote(item.id as number)}
                onClickDownvote={() => handleDownvote(item.id as number)}
                onClickUpvote={() => handleUpvote(item.id as number)}
              />
            </View>
            <LineHorizontal height={4} />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FeedScreen;
