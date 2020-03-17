import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image,
         TouchableOpacity, 
         StyleSheet, 
       } from 'react-native';
import logo from './assets/images/logo.jpg';
import Play from './Play';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>RunSik</Text>
      <Image source={require('./assets/images/logo.jpg')} style={styles.logo}/>
      <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>  
    </View>
  );
} 

function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.instructions}>Que hacemos..?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Play')} style={styles.button}>
        <Text style={styles.buttonText}>Escuchar Música</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Run')} style={styles.button}>
        <Text style={styles.buttonText}>Comenzar Carrera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>


      {/* <Button style={styles.button} title="Escuchar Musica" onPress={() => navigation.navigate('Play')} />  */}
      {/* <Button style={styles.button} title="Comenzar Carrera" onPress={() => navigation.navigate('Run')} /> */}
      {/* <Button style={styles.button} title="Home" onPress={() => navigation.popToTop()} /> */}
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
    color: '#4A8B05',
    fontSize: 30,
    marginHorizontal:15,
},
button: {
    backgroundColor: "#BADF99",
    padding: 10,
    width:140,
    height:60,
    borderRadius: 10,
    margin: 10,
},
buttonText: {
    fontSize: 15,
    color: '#050505',
    textAlign: 'center',
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
