import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'

const CategoryButton = (props) => {
    const [rippleColor, setRippleColor] =React.useState('grey');
    const [rippleOverflow, setRippleOverflow] = React.useState(false);

  return (

    <>
    {props.name != "Gift" && 
    <TouchableNativeFeedback
    onPress={() => {
      setRippleColor('grey');
      setRippleOverflow(!rippleOverflow);
      props.onPress()
      //  refRBSheet.current.open()
    }}
    //  background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
    style={styles.locationButton}
    >
   <View style={styles.CategoryButtonStyle}>
    <Image source={props.image} style={{width: 75, height:35}} resizeMode='cover'  />
    <Text style={{fontSize: 12, fontWeight: 'normal', textAlign: 'center'}}>{props.name}</Text>
  </View>
  </TouchableNativeFeedback>
  }
  {props.name == "Gift" &&
     <TouchableNativeFeedback
     onPress={() => {
       setRippleColor('grey');
       setRippleOverflow(!rippleOverflow);
       props.onPress()
       //  refRBSheet.current.open()
     }}
     //  background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
     style={styles.locationButton}
     >
       <View style={styles.categoryButtonStyleGift}>
         <Image source={props.image} style={{width: "100%", height: '100%'}} resizeMode='repeat' />
         <View style={{position: 'absolute', right: -4, top: -4 , paddingHorizontal: 6, paddingVertical: 2, backgroundColor: 'rgba(255,105,180,0.9)', borderRadius: 10}}>
           <Text style={{fontSize: 9}}>New</Text>
         </View>
        <Text style={{position: 'absolute', fontSize: 20, textTransform: 'uppercase', fontWeight: 'bold', top: '40%', left: '30%'}}>Gift</Text>
       </View>

     </TouchableNativeFeedback>
  
  }
    </>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
    locationButton: {
        width: '95%',
        height: '100%',
        backgroundColor: 'red'
      },
      CategoryButtonStyle: {
        height: 75, 
        width:90, 
        padding: 6, 
        marginHorizontal: 4, 
        marginVertical: 4, 
        borderColor: 'lightgrey', 
        borderWidth: 1, 
        borderRadius: 4
      },
      categoryButtonStyleGift: {
        height: 160, 
        width:100, 
        marginHorizontal: 4, 
        marginVertical: 4, 
        borderColor: 'lightgrey',
        backgroundColor: 'pink', 
        borderWidth: 1, 
        borderRadius: 4,
        fontWeight: "bold"
      }
})