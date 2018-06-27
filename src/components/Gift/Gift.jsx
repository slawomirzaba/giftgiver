import React from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'

class Gift extends React.Component {
    constructor(props) {
        super(props);
        this.state = { person: '', present: '' };
    }
    render() {
        return (
            <div className='gift'>
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl
                            className='input-person'
                            onChange={(event) => this.setState({ person: event.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Present</ControlLabel>
                        <FormControl
                            className='input-present'
                            onChange={(event) => this.setState({ present: event.target.value })} />
                    </FormGroup>
                </Form>
                <Button
                    className='btn-remove'
                    onClick={() => { this.props.onRemoveGift(this.props.gift.id) }}>
                    Remove Gift
                </Button>
            </div>
        );
    }
}

export default Gift;