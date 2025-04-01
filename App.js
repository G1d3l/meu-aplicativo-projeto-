import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [distance, setDistance] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [consumption, setConsumption] = useState('');
  const [result, setResult] = useState(null);

  const calculateFuelCost = () => {
    const dist = parseFloat(distance);
    const price = parseFloat(fuelPrice);
    const cons = parseFloat(consumption);

    if (!isNaN(dist) && !isNaN(price) && !isNaN(cons) && dist > 0 && price > 0 && cons > 0) {
      const fuelNeeded = dist / cons;
      const totalCost = fuelNeeded * price;
      setResult(totalCost);
    } else {
      setResult(null);
      alert('Por favor, insira valores válidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Combustível</Text>

      <Text>Preço do Combustível (R$ por litro)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={fuelPrice}
        onChangeText={setFuelPrice}
      />

      <Text>Distância a ser percorrida (em km)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
      />

      <Text>Consumo do Veículo (km por litro)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={consumption}
        onChangeText={setConsumption}
      />

      <Button title="Calcular" onPress={calculateFuelCost} />

      {result !== null && (
        <Text style={styles.result}>
          O custo estimado do combustível é: R${result.toFixed(2)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
});

export default App;
