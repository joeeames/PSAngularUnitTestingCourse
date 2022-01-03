import { HeroComponent } from './../hero/hero.component';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { ComponentFixture } from '@angular/core/testing';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { By } from '@angular/platform-browser';

describe('HeroesComponent (deep tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 55 },
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    TestBed.configureTestingModule({
      declarations: [HeroesComponent, HeroComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeroesComponent);
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    // run ngOnInit
    fixture.detectChanges();
  });

  it('should render each hero as a HeroComponent', () => {

    const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));

    expect(heroComponentDEs.length).toEqual(3);

    for (let index = 0; index < heroComponentDEs.length; index++) {
      expect(heroComponentDEs[index].componentInstance.hero).toEqual(HEROES[index]);

    }

    // expect(heroComponentDEs[0].componentInstance.hero.name).toEqual('SpiderDude');
    // expect(heroComponentDEs[1].componentInstance.hero.name).toEqual('Wonderful Woman');
    // expect(heroComponentDEs[2].componentInstance.hero.name).toEqual('SuperDude');
  })

})
