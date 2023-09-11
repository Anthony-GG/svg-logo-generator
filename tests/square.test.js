const Square = require('../lib/square.js');

test('successfully renders a square object', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual("<rect width='150' height='150' x='75px' y='25px' fill='blue' />");
});