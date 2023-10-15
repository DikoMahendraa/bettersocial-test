import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {
  ICBlock,
  ICComment,
  ICDownvoteInactive,
  ICShare,
  ICUpvoteInactive,
} from '../assets';

type PropsActionPost = {
  upVote: number;
  comments: number;
  downVote: number | string;
  onClickUpvote: () => void;
  onClickDownvote: () => void;
};

export const ActionPost: React.FC<Partial<PropsActionPost>> = ({
  upVote = 0,
  downVote = 0, //TODO
  onClickUpvote,
  onClickDownvote,
  comments = 0,
}) => {
  return (
    <View style={styles.wrapperActionBtn}>
      <View style={styles.displayRow({justify: 'flex-start'})}>
        <Image source={ICShare} height={18} width={18} />
        <Image source={ICComment} height={18} width={18} />
        <Text>{comments}</Text>
      </View>
      <View style={styles.displayRow({justify: 'flex-end'})}>
        {upVote !== 0 ? (
          <Text>{downVote}</Text>
        ) : (
          <Image source={ICBlock} height={18} width={18} />
        )}

        <Pressable onPress={onClickDownvote}>
          <Image source={ICDownvoteInactive} height={18} width={18} />
        </Pressable>
        <Text>{upVote}</Text>
        <Pressable onPress={onClickUpvote}>
          <Image source={ICUpvoteInactive} height={18} width={18} />
        </Pressable>
      </View>
    </View>
  );
};

ActionPost.propTypes = {};

export default ActionPost;

const styles = StyleSheet.create({
  wrapperActionBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  displayRow: ({justify}: {justify: string}) => ({
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: justify,
    flex: 1,
  }),
});
