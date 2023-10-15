import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type PropsListComment = {
  comments: string;
  username: string;
  avatar: string;
};

export const ListComment: React.FC<PropsListComment> = ({
  comments,
  username,
  avatar,
}) => {
  return (
    <View style={styles.userComment}>
      <Image
        source={{
          uri: avatar,
        }}
        width={36}
        height={36}
        style={styles.userAvatar}
      />
      <View>
        <Text style={styles.userName}>{username}</Text>
        <Text style={styles.userContent}>{comments}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userComment: {
    flexDirection: 'row',
    minHeight: 72,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  userAvatar: {
    borderRadius: 24,
    marginRight: 16,
  },
  userName: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 14.52,
    color: '#828282',
  },
  userContent: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.36,
  },
});
