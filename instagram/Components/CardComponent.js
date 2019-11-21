import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-natvie';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

class CardComponent extends Component{
    render(){
        const images = {
            '1': require('../assets/cat.jpg'),
        }
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/cat.jpg')} />
                        <Body>
                            <Text>cats are wonderful</Text>
                            <Text note>2019.11.06</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Image source={images[this.props.imageSource]} style={{height:200, width:null, flex:1}}/>
                </CardItem>
                <CardItem style={{height:45}}> 
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart' style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-chatbubbles' style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-send' style={{color:'black'}}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{height:40}}>
                    <Text>Like 100 {this.props.likes}</Text>
                </CardItem>
                <CardItem>
                    <Text>
                        <Text style={{fontWeight:'900'}}> Cats </Text>
                        #Instagram #Cat #LikeLion
                        </Text>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})