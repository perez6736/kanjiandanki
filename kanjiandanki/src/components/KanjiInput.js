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
    lookForKanji = (text) => {
        //this is prob the most inefficient way to do this... once it causes problems i will optomize... also i am noob programmer. 
        // unicode for kanji characters are \u4e00-\u9faf - more common kanji   \u3400-\u4dbf this is for rare 
        for(let i=0; i++; i<text.length){
            console.log("for loop starts");
            console.log(text.charAt(i));
            if(text.charAt(i) >= "\u4e00" && text.charAt(i) <= "\u9faf" || text.charAt(i) >= "\u3400" && text.charAt(i) <= "\u4dbf"){
                console.log("there was kanji inside function");
                return true;
            }
        }
    }

    // when button is click we will go through each character and check if it is a kanji character or not. 
    click = () => {
        if(this.lookForKanji(this.state.japneseText)){
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