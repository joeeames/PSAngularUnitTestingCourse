import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { HeroService } from './../hero.service';
import { ActivatedRoute } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { TestBed, ComponentFixture, fakeAsync, tick, flush, waitForAsync } from '@angular/core/testing';
import { Location } from '@angular/common';

describe('HeroDetailComponent', () => {

    let fixture: ComponentFixture<HeroDetailComponent>; 
    let mockActivatedRoute, mockHeroService, mockLocation;

    beforeEach(() => {
        mockActivatedRoute = {
            snapshot: { paramMap: { get: () => { return '3'; }} }
        }

        mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
        mockLocation = jasmine.createSpyObj(['black']);

        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [HeroDetailComponent],
            providers: [
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
                { provide: HeroService, useValue: mockHeroService },
                { provide: Location, useValue: mockLocation },
            ]
        })

        fixture = TestBed.createComponent(HeroDetailComponent);

        mockHeroService.getHero.and.returnValue(of({ id: 3, name: 'SuperDude', strength: 100 }));
    });

    it('should render hero name in a h2 tag', () => {
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
    })

    it('should call updateHero when save is called', (done) => {
        mockHeroService.updateHero.and.returnValue(of({}));
        fixture.detectChanges();

        fixture.componentInstance.save();

        setTimeout(() => {
            expect(mockHeroService.updateHero).toHaveBeenCalled();
            done();
        }, 300)
    });

    it('should call updateHero when save is called "tick()"', fakeAsync(() => {
        mockHeroService.updateHero.and.returnValue(of({}));
        fixture.detectChanges();

        fixture.componentInstance.save();
        tick(250)

        expect(mockHeroService.updateHero).toHaveBeenCalled();
    }));

    it('should call updateHero when save is called "flush()"', fakeAsync(() => {
        mockHeroService.updateHero.and.returnValue(of({}));
        fixture.detectChanges();

        fixture.componentInstance.save();
        flush()

        expect(mockHeroService.updateHero).toHaveBeenCalled();
    }));

    // it('should call updateHero when save is called "waitForAsync()"', waitForAsync(() => {
    //     mockHeroService.updateHero.and.returnValue(of({}));
    //     fixture.detectChanges();

    //     fixture.componentInstance.save();

    //     fixture.whenStable().then(() => {
    //         expect(mockHeroService.updateHero).toHaveBeenCalled();
    //     })
    // }));
})