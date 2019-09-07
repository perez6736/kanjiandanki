import React, {Component} from 'react';
import KanjiInput from './KanjiInput';

class App extends Component {

    state = {
        japaneseText: 'default text',
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
        let count = arrayOfText.reduce(this.tallyUpElements(), {})
        return count; 
    }

    CreateKanjiOnlyArray = arrayOfText => {
        let KanjiArray = [];

        for(let i=0; i<arrayOfText.length; i++){
            if(this.isKanji(arrayOfText[i])){
                console.log("true this should be two")
                //put it in a new array so we can start using that. 
                KanjiArray.push(arrayOfText[i]); 
            }
        }
        this.setState({japaneseTextOnlyKanji: KanjiArray})
    }

    render() {
        return (
            <div>
                <KanjiInput
                    japaneseText = {this.japaneseText}
                    CreateKanjiOnlyArray = {this.CreateKanjiOnlyArray}
                />
            </div> 
        );
    }
}

export default App;