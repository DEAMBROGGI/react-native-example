import React from 'react';
import {Text, View, Image } from 'react-native';
import { styles } from './styles';


const CatApp = () => {
    

  return (
    <View>
      <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <Text style={styles.text}>ComponenteUno!</Text>
      <View>
      <Text style={{textAlign:"center", color:"blue"}}>TEXTO EN VIEW ANIDADA</Text> 
      </View>

    </View>
    
  );
}

export default CatApp;