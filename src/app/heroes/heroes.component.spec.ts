import { of } from 'rxjs';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;

  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 55 },
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHeroes', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
  })

  it('should remove the indicated hero from the heroes list', () => {
    mockHeroService.deleteHero.and.returnValue(of(true))
    component.heroes = HEROES;

    component.delete(HEROES[2])

    expect(component.heroes.length).toBe(2);
  })

  it('should call deleteHero', () => {
    mockHeroService.deleteHero.and.returnValue(of(true))
    component.heroes = HEROES;

    component.delete(HEROES[2])

    expect(mockHeroService.deleteHero).toHaveBeenCalled();
    expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
  })
})
