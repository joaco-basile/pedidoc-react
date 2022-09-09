import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./src/navigation/BottomTab";
import React from "react";

const App =()=>{
  return(
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  )
}

export default App;