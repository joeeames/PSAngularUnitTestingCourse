import { TestBed } from "@angular/core/testing";
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";

describe('HeroService', () => {
    let mockMessageService;
    let httpTestingController: HttpTestingController;
    let service: HeroService;

    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj(['add']);

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                HeroService,
                { provide: MessageService, useValue: mockMessageService }
            ]
        });
        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(HeroService);
    });

    describe('getHero', () => {
        it('should call get with the correct URL', () => {
            service.getHero(4).subscribe();
            //service.getHero(3).subscribe();

            const req = httpTestingController.expectOne('api/heroes/4');
            req.flush({ id: 4, name: 'SuperDude', strength: 100 });

            httpTestingController.verify();
        });
    });
});