import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Appointment from './components/Appointment';

const App = () => {
  // Definir el state de las citas
  const [appointments, setAppointments] = useState([
    { id: '1', patient: 'Hook', owner: 'Jacob', symptoms: 'No come' },
    { id: '2', patient: 'Redux', owner: 'John', symptoms: 'No duerme' },
    { id: '3', patient: 'Native', owner: 'Joseph', symptoms: 'No camina' }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AppOinments</Text>
      <FlatList
        data={appointments}
        renderItem={({ item }) => <Appointment item={item} />}
        keyExtractor={appointment => appointment.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aa076b',
    flex: 1
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40
  }
});

export default App;
