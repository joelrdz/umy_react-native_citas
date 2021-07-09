import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableHighlight, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Form = () => {
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  // Show / hide DatePicker
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }

    setDate(date.toLocaleDateString('es-ES', options));
    hideDatePicker();
  };

  // Show / hide TimePicker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = time => {
    const options = {
      hour: 'numeric',
      minute: '2-digit'
    }

    setTime(time.toLocaleString('en-US', options));
    hideTimePicker();
  };

  // Crear nueva cita
  const submitHandler = () => {
    // Validar
    if (
      patient.trim() === '' ||
      owner.trim() === '' ||
      phone.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      symptoms.trim() === ''
    ) {
      // Falla la validación
      showAlert();
      return;
    }
  }

  // Alert - Fallo de validación
  const showAlert = () => {
    Alert.alert(
      'Error', // alert title
      'Todos los campos son obligatorios', // alert body
      // Array de botones
      [{
        text: 'OK'
      }]
    )
  }

  return (
    <>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPatient(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Propietario:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setOwner(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Teléfono Contacto:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPhone(text)}
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={styles.label}>Fecha:</Text>
          <Button title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
            locale='es_ES'
            cancelTextIOS='Cancelar'
            confirmTextIOS='Confirmar'
          />
          <Text>{date}</Text>
        </View>
        <View>
        <Text style={styles.label}>Hora:</Text>
          <Button title="Seleccionar Hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
            locale='es_ES'
            cancelTextIOS='Cancelar'
            confirmTextIOS='Confirmar'
          />
          <Text>{time}</Text>
        </View>
        <View>
          <Text style={styles.label}>Síntomas:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={text => setSymptoms(text)}
          />
        </View>
        <View>
          <TouchableHighlight onPress={() => submitHandler()} style={styles.btnSubmit}>
            <Text style={styles.txtSubmit}>Crear Cita</Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10
  },
  txtSubmit: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Form;