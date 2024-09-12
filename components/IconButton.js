import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable className='justify-center items-center' onPress={onPress}>
      <MaterialIcons name={icon} size={24} color='#fff' />

      <Text className='text-white mt-3'>{label}</Text>
    </Pressable>
  );
}
