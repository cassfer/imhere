import {Home} from "./src/view/Home";
import { StatusBar } from "react-native";

export default function App(){
  return(
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Home/>
    </>

  )
};
