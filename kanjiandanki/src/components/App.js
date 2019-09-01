import React, {Component} from 'react';
import KanjiInput from './KanjiInput';

class App extends Component {

    state = {
        japaneseText: 'Enter Japanese text',
        kanjiInText: ''
    };

    //lets create a function that checks if a kanji character exists in the japaneseText state
    isKanji = ch => {
        return (ch >= "\u4e00" && ch <= "\u9faf") || (ch >= "\u3400" && ch <= "\u4dbf") || ch === "𠮟";
    }

    render() {
        return (
            <div>
                <KanjiInput
                    japaneseText = {this.state.japaneseText}
                    isKanji = {this.isKanji}
                />
            </div> 
        );
    }
}

export default App;


/*
this is  similiar to what i need to sum up kanji and count. 
   const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    console.log("exercise 8");
    var count = data.reduce(tallyUpElements, {})
    function tallyUpElements (obj, word){
      if(!obj[word]){
        obj[word] = 0;
      }
      obj[word] ++;
      return obj;
    }
    console.log(count);
*/