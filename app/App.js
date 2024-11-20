import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../Src/Screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{
        fontSize:23,
        fontWeight:'bold',
        color:'#ffd4bf',
        backgroundColor:'#f57f43',
        width:'100%',
        textAlign:'center',
        paddingVertical:10,
        marginVertical:10,
        borderRadius:20
      }}>Wellcom To Know Temperature App</Text>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});