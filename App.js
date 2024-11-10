import React, { useState } from 'react'
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


const App = () => {
  const [message, setMessage] = useState('Olá, mundo!')

  const handlePress = () => {
    setMessage('Você clicou no botão!')
  }

  return (
    
       
     
     <SafeAreaView style={styles.container}>
          <Text style={styles.text}>{message}</Text>
          <Icon name="face" size={60} color="#000000" />
          <Button title="Clique aqui" onPress={handlePress} />
      </SafeAreaView>
     
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    marginBottom: 20,
  },
})

export default App