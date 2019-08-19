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
