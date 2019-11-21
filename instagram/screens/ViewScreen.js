import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import ViewHeader from '../components/ViewHeader'

const {width,height} = Dimensions.get('window');

export default viewScreen = (props) => {
    
    const post = props.navigation.getParam('post');
}

return (
    <SafeAreaView>
        <View style = {styles.contentContainer}>
            <ViewHeader
                postId = {post.id}
                deletePost={() => {props.screenProps.deletePost(post.id)}}
                style = {styles.viewHeader}/>
            {post?
                <View>
                <View style = {styles.emptyBox}/>
                <Text style = {styles.title}>{post.title}</Text>
                <View style = {styles.emptyBox}/>
                <Text style = {styles.content}>{post.content}</Text>
                {post.image?<Image source={{uri:post.image}} style = {{width:200, height: 200}}/>:null}
                </View>
            :null}
        </View>
    </SafeAreaView>
);

state = {
    inputTItle:'',
    inputContent:'',
    selectedDate:'',
    Posts:[{
        id:'abcd-efg1',
        title:'11월 21일에 쓴 글',
        content:'입니당',
        date: '20191121',
        image:'',
    },{
        id:'qwerty',
        title:'11월 22일에 쓴 글',
        content:'입니당~',
        date:'20191122',
        image:'',}]
}


export default EditScreen = () => {
    _changeTitle = (value) => {
        this.ListeningStateChangedEvent({
            inputTitle: value
        });
    }

    _changeContent = (value) => {
        this.ListeningStateChangedEvent({
            inputContent: value
        })
    }
    return (
        <SafeAreaView>
            <Text>ViewScreen</Text>
        </SafeAreaView>
    )
}