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
    }

    CreateKanjiOnlyArray = arrayOfText => {
        for(let i=0; i<arrayOfText.length; i++){
            if(this.isKanji){
                //put it in a new array so we can start using that. 
                japaneseTextOnlyKanji.push(i); 
            }
        }
    }

    render() {
        return (
            <div>
                <KanjiInput
                    japaneseText = {this.state.japaneseText}
                    isKanji = {this.isKanji}
                    tallyUpElements = {this.tallyUpElements}
                    createDictionaryOfCountedKanji = {this.createDictionaryOfCountedKanji}
                    CreateKanjiOnlyArray = {this.CreateKanjiOnlyArray}
                    japaneseTextOnlyKanji = {this.japaneseTextOnlyKanji}
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