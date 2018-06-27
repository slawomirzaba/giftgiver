import React from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift/Gift';
import { maxNumber } from '../helpers/index';

class App extends React.Component {
    constructor() {
        super();
        this.state = { gifts: [] };
    }

    getMaxId = () => {
        const { gifts } = this.state;
        const ids = gifts.map(gift => gift.id);
        const maxId = maxNumber(ids)
        return maxId;
    }

    removeGift = (id) => {
        const gifts = this.state.gifts.filter((gift) => gift.id !== id);

        this.setState({ gifts });
    }

    addGift = () => {
        const newId = this.getMaxId() + 1;

        this.setState((prevState) => {
            return {
                gifts: [...prevState.gifts, { id: newId }]
            }
        });
    }

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className='gifts-list'>
                    {
                        this.state.gifts.map(gift => {
                            return <Gift
                                gift={gift}
                                onRemoveGift={this.removeGift}
                                key={gift.id} />
                        })
                    }
                </div>
                <Button
                    className='btn-add'
                    onClick={this.addGift}>Add gift</Button>
            </div>
        );
    }
}

export default App;
