import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type actionButtonProps = {
  minusOperation?: boolean;
  onClick: () => void;
}

export function ActionButton(props: actionButtonProps){
  return(
    <>
    {
      props.minusOperation ?
      (
        <TouchableOpacity style={styles.buttonMinus} onPress={props.onClick}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonPlus} onPress={props.onClick}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      )
    }
    </>
  )
}