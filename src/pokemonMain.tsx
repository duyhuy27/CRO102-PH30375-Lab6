import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useGetPokemonByNameQuery} from './services/pokemon';

export default function PokemonMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const {data, error, isLoading, refetch} =
    useGetPokemonByNameQuery(searchTerm);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      refetch();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Enter Pokemon name"
      />
      {/* <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity> */}

      {isLoading && (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      )}

      {!isLoading && error && (
        <Text style={styles.errorText}>Error! Pokemon not found.</Text>
      )}

      {!isLoading && !error && data && data.species && (
        <View style={styles.resultContainer}>
          <Text style={styles.name}>{data.species.name}</Text>
          <Image
            style={styles.image}
            source={{
              uri: data.sprites.back_shiny || 'data.sprites.front_default',
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  searchButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
  },
  resultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
