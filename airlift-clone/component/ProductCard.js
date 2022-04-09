import { StyleSheet, Text, View, TouchableNativeFeedback, Image, Button } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import RBSheet from "react-native-raw-bottom-sheet";
import { avatarSizes } from '@rneui/base/dist/Avatar/Avatar';


const ProductCard = (props) => {
    const [rippleColor, setRippleColor] =React.useState('grey');
    const [rippleOverflow, setRippleOverflow] = React.useState(false);
    const refRBSheet=React.useRef()
  return (

    <>
    <TouchableNativeFeedback
        onPress={() => {
          setRippleColor('grey');
          setRippleOverflow(!rippleOverflow);

        }}
      >
          <View style={{...styles.cardWrapper, ...props.style}}>
            <Image source={props.image ? props.image : require('../images/chilligarlic1.png')} style={{width: 150, height: 150}} />
            <View style={{position: 'absolute', top: 10, right: 10 , borderRadius: 100 ,width: 45, height: 20, backgroundColor: '#fdeee0', borderColor: '#f6be8a', borderWidth: 0.5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <Image source={require('../images/coins1.png')} style={{width:12, height: 12}} />
                <Text>{props.points ? props.points : 620}</Text>
            </View>
            <Text style={{alignSelf: 'flex-start', paddingLeft: 12, fontSize: 20, fontWeight: 'bold'}}>{props.price? props.price : "Rs 85"}</Text>
            <Text style={{paddingTop: 25}}>{props.description ? props.description : "Sundip Chilli Garlic Sauce 250 Grams"}</Text>

            <TouchableNativeFeedback
              onPress={() => {
                setRippleColor('grey');
                setRippleOverflow(!rippleOverflow);
                refRBSheet.current.open()

              }}
            >
             <View style={{marginTop: 5, width: "90%", padding: 5, borderWidth: 1.1, borderColor: 'dodgerblue', borderRadius: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{color: 'dodgerblue'}}>{props.weight ? props.weight :"250 gm"}</Text>
                <Icon name="expand-more" type='material' color='dodgerblue' />
             </View>
            </TouchableNativeFeedback>
            <View style={{marginTop: 7, width: '90%'}}>
                <Button title='Add to Cart' color="green" />
            </View>
          </View>

         

    </TouchableNativeFeedback>
    <RBSheet 
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: 'rgba(52, 52, 52, 0.8)'
                // opacity: 0.2
              },
              draggableIcon: {
                backgroundColor: "transparent",
                height: 0
              },
              container: {
                paddingHorizontal: 15,
                paddingTop: 0,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                overflow: 'hidden',
                height: '30%'
              }
            }}
          >

          </RBSheet>
    </>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    cardWrapper: {
        width: 180,
        height: 350,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        alignItems: 'center',
        borderRadius: 3,
        // marginHorizontal: 4
    }
})