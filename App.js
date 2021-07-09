import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import Appointment from './components/Appointment';
import Form from './components/Form';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  // Definir el state de las citas
  const [appointments, setAppointments] = useState([]);

  // Eliminar cita del state
  const deleteAppointment = id => {
    setAppointments(currentAppointments => {
      return currentAppointments.filter(appointment => appointment.id !== id);
    });
  }

  // Show / hide form
  const showFormHandler = () => {
    setShowForm(!showForm);
  }

  // Hide keyboard
  const hideKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <View style={styles.container}>
        <Text style={styles.title}>AppOinments</Text>
        <View>
          <TouchableHighlight onPress={() => showFormHandler()} style={styles.btnShowForm}>
            <Text style={styles.txtShowForm}>
              {showForm ? 'Cancelar' : 'Crear Nueva Cita'}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.content}>
          {showForm ? (
            <>
              <Text style={styles.title}>Crear Nueva Cita</Text>
              <Form
                appointments={appointments}
                setAppointments={setAppointments}
                setShowForm={setShowForm}
              />
            </>
          ) : (
            <>
              <Text style={styles.title}>
                {appointments.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}
              </Text>
              <FlatList
                style={styles.list}
                data={appointments}
                renderItem={({ item }) => <Appointment item={item} deleteAppointment={deleteAppointment} />}
                keyExtractor={appointment => appointment.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20
  },
  content: {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  list: {
    flex: 1
  },
  btnShowForm: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10
  },
  txtShowForm: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
