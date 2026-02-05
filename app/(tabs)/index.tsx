import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../components/Text';
import DatabaseService from '../services/DatabaseService';

export default function HomeScreen() {
  const [connected, setConnected] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const ok = await DatabaseService.isConnected();
      if (mounted) setConnected(ok);
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <View style={styles.mainContainer}>
      {connected === null && <Text style={styles.whiteText}>Trying to connect to the database...</Text>}
      {connected === true && <Text style={styles.whiteText}>Connected to the database</Text>}
      {connected === false && <Text style={styles.whiteText}>Not connected to the database</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  whiteText: {
    color: 'white',
  }
});
