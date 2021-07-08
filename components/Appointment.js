import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const Appointment = ({ item, deleteAppointment }) => {
  const deleteHandler = id => {
    deleteAppointment(id);
  }

  return (
    <View style={styles.appointment}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.text}>{item.patient}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario:</Text>
        <Text style={styles.text}>{item.owner}</Text>
      </View>
      <View>
        <Text style={styles.label}>Síntomas:</Text>
        <Text style={styles.text}>{item.symptoms}</Text>
      </View>
      <View>
        <TouchableHighlight onPress={() => deleteHandler(item.id)} style={styles.btnDelete}>
          <Text style={styles.txtDelete}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appointment: {
    backgroundColor: '#fff',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  text: {
    fontSize: 18
  },
  btnDelete: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10
  },
  txtDelete: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Appointment;