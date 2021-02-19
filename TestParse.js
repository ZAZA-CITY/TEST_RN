
// ES6 Minimized
const Parse = require('parse/react-native.js');
Parse.initialize("4CqI88sgCyhVozqeNldH7bfrNx3mUxXxf2SRnHjZ", "ln3sCP4oWq8E1TvWPHVRvBbM5VMlUbF1XkxIxZvK");
Parse.serverURL = 'https://parseapi.back4app.com/'
//javascriptKey is required only if you have it on server.
import AsyncStorage from '@react-native-community/async-storage';


Parse.setAsyncStorage(AsyncStorage);


function saveParse(){
  const GameScore = Parse.Object.extend("GameScore");
  const gameScore = new GameScore();
  
  gameScore.set("score", 123321);
  gameScore.set("playerName", "deng Plott");
  gameScore.set("cheatMode", false);
  
  gameScore.save()
  .then((gameScore) => {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  }, (error) => {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('22Failed to create new object, with error code: ' + error.message);
  });
}