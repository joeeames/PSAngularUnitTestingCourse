import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';
describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    const mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'SpiderDude', stength: '8'},
            {id: 2, name: 'Wonderful Woman', stength: '24'},
            {id: 3, name: 'SuperDude', stength: '55'}
        ];

        component = new HeroesComponent(mockHeroService);
    });

    describe('delete', () => {

        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);
            // The test below only checks if the the length of the heroes array was reduced by one
            // However it does not check if the requested hero was actually deleted. Write a test to fix this.
            expect(component.heroes.length).toBe(2);
        });

        it('should call delete hero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);

            // Write a test to check that the deleteHero observable was subscribed to
        });
    });
});
