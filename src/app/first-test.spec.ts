
//Jasmine method describe
describe('myfirstTest',()=>{

    //System under Test variable
    let sut;

    beforeEach(()=>{
        sut={};
    }
    )

    it('should be true if true',()=>{

        //DRY - DONT REPEAT YOURSELF - DO not repoeat code in your application
        //DAMP - Follow DRY with will repeat ourselves if necessary

        //AAA stategy 
        //arrange all necessary preconditions before the test.
        sut.a = false;

        //act
        sut.a = true;

        //assert
        //jasmine method:expect
        //jasmine has methods called matchers like toBe
        expect(sut.a).toBe(true);
    })

})