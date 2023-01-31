import { Alert, FlatList, Text, TextInput, View } from "react-native";

import { ActionButton } from "../../components/ActionButton";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";
import { useState } from "react";

export function Home(){
  
  const [participant, setParticipant] = useState<string>("");
  const [participants, setParticipants] = useState<string[]>([])
  
  
    function handleParticipantAdd(){
      console.log("Você clicou em adicionar o participante");
      if(participant.length == 0){
        return Alert.alert("Participante Inexistente", "O nome do participante não pode ser vazio!")
      }

      if(participants.includes(participant)){
        return Alert.alert("Participante Existe", `O participante ${participant} já esta na lista!`)
      }
      setParticipants(prevState => [...prevState, participant]);
      return setParticipant("")
    }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          value={participant}
          onChangeText={setParticipant}
        />
        <ActionButton onClick={()=>handleParticipantAdd()}/>
      </View>

      <FlatList
        data={participants}
        keyExtractor = {item => item}
        renderItem = {({item})=>(
          <Participant
            key={item}
            nome={item}
            setParticipantsFunction={setParticipants}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda?
            Adicione participantes a sua lista de participantes
          </Text>
        )}
      />
    </View>
  )
};