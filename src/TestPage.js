import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import LayoutUtil from './util/LayoutUtil'
import { BoxShadow } from 'react-native-shadow'
import { BORDER_COLOR, COLOR_BORDER, COLOR_BTN_TITLE, COLOR_PAGE, COLOR_SUBTITLE, COLOR_THEME_GREEN, COLOR_TITLE, GREEN_THEME_COLOR, PAGE_COLOR, SUBTITLE_COLOR, TITLE_COLOR } from './constants/Color'
import { FONT_SIZE_MEDIUM, FONT_SIZE_SMALL, FONT_SIZE_TITLE, FONT_SIZE_TITLE2 } from './constants/Font'

export default class TestPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const signs = ['阳光',
      '适应能力',
      '团队管理',
      '工作认真',
      '团队意识',
      '专注',
      '乐观开朗',
      '资深UI设计',]
    
    const workExperiences = [
      {
        iconSource: require('./assets/Test/experience_default.png'),
        title: 'NIO蔚来',
        subtitle: '高端设计职位',
        callBack: ()=>{}
      },
      {
        iconSource: require('./assets/Test/experience_default.png'),
        title: '腾讯',
        subtitle: '资深UI设计',
        callBack: ()=>{}
      },
      {
        iconSource: require('./assets/Test/experience_default.png'),
        title: '美团',
        subtitle: 'UED',
        callBack: ()=>{}
      },
    ]

    const tools = [
      {
        iconSource: require('./assets/Test/tool_pr.png'),
        title: 'Pr',
        callBack: ()=>{}
      },
      {
        iconSource: require('./assets/Test/tool_wps.png'),
        title: 'WPS',
        callBack: ()=>{}
      },
      {
        iconSource: require('./assets/Test/tool_pr.png'),
        title: 'Pr',
        callBack: ()=>{}
      },
      {
        iconSource: require('./assets/Test/tool_wps.png'),
        title: 'WPS',
        callBack: ()=>{}
      },
      {
        iconSource: require('./assets/Test/tool_pr.png'),
        title: 'Pr',
        callBack: ()=>{}
      },
      {
        iconSource: require('./assets/Test/tool_wps.png'),
        title: 'WPS',
        callBack: ()=>{}
      },
    ]

    const platforms = [
      {
        iconSource: require('./assets/Test/platform_dy.png'),
        title: '抖音',
        callBack: ()=>{}
      },
      {
        iconSource: require('./assets/Test/platform_dy.png'),
        title: '抖音',
        callBack: ()=>{}
      },
      {
        iconSource: require('./assets/Test/platform_dy.png'),
        title: '抖音',
        callBack: ()=>{}
      },
      {
        iconSource: require('./assets/Test/platform_dy.png'),
        title: '抖音',
        callBack: ()=>{}
      },
    ]

    return (
      <ScrollView style={styles.main} contentContainerStyle={{paddingBottom:100}}>
        <Image source={require('./assets/Test/header.png')} style={styles.headerImg} />
        <View style={styles.indicatorRow}>
          <TouchableOpacity style={styles.indicatorItem}>
            <Text style={styles.selectTitle}>个人信息</Text>
            <View style={styles.indicator} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.normalTitle}>发布</Text>
          </TouchableOpacity>
        </View>
        {this.renderInfoCard()}
        {this.renderItemTitleRow('个人标签',()=>{})}
        {this.renderSignItems(signs)}
        {this.renderBorderLine()}
        {this.renderItemTitleRow('工作经历',()=>{})}
        {
          workExperiences.map((item, index) => {
            return this.renderExperienceItem(item)
          })
        }
        {this.renderItemTitleRow('教育经历', () => { })}
        {this.renderExperienceItem({ iconSource: require('./assets/Test/teach_01.png'), title: '上海师范大学', subtitle: '艺术设计', callBack: () => { } })}
        {this.renderBorderLine()}
        {this.renderItemTitleRow('读书', () => { }, null)}
        {this.renderAddBook()}
        {this.renderBorderLine()}
        {this.renderItemTitleRow('常用工具', () => { }, require('./assets/Test/edit_icon.png'))}
        {this.renderToolItems(tools)}
        {this.renderItemTitleRow('常逛平台', () => { }, require('./assets/Test/edit_icon.png'))}
        {this.renderToolItems(platforms)}
      </ScrollView>
    )
  }

  renderInfoCard() {
    const shadowOpt = {
      width: 335 * LayoutUtil.factorW,
      style: styles.infoCardShadow,
      height: 200,
      color: "#888",
      border: 10,
      opacity: 0.1,
      radius: 8,
      opacity: 0.2,
      x: 0,
      y: 8,
    }
    return (
      <View style={{ paddingBottom: 10 }}>
        <BoxShadow style={styles.infoCardShadow} setting={shadowOpt}>
          <View style={[styles.infoCard,]}>
            <View style={styles.progressBarBg}>
              <View style={styles.progressBar} />
            </View>
            <Text style={styles.infoTitle}>
              个人信息完善度
              <Text style={styles.infoRatio}>
                89%
              </Text>
            </Text>
            <Text style={styles.infoSubtitle}>完善的主页可让别人快速了解你</Text>
            <TouchableOpacity style={styles.infoTouch}>
              <Text style={styles.infoTouchTitle}>去完善</Text>
            </TouchableOpacity>
          </View>
        </BoxShadow>
      </View>
    )
  }

  renderItemTitleRow(title = '', callBack = () => { }, iconSource=require('./assets/Test/add.png'),) {
    return (
      <View style={styles.titleItemRow}>
        <Text style={styles.itemRowTitle}>{title}</Text>
        <TouchableOpacity onPress={() => callBack()}>
          {iconSource!=null && <Image style={styles.itemRowAddIcon} source={iconSource} />}
        </TouchableOpacity>
      </View>
    )
  }

  renderSignItems(signs = []) {
    return (
      <View style={styles.signsContent}>
        {
          signs.map((item, index) => {
            return (
              <View style={styles.signItem}>
                <Text style={styles.signItemTitle}>
                  {item}
                </Text>
              </View>
            )
          })
        }
      </View>
    )
  }

  renderBorderLine(marginTop = 30) {
    return (
      <View style={[styles.borderLine, { marginTop }]} />
    )
  }

  renderExperienceItem({
    iconSource,
    title = '',
    subtitle = '',
    callBack = () => { },
  }) {
    return (
      <TouchableOpacity
        onPress={() => callBack()}
        style={styles.experienceItem}>
        <Image style={styles.experienceIcon} source={iconSource} />
        <View style={styles.experienceTitleBox}>
          <Text style={styles.experienceTitle}>{title}</Text>
          <Text style={styles.experienceSubtitle}>{subtitle}</Text>
        </View>
        <Image style={styles.experienceArrow} source={require('./assets/Test/arrow_right.png')}/>
      </TouchableOpacity>
    )
  }

  renderAddBook(callBack=()=>{}) {
    return (
      <TouchableOpacity onPress={()=>callBack()}>
        <Image style={styles.addBook} source={require('./assets/Test/add_book.png')}/>
      </TouchableOpacity>
    )
  }

  // [{iconSource:require(''), title: '', callBack:()=>{}}]
  renderToolItems(items = []) {
    return (
      <View style={styles.toolItemsContent}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {items.map(({iconSource, title, callBack}, index) => {
          return (
            <TouchableOpacity style={styles.toolItem} onPress={() => callBack()}>
              <Image style={styles.toolIcon} source={iconSource} />
              <Text style={styles.toolTitle}>{title}</Text>
            </TouchableOpacity>
          )
        })}
        </ScrollView>
      </View>
    )
  }
  
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR_PAGE,
  },
  headerImg: {
    width: LayoutUtil.screenW,
    height: LayoutUtil.screenW / (500 / 339),
  },
  indicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: COLOR_BORDER,
    borderBottomWidth: 1,
  },
  indicatorItem: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectTitle: {
    fontSize: FONT_SIZE_MEDIUM,
    color: COLOR_TITLE,
    fontWeight: 'bold',
    paddingLeft: 25,
    paddingRight: 15,
  },
  normalTitle: {
    fontSize: FONT_SIZE_MEDIUM,
    color: COLOR_SUBTITLE,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 25,
  },
  indicator: {
    backgroundColor: GREEN_THEME_COLOR,
    height: 4,
    width: 30,
    position: 'absolute',
    bottom: 0,
    borderRadius: 2
  },
  infoCardShadow: {
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  infoCard: {
    width: 335 * LayoutUtil.factorW,
    height: 200,
    borderRadius: 8,
    backgroundColor: COLOR_PAGE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarBg: {
    height: 10,
    width: 295 * LayoutUtil.factorW,
    borderRadius: 5,
    backgroundColor: COLOR_BORDER,
  },
  progressBar: {
    height: 10,
    width: 250 * LayoutUtil.factorW,
    borderRadius: 5,
    backgroundColor: COLOR_THEME_GREEN,
  },
  infoTitle: {
    marginLeft: 20 * LayoutUtil.factorW,
    alignSelf: 'flex-start',
    fontSize: FONT_SIZE_TITLE,
    color: COLOR_TITLE,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  infoRatio: {
    fontSize: FONT_SIZE_TITLE,
    color: COLOR_THEME_GREEN,
    fontWeight: 'bold',
  },
  infoSubtitle: {
    marginLeft: 20 * LayoutUtil.factorW,
    alignSelf: 'flex-start',
    fontSize: FONT_SIZE_MEDIUM,
    color: COLOR_SUBTITLE,
  },
  infoTouch: {
    width: 295 * LayoutUtil.factorW,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_THEME_GREEN,
    marginTop: 20,
    borderRadius: 8,
  },
  infoTouchTitle: {
    color: COLOR_BTN_TITLE,
    fontSize: FONT_SIZE_MEDIUM,
  },
  titleItemRow: {
    flexDirection: 'row',
    padding: 20 * LayoutUtil.factorW,
    justifyContent: 'space-between',
  },
  itemRowTitle: {
    fontSize: FONT_SIZE_TITLE,
    color: COLOR_TITLE,
    fontWeight: 'bold',
  },
  itemRowAddIcon: {
    width: 30,
    height: 30,
    resizeMode: 'stretch'
  },
  signsContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20 * LayoutUtil.factorW,
  },
  signItem: {
    backgroundColor: COLOR_BORDER,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginRight: 10,
    marginTop: 10,
  },
  signItemTitle: {
    fontSize: FONT_SIZE_SMALL,
    color: COLOR_SUBTITLE,
  },
  borderLine: {
    height: 1,
    backgroundColor: COLOR_BORDER,
    width: 335 * LayoutUtil.factorW,
    marginTop: 30,
    alignSelf: 'center',
  },
  experienceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20 * LayoutUtil.factorW,
    marginVertical: 15,
  },
  experienceIcon: {
    width: 50,
    height: 50,
    marginRight: 20,
    resizeMode: 'stretch'
  },
  experienceTitleBox: {
    justifyContent: 'space-between',
    height: 50,
  },
  experienceTitle: {
    fontSize: FONT_SIZE_TITLE2,
    color: COLOR_TITLE,
    fontWeight: 'bold',
  },
  experienceSubtitle: {
    fontSize: FONT_SIZE_MEDIUM,
    color: COLOR_SUBTITLE,
    fontWeight: 'bold',
  },
  experienceArrow: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
    position: 'absolute',
    right: 0,
    top: 2
  },
  addBook: {
    width: LayoutUtil.screenW,
    height: LayoutUtil.screenW/(972/416),
  },
  toolItemsContent: {
    // height: 56,
    paddingHorizontal: 20*LayoutUtil.factorW,
  },
  toolItem: {
    marginRight: 40,
    alignItems: 'center',
  },
  toolIcon: {
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
  toolTitle: {
    fontSize: FONT_SIZE_MEDIUM,
    color: COLOR_SUBTITLE,
    marginTop: 10
  }
})