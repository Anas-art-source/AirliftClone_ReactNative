import { StyleSheet, Text, View, TouchableNativeFeedback, ScrollView } from 'react-native'
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import ProductCard from '../component/ProductCard';
const Tab = createMaterialTopTabNavigator();


const subCat = ["Georgio Armani", "Gucci", "H&M", "Mr.Anas"]

const category = [
    {
        item: 'Gift',
        cat: ['Watches', 'Smartphone', 'Glasses', 'Perfumes'],
       
    }
]

const brand = [
    {
        item: 'Gift',
        category: 'Watches',
        brands: ['Timex', 'Tissot', 'Swatch']
    },
    {
        item: 'Gift',
        category: 'Smartphone',
        brands: ['Iphone', 'Samsung']
    },
    {
        item: 'Gift',
        category: 'Glasses',
        brands: ['Ray-Ban', 'Boss']
    },
     {
        item: 'Gift',
        category: 'Perfumes',
        brands: ['Swiss Guard', 'Dolce & Gabbana']
    }
]


const products = [
    {
        item: "Gift",
        category: 'Glasses',
        brand: 'Ray-Ban',
        products: [
            {
                price: "Rs 4230",
                name: "Aviator Large Metal",
                description: "Rayban 3025 - Golden Green",
                image: require('../products/rayban-1.png'),
                weight: "Medium",
                points: 2300
            },
            {
                price: "Rs 7000",
                name: "Ray Ban Wayfarer",
                description: "Ray Ban Wayfarer RB2140",
                image: require('../products/rayban-2.jpg'),
                weight: "Small",
                points: 8300
            },
            {
                price: "Rs 1,990",
                name: "Rayban 6810",
                description: "Rayban 6810 - Black",
                image: require('../products/rayban-3.jpg'),
                weight: "Large",
                points: 2300
            },
            {
                price: "Rs 2,190",
                name: "Rayban C1991",
                description: "Rayban C1991 - Black",
                image: require('../products/rayban-4.jpg'),
                weight: "Large",
                points: 2300
            }
        ]
    },
    {
        item: "Gift",
        category: 'Glasses',
        brand: 'Boss',
        products: [
            {
                price: "Rs 5500",
                name: "Hugo Boss BOSS",
                description: "Hugo Boss BOSS 1150",
                image: require('../products/boss-2.jpg'),
                weight: "Medium",
                points: 6400
            },
            {
                price: "Rs 7000",
                name: "Hugo Boss BOSS",
                description: "Hugo Boss BOSS 1150",
                image: require('../products/boss-3.jpg'),
                weight: "Small",
                points: 7300
            },
            {
                price: "Rs 1,800",
                name: "Boss 6029",
                description: "Boss 6029 - Black",
                image: require('../products/boss-1.jpg'),
                weight: "Large",
                points: 2500
            },
            {
                price: "Rs 1,800",
                name: "Boss 6089",
                description: "Boss 6029 - Black",
                image: require('../products/boss-1.jpg'),
                weight: "Large",
                points: 2500
            }
        ]
    },
    {
        item: "Gift",
        category: 'Watches',
        brand: 'Tissot',
        products: [
            {
                price: "Rs 66000",
                name: "TISSOT SUPERSPORT",
                description: "TISSOT - T125.617",
                image: require('../products/tissot-1.jpg'),
                weight: "Medium",
                points: "7k"
            },
            {
                price: "Rs 52000",
                name: "Tissot Tradition",
                description: "Tissot Tradition Black Dial",
                image: require('../products/tissot-2.jpg'),
                weight: "Small",
                points: "6k"
            },
            {
                price: "Rs 58000",
                name: "Tissot Supersport",
                description: "Tissot Supersport - T125.610",
                image: require('../products/tissot-3.jpg'),
                weight: "Large",
                points: "6k"
            },
            {
                price: "Rs 2,190",
                name: "Rayban C1991",
                description: "Rayban C1991 - Black",
                image: require('../products/rayban-4.jpg'),
                weight: "Large",
                points: 2300
            }
        ]
    },
]



