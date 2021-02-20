import { Text, View ,Appearance,useColorScheme} from 'react-native';

import * as React from 'react';
import * as COLOR from '../../constants/Color'
import * as FONT from '../../constants/Font'
// https://reactnative.dev/docs/usecolorscheme
// https://reactnative.dev/blog/2020/03/26/version-0.62#new-dark-mode-features
const colorScheme = Appearance.getColorScheme();

// console.warn(colorScheme)
function HomeDetail() {


    if(colorScheme === "dark"){

       return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
               <Text style={{color:COLOR.PINK_THEME_COLOR,fontSize:FONT.FONT_SIZE_TITLE}}> "发帖详细页面</Text>
            </View>
      );

    }else{
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
               <Text> 发帖详细页面</Text>
            </View>
      );
    }
    
    
  
  
}

export default HomeDetail;
