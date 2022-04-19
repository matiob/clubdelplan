import React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../navigation/Tabs';
import Register from '../screens/RegisterScreen';
import OwnPlans from '../screens/planesUserScreens/OwnPlans';
import UserWillAttendPlans from '../screens/planesUserScreens/UserWillAttendPlans';
import UserHistoryPlans from '../screens/planesUserScreens/UserHistoryPlans';
import editPref from './planesUserScreens/EditPreferences';
import ComentScreen from './ComentScreen'
import CardEventScreen from './CardEventScreen'
import LogInScreen from './LogInScreen'
import NewPlanScreen from './NewPlanScreen';
// import middleScreen from './src/screens/MiddleScreen.js';

// Configuracion de Store redux
import HomeScreen from '../screens/HomeScreen';
import MiddleScreen from './MiddleScreen';
import CreatePassRedSocial from './CreatePassRedSocial';
//--------------------------------------

const Stack = createNativeStackNavigator();

function MiddleApp() {

    return (

        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen
                name="Home"
                component={HomeScreen}

            />
            <Stack.Screen
                name="Register"
                component={Register}

            />
            <Stack.Screen
                name="LogIn"
                component={LogInScreen}

            />
            <Stack.Screen
                name="MiddleScreen"
                component={MiddleScreen}

            />
            <Stack.Screen
                name= "NewPlanScreen"
                component={NewPlanScreen}
            />
             
          
            <Stack.Screen
                name="Tus planes"
                component={OwnPlans}
                options={{ headerShadowVisible: false }}
            />
            <Stack.Screen
                name="Editar preferencias"
                component={editPref}
                options={{ headerShadowVisible: false }}
            />
            <Stack.Screen
                name="Fuiste invitado"
                component={UserWillAttendPlans}
                options={{ headerShadowVisible: false }}
            />
            <Stack.Screen
                name="Historial"
                component={UserHistoryPlans}
                options={{ headerShadowVisible: false }}
            />
            <Stack.Screen name="Comentarios" component={ComentScreen} />
            <Stack.Screen name="Plan" component={CardEventScreen} />
            <Stack.Screen name="Crea tu contraseña" component={CreatePassRedSocial} />

        </Stack.Navigator>

    );
}

export default MiddleApp;