const TopBarNavigatorCreator = (props) => {
    const [rippleColor, setRippleColor] =React.useState('grey');
    const [rippleOverflow, setRippleOverflow] = React.useState(false);
    const [activeCategory, setActiveCategory] = React.useState('')
    const [category, setCategory] = React.useState([])
    const [products, setProducts] = React.useState([])


    React.useEffect(() => {
        const b = brand.filter(item => item.category == props.subCategory)[0]
        setCategory(b.brands)
    }, [props.subCategory])

    React.useEffect(() => {
          if (activeCategory == "") {
             const pd = products.filter(item => item.category == props.subCategory)
             console.log(pd)
          }  else {
            const pd = products.filter(item => item.category == props.subCategory && item.brand == activeCategory)
            console.log(pd)
          }
    }, [activeCategory])

    return (
        <ScrollView horizontal={false}>
        <ScrollView horizontal={true} 
        style={{
            paddingVertical: 10, 
            paddingHorizontal: 8, 
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity:  0.4,
            shadowRadius: 3,
            elevation: 5
        }} 
        showsHorizontalScrollIndicator={false}
>
        {category.length > 0 && 
            category.map(item => (
                <TouchableNativeFeedback
                key={item}
                onPress={() => {
                    setRippleColor('grey');
                    setRippleOverflow(!rippleOverflow);
                    setActiveCategory(item)
                    //  refRBSheet.current.open()
                }}
                //  background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
                
                >
        <View style={activeCategory == item ? styles.subCategoryActive :styles.subCategoryButton}>
            <Text style={activeCategory == item ? styles.activeColor  :styles.inactiveColor}>{item}</Text>
        </View>
     </TouchableNativeFeedback>
            ))}

        {category.length == 0 && 
                <TouchableNativeFeedback
                key="all"
                onPress={() => {
                    setRippleColor('grey');
                    setRippleOverflow(!rippleOverflow);
                    setActiveCategory(item)
                    //  refRBSheet.current.open()
                }}
                //  background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
                
                >
        <View style={styles.subCategoryActive}>
            <Text style={styles.activeColor}>All</Text>
        </View>
     </TouchableNativeFeedback>
            }
        </ScrollView>
            <ScrollView >
                <View style={{flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'white'}}>


                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                </View>

            </ScrollView>
        </ScrollView>
    )
}



const CategoryDisplayScreen = ({navigation ,route}) => {
    const params = route.params
    const [cat, setCat] = React.useState(["Watches"])


    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: params.category === '' ? 'No title' : params.category,
        });

        const {cat}= category.filter(item => item.item == params.category)[0]
        setCat(cat)

        
      }, [navigation, params.category]);

  return (
    <Tab.Navigator 
        // tabBarOptions={{style: {elevation: 0}}}
    
        screenOptions={{
        tabBarItemStyle: {width: 'auto', minWidth: 100},
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
            backgroundColor: 'yellowgreen'
        },
            }}>
        {cat.map(item => <Tab.Screen name={item} key={item} children={() =>  <TopBarNavigatorCreator subCategory={item} />} />)}
      
    </Tab.Navigator>
  )
}

export default CategoryDisplayScreen

const styles = StyleSheet.create({
    subCategoryButton: {
        paddingHorizontal: 6, 
        paddingVertical: 6, 
        borderWidth: 1,
         borderRadius: 3,
         color: 'grey',
         marginHorizontal: 4,
         backgroundColor: 'rgba(189, 195, 199,0.2)',
         borderColor: 'rgba(189, 195, 199,1)'
        },
    subCategoryActive: {
        backgroundColor: 'rgba(3, 138, 255, 0.2)',
        borderColor: 'rgba(3, 138, 255, 1)',
        borderWidth: 1,
        paddingHorizontal: 6, 
        paddingVertical: 6, 
        borderWidth: 1,
         borderRadius: 3,
         marginHorizontal: 4

    },
    activeColor: {
        color: 'rgba(3, 138, 255, 1)',
    },
    inactiveColor: {
        color: 'grey'
    }

    
})