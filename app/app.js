import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from './splash';
import Index from './index';


export default function app() {
  const [isShowSplash, setIsShowSplash] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setIsShowSplash(false);
        }, 2000);
    } );
    return (
        <View style={styles.container}>
            {isShowSplash ? <Splash /> : <Index />}
        </View>
    )
}