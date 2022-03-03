import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
////////////////////////////////////////////////////
import RestaurantsStack from './RestaurantsStack';
import AccountStack from './AccountStack';
import FavoritesStack from './FavoritesStack';
import SearchStack from './SearchStack';
import TopRestaurantsStack from './TopRestaurantsStack';


const Tab = createBottomTabNavigator()

export default function Navigation() {

    const screenOptions = (route,color) =>{
        let iconName = ""
        switch (route.name) {
            case "restaurants":
                iconName = "compass-outline"
                break;
            case "favorites":
                iconName ="heart-outline"
                break;
            case "top":
                iconName ="star-outline"
                break;
            case "search":
                iconName ="magnify"
                break;
            case "account":
                iconName ="home-circle"
                break;
        }
        return (
            <Icon
                name={iconName}
                type="material-community"
                size={30}
                color={color}
            />
        )
    }
    return (
      <NavigationContainer>
          <Tab.Navigator
            initialRouteName="restaurants"
            tabBarOptions={{
                inactiveTintColor:"#a17dd1",
                activeTintColor:"#442484"
            }}
            screenOptions={ ( { route } ) => ( {
                tabBarIcon:( { color } ) => screenOptions(route,color)
            })}
          >
              <Tab.Screen
                  name="restaurants"
                  component={RestaurantsStack}
                  options = {{title:"Restaurantes"}}
              />
              <Tab.Screen
                  name="favorites"
                  component={FavoritesStack}
                  options = {{title:"Favoritos"}}
              />
              <Tab.Screen
                  name="search"
                  component={SearchStack}
                  options = {{title:"Buscar"}}
               />
               <Tab.Screen
                  name="top"
                  component={TopRestaurantsStack}
                  options = {{title:"Top"}}
               />
               <Tab.Screen
                  name="account"
                  component={AccountStack}
                  options = {{title:"Cuenta"}}
              />
          </Tab.Navigator>
      </NavigationContainer>
    )
}
