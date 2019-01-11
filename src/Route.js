import React from 'react';
import {StackNavigator} from 'react-navigation';
import Intro from './Components/Intro/Intro';
export const Home = StackNavigator({
    main:{
        screen: Intro,
        navigationOptions:{
            header: null
        }
    }
});