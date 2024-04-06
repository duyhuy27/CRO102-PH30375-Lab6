import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  resetCouter,
  binhPhuong,
} from './features/couter/couterSlice';
import {RootState} from './app/store';

export default function Main() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Tăng biến đếm"
          onPress={() => dispatch(increment())}
          color="#007AFF"
        />
        <Button
          title="Giảm biến đếm"
          onPress={() => dispatch(decrement())}
          color="#FF3B30"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Mũ bình phương"
          onPress={() => dispatch(binhPhuong())}
          color="#4CD964"
        />
        <Button
          title="Reset biến đếm"
          onPress={() => dispatch(resetCouter())}
          color="#5856D6"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  counterText: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 10,
  },
});
