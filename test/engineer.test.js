const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  it('should create an Engineer object', () => {
    const engineer = new Engineer('Jonathan', 2, 'j.pohahau@outlook.com', 'j-pohahau5')

    expect(engineer.userName).toEqual(expect.any(String))
  })
  describe('getUserName', () => {
    it('should return GitHub userName', () => {
        const engineer = new Engineer('Jonathan', 2, 'j.pohahau@outlook.com', 'j-pohahau5')

        expect(engineer.getUserName()).toEqual(expect.stringContaining(engineer.userName.toString()))
    });
  });
  describe('getRole', () => {
    it('should return Engineers role', () => {
        const engineer = new Engineer('Jonathan', 2, 'j.pohahau@outlook.com', 'j-pohahau5')

        expect(engineer.getRole()).toEqual('Engineer')
    });
  });
});
