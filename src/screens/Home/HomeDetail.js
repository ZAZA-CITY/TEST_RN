/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
class HomeDetail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  topView = () => {
    return (
      <View style={{backgroundColor: '#FFFFFF'}}>
        <View>
          <View style={{height: 44}} />
          <View
            style={{
              flexDirection: 'row',
              height: 44,
              justifyContent: 'space-between',
            }}>
            <Image
              style={{
                marginLeft: 16,
                marginTop: 10,
                width: 16,
                height: 16,
                transform: [{rotate: '180deg'}],
              }}
              source={require('../../assets/arrow.png')}
            />
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: 16,
                color: '#333333',
                marginTop: 10,
              }}>
              活动详情
            </Text>
            <View />
          </View>
        </View>
        <Image
          style={{width: width, height: 225}}
          source={require('../../assets/carouse.png')}
        />
        <View style={{paddingHorizontal: 10, paddingVertical: 15}}>
          <Text style={{fontSize: 24, color: '#EC0000'}}>￥99-199</Text>
          <Text
            style={{
              lineHeight: 30,
              color: '#333333',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            一场盛大的线下音乐会会会会会会会会会会
            一场盛大的线下音乐会会会会会会会会
          </Text>
          <Text style={{marginTop: 5, fontSize: 12, color: '#666666'}}>
            浏览 1340次
          </Text>
          <View
            style={{marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 16, height: 16}}
              source={require('../../assets/place.png')}
            />
            <Text style={{marginLeft: 3, fontSize: 15, color: '#666666'}}>
              东京涉谷区天马摇滚酒吧
            </Text>
          </View>
          <View
            style={{marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 16, height: 16}}
              source={require('../../assets/time.png')}
            />
            <Text style={{marginLeft: 3, fontSize: 15, color: '#666666'}}>
              12/17 10:00 - 14:00 周四
            </Text>
          </View>
          <View
            style={{marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginLeft: 19, fontSize: 15, color: '#666666'}}>
              12/18 10:00 - 14:00 周五
            </Text>
          </View>
          <View style={{marginTop: 15, flexDirection: 'row'}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#EC0000',
                width: 78,
                height: 30,
              }}>
              <Text style={{fontSize: 14, color: '#FFFFFF'}}>狂欢票</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 78,
                height: 30,
                marginLeft: 15,
                borderColor: '#6DD380',
                borderWidth: 1,
              }}>
              <Text style={{fontSize: 14, color: '#6DD380'}}>至尊票</Text>
            </View>
          </View>
          <Text style={{marginTop: 10, color: '#B5B5B5', fontSize: 12}}>
            票种备注：包含门票；不含酒水
          </Text>
        </View>
      </View>
    );
  };
  // 乐队介绍
  view2 = () => {
    return (
      <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
        <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
          <Text style={{fontSize: 15, color: '#333333'}}>·乐队介绍</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 14,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
              }}>
              <Image
                style={{width: 60, height: 60}}
                source={require('../../assets/avatar.png')}
              />
            </View>
            <View style={{marginLeft: 10, flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    lineHeight: 22,
                    fontSize: 14,
                    color: '#333333',
                    maxWidth: 204,
                  }}>
                  Music Studio Music Studio Mu Music Studio Music Studio …
                </Text>
                <View
                  style={{
                    width: 60,
                    height: 26,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#EC0000',
                  }}>
                  <Text style={{fontSize: 14, color: '#FFFFFF'}}>关注</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 3,
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 14, height: 10}}
                  source={require('../../assets/fans.png')}
                />
                <Text style={{fontSize: 11, marginLeft: 4, color: '#666666'}}>
                  粉丝 805
                </Text>
                <Image
                  style={{
                    marginLeft: 10,
                    width: 14,
                    height: 10,
                  }}
                  source={require('../../assets/gift.png')}
                />
                <Text style={{fontSize: 11, marginLeft: 4, color: '#666666'}}>
                  活动 12
                </Text>
                <View
                  style={{
                    marginLeft: 15,
                    width: 41,
                    height: 18,
                    borderRadius: 9,
                    backgroundColor: '#6DD380',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 8, color: '#FFFFFF'}}>已认证</Text>
                </View>
              </View>
            </View>
          </View>
          <Text
            style={{
              marginTop: 10,
              lineHeight: 21,
              fontSize: 14,
              color: '#666666',
            }}>
            Music Studio
            是一个专业的音乐工作室,提供从古典到摇滚的演奏乐队人员。专辑制作和音乐软件的培训也是我们的强项，欢迎联系！
          </Text>
        </View>
      </View>
    );
  };

  // 最近参与
  view3 = () => {
    let picdata = ['', '', '', '', ''];
    return (
      <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingTop: 17,
            paddingBottom: 20,
          }}>
          <Text style={{fontSize: 15, color: '#333333'}}>·最近参与</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {picdata.map((it, ix) => {
                return (
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      marginRight: 10,
                    }}
                    source={require('../../assets/image.png')}
                    key={'picdata' + ix}
                  />
                );
              })}
              <Text style={{color: '#6DD380', fontSize: 14, marginLeft: 17}}>
                45<Text style={{color: '#333333'}}>/100</Text>
              </Text>
            </View>
            <Image
              style={{width: 16, height: 16}}
              source={require('../../assets/arrow.png')}
            />
          </View>
        </View>
      </View>
    );
  };

  view4 = () => {
    return (
      <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingTop: 17,
            paddingBottom: 28,
          }}>
          <Text style={{fontSize: 15, color: '#333333'}}>·最近参与</Text>
          <Text style={{fontSize: 14, color: '#333333', marginTop: 10}}>
            活动详情
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#666666',
              marginTop: 10,
              lineHeight: 21,
            }}>
            由Music
            Studio主办的一场盛大的线下音乐会。该音乐会将从爵士乐、融合乐、放克乐等各个音乐流派中招募很多国内外个性横溢的一流音乐家。
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#333333',
              }}>
              活动人数
            </Text>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 14,
                color: '#666666',
              }}>
              10
            </Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={{backgroundColor: '#F5F5F5', flex: 1}}>
        <ScrollView>
          {this.topView()}
          {this.view2()}
          {this.view3()}
          {this.view4()}
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#FFFFFF',
            paddingBottom: 29,
            paddingTop: 7,
            paddingLeft: 23,
            paddingRight: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{width: 21, height: 21}}
                source={require('../../assets/user.png')}
              />
              <Text style={{marginTop: 5, color: '#666666', fontSize: 12}}>
                主办方
              </Text>
            </View>
            <View style={{marginLeft: 34, alignItems: 'center'}}>
              <Image
                style={{width: 21, height: 21}}
                source={require('../../assets/star.png')}
              />
              <Text style={{marginTop: 5, color: '#666666', fontSize: 12}}>
                2019 收藏
              </Text>
            </View>
            <View
              style={{
                marginLeft: 15,
                width: 202,
                height: 40,
                backgroundColor: '#EC0000',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, color: '#FFFFFF'}}>立即报名</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default HomeDetail;
