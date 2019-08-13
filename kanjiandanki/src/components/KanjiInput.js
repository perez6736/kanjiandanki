import React from 'react';

class KanjiInput extends React.Component {
    state = {
        japneseText: 'Enter Japanese text',
        kanjiInText: ''
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    //lets create a function that checks if a kanji character exists in the japaneseText state
    isKanji = ch => {
        return (ch >= "\u4e00" && ch <= "\u9faf") || (ch >= "\u3400" && ch <= "\u4dbf") || ch === "𠮟";
    }

    // when button is click we will go through each character and check if it is a kanji character or not. 
    click = () => {
        if(this.isKanji(this.state.japneseText)){
            console.log("there was kanji! on click");
            // then we will want to add those  kanjis to an array and eventually pass that to the kanji output component. 
        }
        else{
            console.log("no kanji :(")
        }
    }

    render() {
        return(
            <form>
                <textarea 
                name="japneseText"
                placeholder='Japanese text' 
                value={this.state.japneseText} 
                onChange={e => this.change(e)}
                />
                <button 
                type="button"
                onClick={ this.click }>
                    Find most common Kanji 
                </button>
            </form>
        );
    }
}

export default KanjiInput; 