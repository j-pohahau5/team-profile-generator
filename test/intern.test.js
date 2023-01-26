const Intern = require('../lib/intern');

describe('Intern', () => {
  it('should create an Intern object', () => {
    const intern = new Intern('Jonathan', 3, 'j.pohahau@outlook.com', 'Charleston Southern University');

    expect(intern.school).toEqual(expect.any(String))
  });
  describe('getSchool', () => {
    it('should return school', () => {
      const intern = new Intern('Jonathan', 3, 'j.pohahau@outlook.com', 'Charleston Southern University');

      expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
    });
  });
  describe('getRole', () => {
    it('should return Interns role', () => {
        const intern = new Intern('Jonathan', 3, 'j.pohahau@outlook.com', 'Charleston Southern University');

        expect(intern.getRole()).toEqual('Intern')
    });
  });
});
