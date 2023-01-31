import { Alert, FlatList, Text, TextInput, View } from "react-native";

import { ActionButton } from "../../components/ActionButton";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home(){
  const participants = [
    "Cassio Fernandes", "Suely Caroline", "Adenira Alves", "Cleber Nilson",
    "Carlos Fernandes", "Andriely Soares", "Ingrid Martins", "Pedro Camargo",
    "Eloa Martins", "Isabela Fernandes"];
  
    function handleParticipantAdd(participante: string){

      if(participants.includes("Cassio Fernandes")){
        return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome!")
      }
    
      console.log("Você clicou em adicionar o participante");
    }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
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