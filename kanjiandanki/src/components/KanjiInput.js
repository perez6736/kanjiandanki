import React from 'react';

class KanjiInput extends React.Component {

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onClick = () => {
        
    }

    render() {
        return(
            <form>
                <textarea 
                name="japneseText"
                placeholder='Japanese text' 
                onChange={e => this.change(e)}
                />
                <button 
                type="button"
                //onClick={ this.click }
                >
                    Find most common Kanji 
                </button>
            </form>
        );
    }
}

export default KanjiInput; 