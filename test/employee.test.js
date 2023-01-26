const Employee = require("../lib/employee");

describe('Employee', () => {
    it('creates an employee object', () => {
        const employee = new Employee('Jonathan', 25, 'j.pohahau@outlook.com');
    
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
    describe('getName', () => {
        // Positive test
        it('should return name', () => {
            const employee = new Employee('Jonathan', 25, 'j.pohahau@outlook.com');

            expect(employee.getName()).toEqual(expect.any(String));
        });
    });
    describe('getID', () => {
        // Positive test
        it('should return id', () => {
            const employee = new Employee('Jonathan', 25, 'j.pohahau@outlook.com');

            expect(employee.getID()).toEqual(expect.any(Number));
        });
    });
    describe('getEmail', () => {
        // Positive test
        it('should return id', () => {
            const employee = new Employee('Jonathan', 25, 'j.pohahau@outlook.com');

            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
        });
    });
    describe('get members role', () => {
        it('get role of employee', () => {
            const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

            expect(employee.getRole()).toEqual('Employee');
        })
    })
})