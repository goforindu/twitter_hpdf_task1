import React, { Component } from 'react';
import { Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body, Title } from 'native-base';

export default class Timeline extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'white', paddingTop:10}}>
        <Left>
        <Thumbnail source={require('../img/indu.jpg')}  style={{borderRadius:30}}/>
        </Left>
        <Body>
          <Title>Home</Title>
        </Body>
        <Right />
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/profile_anush.jpg')} />
                <Text>Anushka Sharma</Text>
                </Left>
                <Right><Icon name='arrow-down' /></Right>
            </CardItem>
            <CardItem>

              <Body><Text style={{alignSelf:'flex-end'}}>The people responsible for making the most memorable occasion of our lives peaceful and beyond beautiful 🙏 - our lovely wedding planners @ShaadiSquad</Text></Body>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../img/timeline_anushka.jpg')} style={{alignSelf:'flex-end', height: 200, width: 320, flex: 1}}/>
              </Body>
            </CardItem>
            <CardItem style={{justifyContent: 'flex-end'}}>
              <Button small iconLeft transparent>
                <Icon  style={{ color: '#a6a6a6'}} name="text" />
                <Text style={{ color: '#a6a6a6'}}>4.1k  </Text>
              </Button>

              <Button small iconLeft transparent>
               <Icon style={{fontSize:30, color: '#a6a6a6'}} name='text' />
               <Text style={{ color: '#a6a6a6'}} >5.7k  </Text>
             </Button>

              <Button small iconLeft transparent>
                <Icon style={{fontSize:25, color: '#a6a6a6'}} name='ios-heart' />
                <Text style={{ color: '#a6a6a6'}}>78k  </Text>
              </Button>

              <Button default small transparent>
                <Icon style={{ color: '#a6a6a6'}} name="mail" />
                </Button>
</CardItem>
<CardItem>
  <Left>
    <Thumbnail source={require('../img/salman_profile.jpg')} />
    <Text>Salman Khan</Text>
    </Left>
    <Right><Icon name='arrow-down' /></Right>
</CardItem>
<CardItem>

  <Body><Text style={{alignSelf:'flex-end'}}>Yeh saare rockstars ko thank you. Always accha kaam karte raho, Negativity ko kick aur positivity ko hug karo. Have the best end to this year, Enjoy Tiger, Merry Christmas and a Happy New Year.</Text></Body>
</CardItem>
<CardItem>
  <Body>
    <Image source={require('../img/timeline_salman.jpeg')} style={{alignSelf:'flex-end', height: 200, width: 320, flex: 1}}/>
  </Body>
</CardItem>
<CardItem style={{justifyContent: 'flex-end'}}>
  <Button small iconLeft transparent>
    <Icon  style={{ color: '#a6a6a6'}} name="text" />
    <Text style={{ color: '#a6a6a6'}}>4.2k</Text>
  </Button>

  <Button small iconLeft transparent>
   <Icon style={{fontSize:30, color: '#a6a6a6'}} name='text' />
   <Text style={{ color: '#a6a6a6'}} >6.4k</Text>
 </Button>

  <Button small iconLeft transparent>
    <Icon style={{fontSize:25, color: '#a6a6a6'}} name='ios-heart' />
    <Text style={{ color: '#a6a6a6'}}>69k</Text>
  </Button>

  <Button default small transparent>
    <Icon style={{ color: '#a6a6a6'}} name="mail" />
    </Button>
</CardItem>
<CardItem>
  <Left>
    <Thumbnail source={require('../img/deepika_profile.jpg')} />
    <Text>Deepika padukone</Text>
    </Left>
    <Right><Icon name='arrow-down' /></Right>
</CardItem>
<CardItem>

  <Body><Text style={{alignSelf:'flex-end'}}>announcing my favourite #DoTheGhoomar entry tomorrow!!!👏🏽 👏🏽👏🏽have you shared your video yet? @Filmpadmavati</Text></Body>
</CardItem>
<CardItem>
  <Body>
    <Image source={require('../img/timeline_deepika.jpeg')} style={{alignSelf:'flex-end', height: 200, width: 320, flex: 1}}/>
  </Body>
</CardItem>
<CardItem style={{justifyContent: 'flex-end'}}>
  <Button small iconLeft transparent>
    <Icon  style={{ color: '#a6a6a6'}} name="text" />
    <Text style={{ color: '#a6a6a6'}}>948 </Text>
  </Button>

  <Button small iconLeft transparent>
   <Icon style={{fontSize:30, color: '#a6a6a6'}} name='text' />
   <Text style={{ color: '#a6a6a6'}} >1.0k </Text>
 </Button>

  <Button small iconLeft transparent>
    <Icon style={{fontSize:25, color: '#a6a6a6'}} name='ios-heart' />
    <Text style={{ color: '#a6a6a6'}}>13k</Text>
  </Button>

  <Button default small transparent>
    <Icon style={{ color: '#a6a6a6'}} name="mail" />
    </Button>
</CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
