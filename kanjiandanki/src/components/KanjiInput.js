import React from 'react';

export class KanjiInput extends React.Component {
    constructor(props) {
        super();
        this.japaneseText = props.japaneseText;
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onClick = () => {
        //this blows up when japaneseText is empty
        console.log("click");
        console.log(this.props.japaneseText);
        if(this.props.japaneseText != null || "") {
            this.props.CreateKanjiOnlyArra(this.props.japaneseText)
        }

    }

    render() {
        return(
            <form>
                <textarea 
                name="japaneseText"
                placeholder='Japanese text' 
                onChange={e => this.change(e)}
                />
                <button 
                type="button"
                    onClick={ this.onClick }
                >
                    Find most common Kanji 
                </button>
            </form>
        );
    }
}

export default KanjiInput; 