import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import Waterfall from 'react-native-virtualized-waterfall';
import WaterFlowItem from './WaterFlowItem';
export default class TestWaterFall extends Component {
  state = {items: []};

  mapToItemInfo(
    iamge,
    width,
    content,
    isFavor,  // 点赞状态
    contentLines, // 显示内容行数
    favorCount, // 点赞数
    userName, // 用户名
  ) {
    return {
      imgHeight: width / iamge.radio,
      size: width / iamge.radio + 60 + 20 * contentLines,
      content: content,
      contentLines: contentLines,
      isFavor: isFavor,
      url: iamge.url,
      favorCount,
      userName: userName,
    };
  }

  async fetchItems(columnWidth, reload = false) {
    const {items} = this.state;
    const newItems = [];
    for (let i = 0; i < 20; i++) {
      newItems.push(
        this.mapToItemInfo(
          images[i % 3],
          columnWidth,
          '这可能是我拍过最好的照片这可能是我拍过最好的照片这可能是我拍过最好的照片这可能是我拍过最好的照片',
          i % 2 == 0,
          (i % 3) + 1,
          99 * i,
          '用户' + i,
        ),
      );
    }
    this.setState({
      items: items.concat(newItems),
    });
    return Promise.resolve();
  }

  render() {
    return (
      <Waterfall
        style={{backgroundColor: '#eee'}}
        onInitData={(columnWidth) => this.fetchItems(columnWidth)}
        columnNum={2}
        columnGap={10}
        itemInfoData={this.state.items}
        bufferAmount={10}
        infiniteThreshold={500}
        containerStyle={{paddingRight: 10, paddingLeft: 10}}
        renderItem={(itemInfo, columnWidth, index) => {
          return this._renderItem(itemInfo, columnWidth, index);
        }}
        onRefresh={(columnWidth) => {
          return this.fetchItems(columnWidth, true);
        }}
        onInfinite={(columnWidth) => this.fetchItems(columnWidth)}
      />
    );
  }

  _renderItem(itemInfo, columnWidth, index) {
    const {
      imgHeight,
      size,
      content,
      contentLines,
      isFavor,
      url,
      favorCount,
      userName,
    } = itemInfo;
    return (
      <View style={styles.cell}>
        <View style={styles.cellContent}>
          <Image
            style={styles.image}
            source={{uri: url}}/>
          <Text numberOfLines={contentLines} style={styles.contentText}>
            {content}
          </Text>
          <View style={styles.avatorRow}>
            <Image
              source={require('./assets/Test/avator.jpeg')}
              style={styles.avator}/>
            <Text>{userName}</Text>
            <View
              style={styles.favorBox}>
              <Image
                source={require('./assets/Test/collection.png')}
                style={[styles.favorIcon,{tintColor: isFavor ? 'pink' : '#eee',}]}/>
              <Text>{favorCount}</Text>
            </View>
          </View>
        </View>
        <View style={styles.borderLine}/>
      </View>
    );
  }
}

const styles = {
  cell: {
    height: size,
    width: columnWidth,
  },
  cellContent: {
    flex: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: columnWidth,
    height: imgHeight,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  contentText: {padding: 5},
  avatorRow: {flexDirection: 'row', alignItems: 'center'},
  avator: {
    width: 30,
    height: 30,
    borderRadius: 30,
    resizeMode: 'stretch',
    marginHorizontal: 5,
  },
  favorBox: {
    position: 'absolute',
    right: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  favorIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    margin: 5,
  },
  borderLine: {
    height: 10, width: columnWidth, backgroundColor: '#eee'
  },
};

const images = [
  {
    radio: 185 / 250,
    url: 'https://tva1.sinaimg.cn/large/008eGmZEly1gorvy2kt61j305406sgo1.jpg',
  },

  {
    radio: 185 / 250,
    url: 'https://tva1.sinaimg.cn/large/008eGmZEly1gorvy0f0h6j305606ytb0.jpg',
  },
  {
    radio: 185 / 250,
    url: 'https://tva1.sinaimg.cn/large/008eGmZEly1gorvxypam1j305506ydi3.jpg',
  },
  {
    radio: 185 / 250,
    url: 'https://tva1.sinaimg.cn/large/008eGmZEly1gorvxwre7mj305506zjtu.jpg',
  },
];
