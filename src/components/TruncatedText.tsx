import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';

export const TruncatedText = ({
  initialLength = 0,
  text,
  isTruncate = false,
}: {
  isTruncate?: boolean;
  initialLength?: number;
  text: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedText = text.slice(0, initialLength);

  return (
    <Text style={styles.wrapperTextTruncate}>
      {isTruncate ? (
        <>
          {isExpanded ? text : truncatedText}
          {text.length > initialLength && (
            <Text
              onPress={() => setIsExpanded(!isExpanded)}
              style={styles.textTruncate}>
              {isExpanded ? ' Show Less' : ' Show More...'}
            </Text>
          )}
        </>
      ) : (
        text
      )}
    </Text>
  );
};

const styles = StyleSheet.create({
  wrapperTextTruncate: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textTruncate: {
    color: 'blue',
  },
});
