import { Image, StyleSheet, Platform, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';
import Pokemon from '@/components/Pokemon';
import { SafeAreaView } from 'react-native-safe-area-context';
// import charmander from '../assets/images/charmander.png';

export default function HomeScreen() {

  const charmanderData = {
    name: "Charmander",
    image :'../assets/images/charmander.png',
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: "../assets/images/squirtle.png", // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: "../assets/images/bulbasaur.png", // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: "../assets/images/pikachu.png", // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  return (<>
    <SafeAreaView style={styles.container}>
      <ScrollView >

        <Pokemon  
        data={charmanderData}
        />
        <Pokemon data={pikachuData}/>
        <Pokemon data={squirtleData}/>
        <Pokemon data={bulbasaurData}/>
      </ScrollView>
    </SafeAreaView>    
  </>
    
  );
}

const styles = StyleSheet.create({
  // 
  container :{
    backgroundColor: "#fff",
    flex : 1,
    paddingTop : 24,
  } ,

});
