import { StyleSheet, Text, Button, View } from 'react-native'
import React, { useReducer } from 'react'
import ColorChange from '../../Component/ColorChange'
 const reducer = (state, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case "changeBlue":
            return  state.blue  + action.payload >255 || state.blue  + action.payload<0? state: {...state, blue:state.blue+action.payload};  

        case "changeGreen":
            return  state.green  + action.payload >255 || state.green  + action.payload<0?state:{...state, green:state.green+action.payload} ;


        case "changeRed":
            return  state.red  + action.payload >255 || state.red  + action.payload<0?state:{...state, red:state.red+action.payload} ;

        default:
            return state;
    }
  
};

export default function ColorChangeScreen() {
     const [state, dispatch] = useReducer(reducer, { 
        red: 0 ,
        blue:0,
        green:0
    })
    return (
        <View>
            <ColorChange color="Kırmızı" OnIncrease={()=> dispatch({type:'changeRed',payload:20})}  OnDecrease={()=>dispatch({type:'changeRed',payload:-20}) }  />
            <ColorChange color="MAvi" OnIncrease={()=> dispatch({type:'changeBlue',payload:20})}  OnDecrease={()=>dispatch({type:'changeBlue',payload:-20}) } />
            <ColorChange color="Yeşil" OnIncrease={()=> dispatch({type:'changeGreen',payload:20})}  OnDecrease={()=>dispatch({type:'changeGreen',payload:-20}) } />
        <View style={{height:150,width:150,backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}  /> 
        </View>

    )
}

const styles = StyleSheet.create({})