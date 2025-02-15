import { useState } from 'react';
import { FlatList, Image, Platform, Pressable, StyleSheet } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require('../assets/emoji/emoji1.png'),
    require('../assets/emoji/emoji2.png'),
    require('../assets/emoji/emoji3.png'),
    require('../assets/emoji/emoji4.png'),
    require('../assets/emoji/emoji5.png'),
    require('../assets/emoji/emoji6.png'),
  ]);

  return (
    <FlatList
      horizontal
      showHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
