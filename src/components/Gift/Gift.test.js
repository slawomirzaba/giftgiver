import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('#Gift', () => {
    const id = 1;
    const mockRemove = jest.fn();
    const props = { gift: { id }, onRemoveGift: mockRemove };
    const gift = shallow(<Gift {...props} />);

    it('should correct render', () => {
        expect(gift).toMatchSnapshot();
    });

    it('should have correct initialise state', () => {
        const state = gift.state();
        expect(state).toEqual({ person: '', present: '' });
    });

    describe('when person input change', () => {
        const person = 'Michael';

        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: person } });
        });

        afterEach(() => {
            gift.setState({ person: '' });
        });

        it('should update person state', () => {
            const state = gift.state();

            expect(state.person).toEqual(person);
        });
    });

    describe('when present input change', () => {
        const present = 'bicycle';

        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: present } });
        });

        afterEach(() => {
            gift.setState({ present: '' });
        });

        it('should update person state', () => {
            const state = gift.state();

            expect(state.present).toEqual(present);
        });
    });

    describe('when remove button clicked', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        })

        it('function to remove gift should be called', () => {
            expect(mockRemove).toBeCalledWith(id)
        });
    })
});