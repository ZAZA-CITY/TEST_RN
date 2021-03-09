function initParse(){
    const Parse = require('parse/react-native.js');
    Parse.initialize("UXxlfi92yyUkct7SmAVioB16wZ532jliXNxqRlbV", "3TaUuL1gBLfNRO6CSgoQaWP3ckRLuqWr1eF8RwPw");
    Parse.serverURL = 'https://parseapi.back4app.com/'
}


export default initParse ;