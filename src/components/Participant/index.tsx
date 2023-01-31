import { Alert, Text, View } from "react-native";

import { ActionButton } from "../ActionButton";
import { styles } from "./styles";

type participantProps = {
  nome: string;
  setParticipantsFunction: Function;
}

function handleParticipantRemove(nome: string, setParticipantsFunction: Function) {
  Alert.alert("Remover", `Remover o participante ${nome}?`, [
    {
      text: 'Não',
      style: "cancel"
    },
    {
      text: 'Sim',
      onPress: ()=>{
        setParticipantsFunction((prevState: String[]) => prevState.filter(participant => participant !== nome))
        Alert.alert("Usuário removido!")
      }
    }
  ])    
}


export function Participant(props: participantProps){
  return (
    <View style = {styles.container}>
      <Text style = {styles.name}>{props.nome}</Text>

      <ActionButton minusOperation={true} onClick={()=>handleParticipantRemove(props.nome, props.setParticipantsFunction)}/>
    </View>
  )
}