import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon, Button, Text, Footer, FooterTab, Right } from 'native-base';
export default class Search extends Component {
  render() {
    return (
      <Container>
        <Header searchBar>
          <Item style={{ backgroundColor: 'white', height:40}}>
            <Icon name="md-arrow-back" style={{color:'#2AA1C3'}}/>
            <Input placeholder="Search Twitter" />
          </Item>
        </Header>
        <Content style={{backgroundColor:'#C3DBE3'}}/>
        <Footer style={{ backgroundColor: 'white'}}>
         <FooterTab>
           <Button vertical>
             <Text style={{color:'#2AA1C3'}}>All</Text>
           </Button>
           <Button vertical>
             <Text>Mentions</Text>
           </Button>
           <Right>
             <Icon  name="ios-settings" style={{color:'#2AA1C3', marginRight:10}}/>
           </Right>
         </FooterTab>
       </Footer>
      </Container>
    );
  }
}
