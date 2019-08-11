import React from 'react';
import Button from 'react-bootstrap/Button';

class KanjiInput extends React.Component {
    state = {
        japneseText: 'Enter Japanese text'
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    click = () => {
        console.log("button was clicked");
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