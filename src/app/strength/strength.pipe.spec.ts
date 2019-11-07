import { StrengthPipe } from './strength.pipe';
describe('StrengthPipe', () => {
    it('should display weak if strength is 5', () => {
        const pipe = new StrengthPipe();

        // act
        expect(pipe.transform(5)).toEqual('5 (weak)');
    });

    it('should display strong if strenth is 10', () => {
        const pipe = new StrengthPipe();

        // act
        expect(pipe.transform(10)).toEqual('10 (strong)');
    });
});
