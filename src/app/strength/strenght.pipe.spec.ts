import { StrengthPipe } from "./strength.pipe";

describe('StrghtPipe', () => {
    it('should displau weak if strenght is 5', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(5)).toEqual('5 (weak)');
    })

    it('should displau strong if strenght is 10', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(10)).toEqual('10 (strong)');
    })
    
    it('should display unbelievable if strenght is 25', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(25)).toEqual('25 (unbelievable)');
    })
})