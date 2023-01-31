import { Alert, Text, View } from "react-native";

import { ActionButton } from "../ActionButton";
import { styles } from "./styles";

type participantProps = {
  nome: string;
}

function handleParticipantRemove(nome: string) {
  Alert.alert("Remover", `Remover o participante ${nome}?`, [
    {
      text: 'Não',
      style: "cancel"
    },
    {
      text: 'Sim',
      onPress: ()=>{
        Alert.alert("Deletado!")
      }
    }
  ])    
}


export function Participant(props: participantProps){
  return (
    <View style = {styles.container}>
      <Text style = {styles.name}>{props.nome}</Text>

      <ActionButton minusOperation={true} onClick={()=>handleParticipantRemove(props.nome)}/>
    </View>
  )
}