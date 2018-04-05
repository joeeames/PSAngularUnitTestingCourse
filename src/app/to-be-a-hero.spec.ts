beforeEach(() => {
  jasmine.addMatchers({
    toBeAHero: (util, customEqualityMatchers) => {
      return {
        compare: (actual, expected) => {
          return {
            // heroes are objects that have id, name and strength properties
            pass: actual && actual.id && actual.name && actual.strength
          };
        }
      };
    }
  });
});

declare module jasmine {
  interface Matchers {
      toBeAHero(): boolean;
  }
}
