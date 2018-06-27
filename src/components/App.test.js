import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';



describe('#App', () => {
    const app = shallow(<App />);

    it('should correctly render', () => {
        expect(app).toMatchSnapshot();
    });

    it('should render app with empty array gifts on init', () => {
        const state = app.state()

        expect(state.gifts).toEqual([]);
    });

    describe('when click add gift button', () => {
        const id = 1;

        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            app.setState({ gifts: [] });
        })

        it('should add gift', () => {
            const state = app.state()

            expect(state.gifts).toEqual([{ id }]);
        });

        it('should display gifts list with one item', () => {
            const giftsListChildren = app.find('.gifts-list').children();

            expect(giftsListChildren).toHaveLength(1);
        });

        it('should create Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        })

        describe('and then user want to remove added gift', () => {
            it('removeGift should remove element from gifts in state', () => {
                app.instance().removeGift(id);

                expect(app.state().gifts).toHaveLength(0);
            })
        });
    })
})



