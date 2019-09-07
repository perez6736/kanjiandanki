import React from 'react';

class KanjiInput extends React.Component {

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onClick = () => {
        //this blows up when japaneseText is empty
        this.props.CreateKanjiOnlyArray(this.state.japaneseText)

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