import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { NO_ERRORS_SCHEMA, Input, Component } from "@angular/core";
import { of } from "rxjs";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";

describe('HeroesComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    @Component({
        selector: 'app-hero',
        template: '<div></div>'
    })
    class FakeHeroComponent {
        @Input() hero: Hero;
    }

    beforeEach(() => {
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                FakeHeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ]
            //schemas: [NO_ERRORS_SCHEMA]
        });
        
        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('heroes should be empty before calling getHeroes', () => {
        HEROES = [];
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(0);
    });

    it('should set heroes correctly from the service', () => {
        HEROES = [
            { id: 1, name: 'Spider Dude', strength: 8 },
            { id: 2, name: 'Wonder Woman', strength: 12 },
            { id: 3, name: 'Super Dude', strength: 15 }
        ];

        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
    });

    it('should create one li for each hero', () => {
        HEROES = [
            { id: 1, name: 'Spider Dude', strength: 8 },
            { id: 2, name: 'Wonder Woman', strength: 12 },
            { id: 3, name: 'Super Dude', strength: 15 }
        ];

        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    });
});