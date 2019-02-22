import { Hero } from "../hero";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { of } from "rxjs";


describe('HeroesComponent',()=>{

    let component:HeroesComponent;
    let HEROS:Hero[]=[];
    let mockHeroService ;

    beforeEach(()=>{
        
        /*HEROS=[{
            id:1,name:'hero1',strength:5
        },{
            id:2,name:'hero2',strength:10
        },{
            id:3,name:'hero3',strength:20
        }]*/

        let h1:Hero = new Hero();
        h1.id = 1;
        h1.name  ='hero1';
        h1.strength = 5;
        HEROS.push(h1);

        let h2:Hero = new Hero();
        h2.id = 2;
        h2.name  ='hero2';
        h2.strength = 10;
        HEROS.push(h2);

        let h3:Hero = new Hero();
        h3.id = 3;
        h3.name  ='hero3';
        h3.strength = 15;
        HEROS.push(h3);

        mockHeroService = jasmine.createSpyObj(['getHeroes','addHero','deleteHero'])
       
    })

    describe('deleteHero()',()=>{
        it('should delete an existing hero',()=>{
            //Arrange
            mockHeroService.deleteHero.and.returnValue(of(true));
            component = new HeroesComponent(mockHeroService);
            component.heroes = HEROS;
    
            //Act
            component.delete(HEROS[2]);
           
            //Assert
            expect(component.heroes.length).toBe(2);
         });

        it('should call HeroService.deleteHero() method',()=>{
            //Arrange
            mockHeroService.deleteHero.and.returnValue(of(true));
            component = new HeroesComponent(mockHeroService);
            component.heroes = HEROS;

            //Act
            component.delete(HEROS[2]);
        
            //Assert - check if the method is called
            expect(mockHeroService.deleteHero).toHaveBeenCalled();

            //Assert - check if the method is called with correct param
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROS[2]);
        });
    })

   

});