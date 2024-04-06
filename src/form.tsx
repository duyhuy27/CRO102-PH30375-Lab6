import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useSignupMutation} from './services/user.ts';

export default function FormInput() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State để theo dõi trạng thái loading
  const [isError, setIsError] = useState(false); // State để theo dõi trạng thái lỗi

  const [signup] = useSignupMutation();

  const handleSubmit = async () => {
    if (!name || !age || !email || !password || !gender) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true); // Bật hiệu ứng loading

    const userData = {
      name,
      age: parseInt(age),
      email,
      password,
      gender,
    };

    try {
      const response = await signup(userData).unwrap();
      console.log('User signed up successfully:', response);

      // Xử lý thành công
      setIsLoading(false); // Tắt hiệu ứng loading
      setIsError(false); // Đặt lại trạng thái lỗi (nếu có)

      Alert.alert('Success', 'User signed up successfully'); // Hiển thị alert thành công
    } catch (error) {
      console.error('Signup failed:', error);

      // Xử lý lỗi
      setIsLoading(false); // Tắt hiệu ứng loading
      setIsError(true); // Đặt trạng thái lỗi
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Builder Basic Demo</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="User's age"
          value={age}
          onChangeText={setAge}
        />
      </View>
      <TextInput
        style={styles.input2}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input2}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input2}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
        disabled={isLoading}>
        <Text style={styles.buttonText}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Text>
      </TouchableOpacity>
      {isError && (
        <Text style={styles.errorText}>Signup failed. Please try again.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  input2: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorText: {
    marginTop: 10,
    color: 'red',
    fontSize: 16,
  },
});
