function initParse(){
    const Parse = require('parse/react-native.js');
    Parse.initialize("4CqI88sgCyhVozqeNldH7bfrNx3mUxXxf2SRnHjZ", "ln3sCP4oWq8E1TvWPHVRvBbM5VMlUbF1XkxIxZvK");
    Parse.serverURL = 'https://parseapi.back4app.com/'
}


export default initParse ;