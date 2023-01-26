const Manager = require('../lib/manager');

describe('Manager', () => {
  it('should create a manager object', () => {
    const manager = new Manager('Jonathan', 1, 'j.pohahau@outlook.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
  });
  describe('getRole', () => {
    it('should return members role', () => {
      const manager = new Manager('Jonathan', 1, 'j.pohahau@outlook.com', 1);

      expect(manager.getRole()).toEqual('Manager');
    });
  });
});
