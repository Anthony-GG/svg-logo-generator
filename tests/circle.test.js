const Circle = require('../lib/circle.js');


describe('Circle', () => {

    describe('Renders Circle', () => {
      it('gives us back the text for a blue circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual("<circle cx='150px' cy='100px' r='75' fill='blue' />");
      });
    });
});
