import { Text, View ,Appearance,useColorScheme,Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDetail from './HomeDetail'
import * as React from 'react';
import * as COLOR from '../../constants/Color'
import * as FONT from '../../constants/Font'
// https://reactnative.dev/docs/usecolorscheme
// https://reactnative.dev/blog/2020/03/26/version-0.62#new-dark-mode-features
const colorScheme = Appearance.getColorScheme();

// console.warn(colorScheme)
function Home({navigation}) {


    if(colorScheme === "dark"){

       return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
               <Text style={{color:COLOR.PINK_THEME_COLOR,fontSize:FONT.FONT_SIZE_TITLE}}> "首页 dark ！！！！" + colorScheme</Text>
               <Button
                title="Go to Details"
                onPress={() => navigation.navigate('HomeDetail')}
              />
            </View>
      );

    }else{
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
               <Text> "首页 light ！！！！" + colorScheme</Text>
               <Button
                  title="Go to Details"
                  onPress={() => navigation.navigate('HomeDetail')}
                />
            </View>
      );
    }
    
    
  
  
}

export default Home;
