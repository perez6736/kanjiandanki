import React from 'react';
import Button from 'react-bootstrap/Button';

class KanjiOutput extends React.Component {
    state = {
        Kanji: [],
    };

    render() {
        return(
            <form>
                <textarea 
                name="ExistingKanji"
                placeholder='ExistingKanji' 
                value={this.state.Kanji} 
                />
            </form>
        );
    }
}

export default KanjiOutput; 