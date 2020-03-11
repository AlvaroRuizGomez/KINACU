import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, 
         StyleSheet, 
       } from 'react-native';
import logo from './assets/images/logo.jpg';
import Play from './Play';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>RunSik</Text>
      <Image source={require('./assets/images/logo.jpg')} style={styles.logo}/>
      <Button style={styles.button}  title="Iniciar" onPress={() => navigation.navigate('Main')} />
    </View>  
  );
}

function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.instructions}>Que hacemos..?</Text>
      <Button title="Escuchar Musica" onPress={() => navigation.navigate('Play')} />
      <Button title="Comenzar Carrera" onPress={() => navigation.navigate('Run')} />
      <Button title="Home" onPress={() => navigation.popToTop()} />
    </View>
  );
}

function PlayScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.instructions}>Reproductor de Musica</Text>

    </View>
  );
}

function RunScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.instructions}>Iniciar carrera</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Play" component={Play} />
        <Stack.Screen name="Run" component={RunScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
logo:{
    borderRadius: 20,
    backgroundColor: 'green',
    width: 300,
    height: 159,
    marginBottom:10,
},
instructions:{
    color: '#888',
    fontSize: 30,
    marginHorizontal:15,
},
button: {
    backgroundColor: "#668343",
    padding: 20,
    borderRadius: 5,
},
buttonText: {
    borderRadius: 20,
    fontSize: 20,
    color: 'green',
},
footer:{
    color: '#852A52',
    fontSize: 20,
    marginHorizontal:15,
},
separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
},
});
