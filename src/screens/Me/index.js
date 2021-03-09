/* eslint-disable react-native/no-inline-styles */
// import Me from './Me';
import React from 'react';
import TextParse from '../../../TestParse';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
class Me extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentSelect: 0,
      dataSource: {},
    };
  }

  componentDidMount() {
    let object = {
      name: 'sihubiao',
      zhiwei: 'app开发',
      nianxian: '13',
      fensi: 5,
      guanzhu: 10,
      labelData: [
        '阳光',
        '适应能力',
        '团队管理',
        '工作认证',
        '专注',
        '自身UI设计',
      ],
      workArr: [
        {name: 'NiO蔚来', zhiwei: '高端设计职位'},
        {name: '腾讯', zhiwei: 'UI设计'},
        {name: '美团', zhiwei: '高端设计职位'},
      ],
      jiaoyuArr: [{school: '北京大学', zhuanye: '艺术设计'}],
      changyonggongjuArr: ['C4D', '36kr', 'WPS', 'Pr'],
      changguangpingtaiArr: ['pinterest', '数英', 'YouTube', '抖音'],
    };
    this.setState({
      dataSource: object,
    });
  }

  topView = () => {
    const {dataSource} = this.state;
    return (
      <ImageBackground
        style={{width: width, height: 250, backgroundColor: 'black'}}>
        <View style={{marginTop: 64, paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image style={{width: 15, height: 15, backgroundColor: 'red'}} />
            <Image style={{width: 15, height: 15, backgroundColor: 'red'}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: 'red',
                borderRadius: 30,
              }}>
              <Image style={{flex: 1}} />
            </View>
            <TouchableOpacity
              style={{
                width: 90,
                height: 30,
                borderRadius: 15,
                borderColor: '#fff',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                console.log('点击了编辑资料');
              }}>
              <Text style={{fontSize: 13, color: '#fff'}}>编辑个人资料</Text>
            </TouchableOpacity>
          </View>
          <Text style={{marginTop: 10, fontSize: 16, color: '#fff'}}>
            {dataSource.name}
          </Text>
          <Text style={{marginTop: 8, fontSize: 16, color: '#fff'}}>
            {dataSource.zhiwei + '  ' + dataSource.nianxian + '年'}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 18}}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => {
                console.log('点击了被关注');
              }}>
              <Text style={{fontSize: 16, color: '#fff'}}>
                {dataSource.fensi}
              </Text>
              <Text style={{marginLeft: 5, fontSize: 16, color: '#fff'}}>
                被关注
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', marginLeft: 15}}
              onPress={() => {
                console.log('点击了关注');
              }}>
              <Text style={{fontSize: 16, color: '#fff'}}>
                {dataSource.guanzhu}
              </Text>
              <Text style={{marginLeft: 5, fontSize: 16, color: '#fff'}}>
                关注
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  };

  view1 = () => {
    const {currentSelect} = this.state;
    return (
      <View style={{backgroundColor: '#f5f5f5'}}>
        <View
          style={{
            height: 50,
            paddingLeft: 25,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderBottomColor: '#CCCCCC',
            borderBottomWidth: 1,
          }}>
          <TouchableOpacity
            style={{height: 49, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => {
              this.setState({
                currentSelect: 0,
              });
            }}>
            <Text
              style={{
                fontSize: 16,
                color: currentSelect === 1 ? '#333333' : '#000000',
              }}>
              个人信息
            </Text>
            {currentSelect === 0 && (
              <View
                style={{
                  height: 2,
                  width: 20,
                  backgroundColor: 'green',
                  position: 'absolute',
                  bottom: 2,
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 49,
              marginLeft: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.setState({
                currentSelect: 1,
              });
            }}>
            <Text
              style={{fontSize: 16, color: currentSelect === 0 && '#333333'}}>
              发布
            </Text>
            {currentSelect === 1 && (
              <View
                style={{
                  height: 2,
                  width: 20,
                  backgroundColor: 'green',
                  position: 'absolute',
                  bottom: 2,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            backgroundColor: '#fff',
          }}>
          <View style={{padding: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              个人信息完善度<Text style={{color: 'green'}}>89%</Text>
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 8}}>
              完善的蛀牙可让别人快速了解你
            </Text>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
              }}
              onPress={() => {
                console.log('去完善');
              }}>
              <Text style={{fontSize: 18, color: '#fff'}}>去完善</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  // 个人标签
  view2 = () => {
    const {dataSource} = this.state;
    return (
      <View>
        {this.headerView('个人标签', () => {
          console.log('添加标签');
        })}
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            backgroundColor: '#fff',
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#CCCCCC',
            marginHorizontal: 20,
          }}>
          {dataSource.labelData &&
            dataSource.labelData.map((item, index) => {
              return (
                <View
                  style={{
                    padding: 5,
                    backgroundColor: '#F6F6F6',
                    justifyContent: 'center',
                    marginRight: 8,
                    marginBottom: 10,
                    alignItems: 'center',
                  }}
                  key={index}>
                  <Text>{item}</Text>
                </View>
              );
            })}
        </View>
      </View>
    );
  };

  // 工作经历
  view3 = () => {
    const {dataSource} = this.state;
    return (
      <View>
        {this.headerView('工作经历', () => {
          console.log('添加工作经历');
        })}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#CCCCCC',
            marginHorizontal: 20,
          }}>
          {dataSource.workArr &&
            dataSource.workArr.map((it, ix) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  key={'view3' + ix}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{width: 60, height: 60, backgroundColor: 'red'}}
                    />
                    <View style={{marginLeft: 15}}>
                      <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                        {it.name}
                      </Text>
                      <Text style={{fontSize: 14, marginTop: 10}}>
                        {it.zhiwei}
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={{width: 20, height: 20, backgroundColor: 'red'}}
                  />
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    );
  };
  // 教育经历
  view4 = () => {
    const {dataSource} = this.state;
    return (
      <View>
        {this.headerView('教育经历', () => {
          console.log('添加教育经历');
        })}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#CCCCCC',
            marginHorizontal: 20,
          }}>
          {dataSource.jiaoyuArr &&
            dataSource.jiaoyuArr.map((it, ix) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  onPress={() => {
                    console.log('点击了教育经历');
                  }}
                  key={'view4' + ix}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{width: 60, height: 60, backgroundColor: 'red'}}
                    />
                    <View style={{marginLeft: 15}}>
                      <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                        {it.school}
                      </Text>
                      <Text style={{fontSize: 14, marginTop: 10}}>
                        {it.zhuanye}
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={{width: 20, height: 20, backgroundColor: 'red'}}
                  />
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    );
  };

  view5 = () => {
    return (
      <View>
        {this.headerView('读书')}
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            borderBottomColor: '#CCCCCC',
          }}>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                添加读过的书<Text style={{color: 'green'}}>89%</Text>
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 8}}>
                展现你的内涵
              </Text>
              <TouchableOpacity
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: 'green',
                  marginTop: 15,
                }}
                onPress={() => {
                  console.log('添加书');
                }}>
                <Image style={{flex: 1, backgroundColor: 'red'}} />
              </TouchableOpacity>
            </View>
            <Image style={{height: 100, width: 100, backgroundColor: 'red'}} />
          </View>
        </View>
      </View>
    );
  };
  // 常用工具
  view5 = () => {
    const {dataSource} = this.state;
    return (
      <View>
        {this.headerView('常用工具')}
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            backgroundColor: '#fff',
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#CCCCCC',
            marginHorizontal: 20,
          }}>
          {dataSource.changyonggongjuArr &&
            dataSource.changyonggongjuArr.map((it, ix) => {
              return (
                <TouchableOpacity
                  style={{marginRight: 40, marginBottom: 10}}
                  onPress={() => {
                    console.log(`点击了常用工具第${ix}个`);
                  }}
                  key={'view5' + ix}>
                  <Image
                    style={{width: 50, height: 50, backgroundColor: 'red'}}
                  />
                  <Text style={{marginTop: 10}}>{it}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    );
  };
  // 常逛平台
  view6 = () => {
    const {dataSource} = this.state;
    return (
      <View>
        {this.headerView('常用工具')}
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            backgroundColor: '#fff',
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#CCCCCC',
            marginHorizontal: 20,
          }}>
          {dataSource.changguangpingtaiArr &&
            dataSource.changguangpingtaiArr.map((it, ix) => {
              return (
                <TouchableOpacity
                  style={{marginRight: 40, marginBottom: 10}}
                  onPress={() => {
                    console.log(`点击了常逛平台第${ix}个`);
                  }}
                  key={'view6' + ix}>
                  <Image
                    style={{width: 50, height: 50, backgroundColor: 'red'}}
                  />
                  <Text style={{marginTop: 10}}>{it}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    );
  };
  headerView = (title, rightBtnClick, iconSource) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          height: 80,
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Text style={{fontSize: 18}}>{title}</Text>
        <TouchableOpacity onPress={rightBtnClick}>
          <Image
            style={{width: 15, height: 15, backgroundColor: 'red'}}
            source={iconSource}
          />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <ScrollView>
          {this.topView()}
          {this.view1()}
          {this.view2()}
          {this.view3()}
          {this.view4()}
          {this.view5()}
          {this.view6()}
        </ScrollView>
      </View>
    );
  }
}

export default Me;
