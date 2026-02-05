import { StyleSheet } from 'react-native';
import { Text } from '../components/Text';

export default function NewPage() {
  return (
    <Text style={styles.customText}>
      Profile page
    </Text>
  );
}

const styles = StyleSheet.create({
  customText: {
    color: 'white',
  },
})