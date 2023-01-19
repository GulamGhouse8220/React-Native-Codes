import Try from "./home/Try";
import Placeholder from "./home/Pleaceholder";
import { View, text } from "react-native";
import { StatusBar,StyleSheet } from "react-native";
import Button from "./home/Button";
import ImageViewer from "./home/Imageviewer";
import CircleButton from "./home/Circlebutton";
import IconButton from "./home/Iconbutton";
export default function App() {
  return (
    <>
      <Try />
      <Placeholder />
      <StatusBar />
      <Button label="Choose a photo" />
      <Button label="Use this photo" />
     
      <CircleButton/>
      <IconButton/>
    </>
  );
}


