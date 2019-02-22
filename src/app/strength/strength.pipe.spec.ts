import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe',()=>{

    it('should display weak if strength is 5',()=>{
        //Arrange
        let pipe = new StrengthPipe();

        //Act
        let val = pipe.transform(5);

        //Assert
        expect(val).toBe('5 (weak)');

    })
});