import { Navigation } from 'react-native-navigation';


//Screens
import Sample from './src/screens/sample/sample'

//Register Screens

Navigation.registerComponent("mangan.sample",()=> Sample);

//Start app
Navigation.startSingleScreenApp({
  screen : {
    screen: "mangan.sample",
    title: "sample"
  }
});

