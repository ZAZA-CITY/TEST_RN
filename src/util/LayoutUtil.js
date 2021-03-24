// /**
//  * 屏幕工具类 以及一些常用的工具类封装
//  * ui设计基准,iphone 6 2倍图
//  * width:750px
//  * height:1334px
//  * @2x
//  */
import {
  PixelRatio,
  Dimensions,
  Platform,
} from 'react-native';

const targetWidth = 375
const targetHeight = 812

export default class LayoutUtil {
  static screenW = Dimensions.get('window').width
  static screenH = Dimensions.get('window').height

  static factorW = Dimensions.get('window').width / targetWidth
  static factorH = Dimensions.get('window').height/targetHeight
}
