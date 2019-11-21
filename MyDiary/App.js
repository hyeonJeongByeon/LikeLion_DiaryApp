import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Navigation from './Navigator'
import { Ionicons } from '@expo/vector-icons';
import uuid from 'uuid/v4';
import AppNavigator from './navigation/AppNavigator';
import {Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

export default class App extends React.Component {
  
  state = {
    Posts:[{
      id: 'cat',
      title: 'Nov.14th Diary',
      content: 'Cold,,,',
      date: '20191114',
      image: '',
    }]
  }

  render() {
    return (
      <Navigation
      screenProps={{
        Posts: this.state.Posts,
      }}/>
    );
  }
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({

  listContainer: {
    marginLeft: 25,
  },
  title:{
    fontSize: 17,
    color: "#3b3b3b",
    fontWeight: "600",
  },
  content:{
    fontSize:13,
    paddingTop: 5,
    color: "gray"
  },
  itemContainer: {
    flex: 1,
    width: width-60,
    paddingTop: 10,
    PaddingLeft:10,
    marginBottom:20,
    borderColor: "#7a7171",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth:7,
  }

});

componentDidMount(){
  const today = this._getToday();
  AsyncStorage.getItem('@diary:state')
  .then((state) => {
    if(state!=null){
      this.setState(JSON.parse(state));
    }
  }).then(() => {
    this.setState({
      selectedData: today
    })
  });
}

saveData = () => {
  AsyncStorage.setItem('@diary:state', JSON.stringfly(this.state));
}

_addPost = () => {
  let id = uuid();
  const today = this._getToday();
  const prevPosts = [...this.state.Posts];
  const newPost = {
    id: id,
    title: this.state.inputTitle,
    content: this.state.inputContent,
    date: today,
    image: this.state.imageUrl
  }
  this.setState({
    inputTitle: '',
    inputContent: '',
    selectedDate: today,
    imageUrl: '',
    Posts:prevPosts.concat(newPost),
  },this.saveData);
}

_deletePost = (id) => {
  const prevPosts = [...this.state.Posts];
  deleteIndex = prevPosts.findIndex((item) => {return item.id == id});
  _deletePost = prevPosts.splice(deleteIndex,1);
  this.setState({Posts:prevPosts});
}

_selectPicture = async() => {
  if(Platform.os == 'ios'){
    const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if(status !== 'granted'){
      alert('설정 > expo > 사진 읽기 및 쓰기 허용을 설정해주세요');
    }
  }
  const result = await ImagePicker.launchImageLibraryAsync({allowEditing:true, aspect: [1,1],});
  this.setState({imageUrl: result.url});
}

_addPost = () => {
  let id = uuid();
  const today = this._getToday();
  const prevPosts = [...this.state.Posts];
  const newPost = {
    id: id,
    title: this.state.inputTitle,
    content: this.state.inputContent,
    date: today,
    image: this.state.imageUrl
  }

  this.setState({
    inputTitle: '',
    inputContent: '',
    selectedDate: today,
    Posts: prevPosts.concat(newPost)
  });
}

_getToday = () => {
  let today = new Date();
  day = today.getDate().toString();
  month = (today.getMonth() + 1).toString();
  year = today.getFullYear().toString();

  if(month.length == 1) month = "0"+month;
  if(day.length == 1) day = "0"+day;

  return year+month+day;

}


_changeDate = (value) => {
  let year = value._i.year.toString();
  let month = value._i.day.toString();

  if(month.length == 1) month = "0"+month;
  if(day.length == 1) day = "0"+day;
  
  this.ListeningStateChangedEvent({
    selectDate: year + month+day
  });
}

render() {
  return (
    <Navigation
      screenProps = {{
        inputTitle: '',
        inputContent: '',
        Posts: this.state.Posts,
        selectedDate: this.state.selectedDate,
        chagneDate: this._changeDate,
        changeTitle: this._changeTitle,
        changeContent: this._changeContent,
        addPost: this._addPost,
        imageUrl: this.state.imageUrl,
        selectPicture: this._selectPicture,
        deletePost: this._deletePost
      }}/>
    );
}


