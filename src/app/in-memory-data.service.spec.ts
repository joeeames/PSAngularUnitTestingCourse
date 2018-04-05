import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  describe('createDb', () => {
    it('should return a collection of hero objects', () => {
      const service = new InMemoryDataService();
      const db = service.createDb();
      db.heroes.forEach((hero) => {
        expect(hero).toBeAHero();
      });
    });
  });
});
