import Chance from 'chance';
import {expect} from 'code';
import {mockReduxStore} from '../../src';

const chance = new Chance();

describe('Given the mock Redux store', () => {

    describe('when using `getState()`', () => {

        it('should return the root state if an argument is passed', () => {

            const expectedRootState = Object.freeze({
                [chance.hash()]: chance.string()
            });

            const store = mockReduxStore(expectedRootState);

            expect(store.getState()).equal(expectedRootState);

        });

        it('should throw an error if an argument is not passed', () => {

            const store = mockReduxStore();

            const expectedMessage = 'You need to pass an initial state object.';

            try {

                store.getState();

            } catch (error) {

                expect(error).instanceOf(Error);
                expect(error.message).equal(expectedMessage);

            }

        });

    });

    describe('when using `dispatch()`', () => {

        it('should return an empty object', () => {

            const store = mockReduxStore();

            expect(store.dispatch()).equal({});

        });

    });

    describe('when using `subscribe()`', () => {

        it('should be a noop function', () => {

            const store = mockReduxStore();

            expect(store.subscribe()).undefined();

        });

    });

});

