import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Appointment from './components/Appointment';
import Form from './components/Form';

const App = () => {
  // Definir el state de las citas
  const [appointments, setAppointments] = useState([
    { id: '1', patient: 'Hook', owner: 'Jacob', symptoms: 'No come' },
    { id: '2', patient: 'Redux', owner: 'John', symptoms: 'No duerme' },
    { id: '3', patient: 'Native', owner: 'Joseph', symptoms: 'No camina' }
  ]);

  // Eliminar cita del state
  const deleteAppointment = id => {
    setAppointments(currentAppointments => {
      return currentAppointments.filter(appointment => appointment.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AppOinments</Text>
      <Form />
      <Text style={styles.title}>
        {appointments.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}
      </Text>
      <FlatList
        data={appointments}
        renderItem={({ item }) => <Appointment item={item} deleteAppointment={deleteAppointment} />}
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
    marginTop: 40,
    marginBottom: 20
  }
});

export default App;
