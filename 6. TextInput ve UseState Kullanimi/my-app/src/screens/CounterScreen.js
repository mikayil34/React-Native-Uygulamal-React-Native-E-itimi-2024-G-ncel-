import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useReducer } from 'react'


const reducer=(state,action)=>{
    console.log(action)
     switch (action.type) {
        case "Incremant":
            return  {...state,count:state.count+action.paylod};
             
            case "decrement":
                return  {...state,count:state.count-action.paylod};
             
 
            case "restart":
                return  {...state,count:action.paylod};
              
        default:
            return state;
     }
};

export default function CounterScreen() {
            const [state,dispatch] = useReducer(reducer,{count:1})

    return (
        <View  >
            <Button title='Arttır' onPress={() => {
                 dispatch({type:"Incremant",paylod:1})
            }} />
            <Button title='Azalt' onPress={() => {
                dispatch({type:"decrement",paylod:1})
            }} />
            <Button title='Sıfırla' onPress={() => {
                  dispatch({type:"restart",paylod:0})

            }} />
           <Text>Sayaç:{state.count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})