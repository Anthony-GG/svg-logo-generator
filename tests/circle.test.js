const Circle = require('../lib/circle.js');


describe('Circle', () => {
    // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  
    describe('Renders Circle', () => {
      it('should return false for password less than 8 characters long', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual("<circle cx='150px' cy='100px' r='75' fill='blue' />");
      });
    });
});
