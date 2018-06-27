import { maxNumber } from './index';

describe('#index', () => {
    describe('maxNumber', () => {
        it('should return 0 if array is empty', () => {
            expect(maxNumber([])).toEqual(0)
        });

        it('should return max number', () => {
            expect(maxNumber([1,3,6,2])).toEqual(6)
        });
    });
})