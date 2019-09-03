import React, {Component} from 'react';
import KanjiInput from './KanjiInput';

class App extends Component {

    state = {
        japaneseText: 'Enter Japanese text',
        japaneseTextOnlyKanji: [],
        kanjiInText: ''
    };

    //lets create a function that checks if a kanji character exists in the japaneseText state
    isKanji = ch => {
        console.log("iskanji being called");
        return (ch >= "\u4e00" && ch <= "\u9faf") || (ch >= "\u3400" && ch <= "\u4dbf") || ch === "𠮟";
    }

    tallyUpElements = (obj, word) => {
      if(!obj[word]){
        obj[word] = 0;
      }
      obj[word] ++;
      return obj;
    }

    createDictionaryOfCountedKanji = arrayOfText => {
        let count = arrayOfText.reduce(this.tallyUpElements, {})
        return count; 
    }
    // i need to bind some functions and do some of that magic. 
    CreateKanjiOnlyArray = arrayOfText => {
        console.log("CreateKanjiOnlyArray function is called")
        let KanjiArray = [];
        for(let i=0; i<arrayOfText.length; i++){
            if(this.isKanji){
                //put it in a new array so we can start using that. 
                KanjiArray.push(i); 
            }
        }
        console.log(KanjiArray);
        this.setState({japaneseTextOnlyKanji: KanjiArray})
    }

    render() {
        return (
            <div>
                <KanjiInput
                    CreateKanjiOnlyArray = {this.CreateKanjiOnlyArray}
                    isKanji = {this.isKanji}
                />
            </div> 
        );
    }
}

export default App;


/*
this is  similiar to what i need to sum up kanji and count. 
   const arrayname = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    
    var count = arrayname.reduce(tallyUpElements, {})
    function tallyUpElements (obj, word){
      if(!obj[word]){
        obj[word] = 0;
      }
      obj[word] ++;
      return obj;
    }
    console.log(count);
*/