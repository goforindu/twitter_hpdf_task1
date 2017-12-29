import React, { Component } from 'react';
import { Container, Header, Content, Button, Card, CardItem, List, ListItem, Text, Left, Right, Icon, Thumbnail, Body } from 'native-base';
import {  View } from 'react-native';
export default class Temp extends Component {
  render() {
    return (
      <Container>
        <Header style={{display:'none'}}/>
        <Content style={{marginTop:20, marginRight:50}}>
          <Card>
          <CardItem>
          <View style={{flex: 1, flexDirection: 'column'}}>
           <View>
             <Thumbnail source={require('../img/indu.jpg')} />

             </View>
            <View>
             <View style={{flex: 1, flexDirection: 'column'}}>
             <View style={{flex: 1, flexDirection: 'row'}}>
             <View>
             <Text style={{fontSize: 20, fontWeight:'bold'}}>Indu Kushwaha</Text>
             <Text note>goforindu@gmail.com</Text>
             </View>
             <View style={{paddingLeft:120}}>
               <Icon active name="ios-arrow-down" style={{color:'#2AA1C3', fontSize:17}} />
             </View>
             </View>
             <View style={{flex: 1, flexDirection: 'row', paddingTop:10}}>
             <View>
             <Text style={{fontSize:15}}>690<Text note> Following</Text></Text>
             </View>
             <View>
             <Text style={{fontSize:15}}>653 <Text note>Followers</Text></Text>
             </View>
             </View>
             </View>
             </View>
             </View>
         </CardItem>
         <View
            style={{
              borderBottomColor: '#DCDDDE',
              borderBottomWidth: 1,
            }}
          />
          <View style={{flex: 1, flexDirection: 'row', padding:15}}>
          <View>
          <Icon style={{fontSize: 28, color:'grey'}} name="person" />
          </View>
          <View style={{paddingLeft:20, paddingTop:5}}>
          <Text>Profile</Text>
          </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', padding:15}}>
          <View>
          <Icon style={{fontSize: 28, color:'grey'}} name="list-box" />
          </View>
          <View style={{paddingLeft:20, paddingTop:5}}>
          <Text>Lists</Text>
          </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', padding:15}}>
          <View>
          <Icon style={{fontSize: 28, color:'grey'}} name="cloud" />
          </View>
          <View style={{paddingLeft:20, paddingTop:5}}>
          <Text>Moments</Text>
          </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', padding:15}}>
          <View>
          <Icon style={{fontSize: 28, color:'grey'}} name="copy" />
          </View>
          <View style={{paddingLeft:20, paddingTop:5}}>
          <Text>Highlights</Text>
          </View>
          </View>

          <View
             style={{
               borderBottomColor: '#DCDDDE',
               borderBottomWidth: 1,
             }}
           />
           <Text style={{ fontSize: 17, paddingTop: 40, paddingBottom: 35 }}> Settings and privacy </Text>
           <Text style={{ fontSize: 17, paddingBottom: 35 }}> Help center </Text>
            <CardItem footer>
            <View>
            <Icon vertical name="ios-moon-outline" style={{fontSize: 28, color:'#2AA1C3'}}/>
            </View>
            <View style={{paddingLeft:220}}>
              <Icon vertical name="ios-qr-scanner" style={{fontSize: 28, color:'#2AA1C3'}}/>
            </View>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
