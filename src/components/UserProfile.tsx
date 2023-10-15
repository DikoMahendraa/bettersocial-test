import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ICBack} from '../assets';

type PropsUserProfile = {
  avatar: string;
  name: string;
  date: string;
  onBack?: () => void;
};

export const UserProfile: React.FC<PropsUserProfile> = ({
  avatar,
  date,
  name,
  onBack,
}) => {
  return (
    <View style={styles.wrapperProfile}>
      {!!onBack && (
        <Pressable onPress={onBack}>
          <Image
            source={ICBack}
            height={18}
            width={18}
            style={{marginLeft: 22}}
          />
        </Pressable>
      )}
      <Image
        source={{uri: avatar}}
        width={48}
        height={48}
        style={styles.profilePicture}
      />
      <View>
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profileDate}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperProfile: {
    gap: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16.94,
  },
  profilePicture: {
    borderRadius: 24,
  },
  profileDate: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
  },
});
