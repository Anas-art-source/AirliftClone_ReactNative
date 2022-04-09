import { Image, StyleSheet,View, Text, SafeAreaView,StatusBar, Touchable, TouchableOpacity, TouchableNativeFeedback, Pressable, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Icon, Slider } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import { SliderBox } from "react-native-image-slider-box";
import ProductCard from '../component/ProductCard';
import CategoryButton from '../component/CategoryButton';
import useAxios from '../component/useAxios';
import { useNavigation } from '@react-navigation/native';



const categoryList = [
  {
    name: 'Gift',
    image: require('../categoryImages/giftButton.jpg')
  },
  {
    name: 'Pakistan Day Sale',
    image: require('../categoryImages/23March.png')
  },
   {
    name: 'Ramazan Special',
    image: require('../categoryImages/ramazan.png')
  },
  {
    name: 'Promotions',
    image: require('../categoryImages/promotion2.png')
  },
  {
    name: 'cosmetics',
    image: require('../categoryImages/makeup.jpg')
  },
  {
    name: 'Fruits and Vegetables',
    image: require('../categoryImages/Vegetable.png')
  }, {
    name: 'Beverages',
    image: require('../categoryImages/juice2.png')
  },  {
    name: 'Snacks & Chocolates',
    image: require('../categoryImages/snack1.png')
  },
  {
    name: 'BreakFast',
    image: require('../categoryImages/bread.png')
  }, {
    name: 'Diary & Eggs',
    image: require('../categoryImages/milk.png')
  }, {
    name: 'Meat',
    image: require('../categoryImages/chicken.png')
  },
  {
    name: 'Gadgets',
    image: require('../categoryImages/eclectronic.png')
  },{
    name: 'Meat',
    image: require('../categoryImages/chicken.png')
  }

]


const HomeScreen = (props) => {
  const [rippleColor, setRippleColor] =React.useState('grey');
  const navigator = useNavigation()
  const [rippleOverflow, setRippleOverflow] = React.useState(false);
  const refRBSheet = React.useRef();
  const axios = useAxios()
  const [category, setCategory] = React.useState([])

  const header = {
    'authority': 'storeapi.airliftgrocer.com',
    'accept': 'application/json, text/plain, /',
    'access-key': 'f0f0682a-20db-4c63-aa12-d9214a0c5203',
    'longitude': '74.34346029999999',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
    'sentry-trace': '279430d75d7448ca8a9aab5ecff2aedb-913ad983ffb44baa-0',
    'latitude': '31.514468',
    'origin': 'https://airliftexpress.com',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://airliftexpress.com/',
    'accept-language': 'en-US,en;q=0.9,de;q=0.8'
  }

  return (
    <SafeAreaView >
      <View style={styles.toptab}>
      <TouchableNativeFeedback
        onPress={() => {
          setRippleColor('grey');
          setRippleOverflow(!rippleOverflow);
          refRBSheet.current.open()
        }}
        background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
        style={styles.locationButton}
      >
            <View style={styles.insideButtonView}>
              <Icon name='location' type='octicon' color='green'/>
              <View>
                  <Text>Deliver to</Text>
                  <Text style={{color: 'green'}}>B12, Row C,Gulshan e Iqbal, Block 5...</Text>
              </View>
              <Icon name="chevron-down" type='feather' color='green'/>
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
        <View style={styles.bottomSheetHeader}>
          <Text style={{fontWeight: 'bold'}}>Deliver to</Text>
          <Icon name='x-circle'  type='feather' size={17}/>
        </View>

        <View style={styles.savedLocation}>
          <Pressable onPress={() => refRBSheet.current.close()}>

          <Icon name='checkmark-circle-outline' type='ionicon' color='#1c96c5' size={30} />
          </Pressable>
          <View style={{paddingLeft: 10}}>
            <Text style={{fontWeight: 'bold'}}>Unsaved Location</Text>
            <Text>B12, Row C,Gulshan e Iqbal, Block 5...</Text>
          </View>
          
        </View>
        <View style={styles.locationDiv}>
            <View style={styles.locationButton}>
              <Icon name='arrow-top-right' type='material-community' color='green'/>
              <Text style={{paddingLeft: 10, color: 'green', fontWeight: '800'}}>Use my current location</Text>
            </View>
            <View style={styles.locationButton}>
              <Icon name='location' type='evilicon' color="green"/>
              <Text  style={{paddingLeft: 10, color: 'green', fontWeight: '800'}} >Select new location</Text>
            </View>
          </View>

      </RBSheet>
      </View>

      <ScrollView style={{backgroundColor: 'white'}}>


      <View style={{height: 130, marginTop: 4, justifyContent: 'center', alignItems: 'center', padding: 0}}>
        <SliderBox 
          resizeMode='contain'
          autoplay={true}
          circleLoop={true}
          images={[
            require('../images/image1.png'),
            require('../images/image2.png'),
            require('../images/image3.jpg'),
            require('../images/image4.jpg')
        ]}
          ImageComponentStyle={{width: '90%', borderRadius:  15, margin: 0, height: '100%'}}
          dotStyle={{width: 0, height: 0}}
        />

      </View>

      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Shop by Category</Text>
          <TouchableNativeFeedback 
          style={{padding: 2}} 
          onPress={() => {
          setRippleColor('grey');
          setRippleOverflow(!rippleOverflow);
          navigator.navigate('Category')
        }}
            background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
            >
            <Text style={{color: 'red', fontWeight: 'bold'}}>View All</Text>
          </TouchableNativeFeedback>
        </View>


        <ScrollView horizontal={true} style={styles.scrollView}   showsHorizontalScrollIndicator={false}> 
        <View style={{flexWrap: 'wrap', paddingHorizontal: 15}}>
          {categoryList.map(item => <CategoryButton name={item.name} image={item.image} onPress={() => navigator.navigate('CategoryDisplay', {category : item.name})} />)}
        </View>
        </ScrollView>
      </View>

      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Recommended for you</Text>
        </View>

        <ScrollView horizontal={true} style={{height: 430, padding: 10, marginBottom: 10}} contentContainerStyle={{justifyContent: 'space-around'}} >
           <ProductCard style={{marginHorizontal: 3}} />
           <ProductCard style={{marginHorizontal: 3}}/>
           <ProductCard style={{marginHorizontal: 3}} />
        </ScrollView>
      </View>

      </ScrollView>


     
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    text: { 
        color: 'blue'
    },
    safeArea: {
      paddingTop: StatusBar.height,
      backgroundColor: 'blue'
    },
    toptab: {
      width: '100%',
      height: 70,
      // backgroundColor: 'red'
      padding: 7,
      backgroundColor: '#fff',
    
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity:  0.4,
      shadowRadius: 3,
      elevation: 5,
    },
    locationButton: {
      width: '95%',
      height: '100%',
      backgroundColor: 'red'
    },
    insideButtonView: {
      flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center'
    },
    buttonSheet: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      overflow: 'hidden'
    },
    bottomSheetHeader: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    savedLocation: {
      flexDirection: 'row',
      // justifyContent: 'space-around',
      // width: '80%',
      paddingHorizontal: 5,
      marginVertical: 10,
      borderWidth: 1,
      paddingVertical: 9,
      borderRadius: 5,
      borderColor: '#1c96c5'
    },
    locationDiv: {
      borderTopColor: 'lightgrey',
      borderTopWidth: 1,
      paddingVertical: 5
    },
    locationButton: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 8
    },
    scrollView: {
      height: 170,
    }

})