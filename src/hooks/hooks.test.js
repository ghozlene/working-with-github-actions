import {
	it,
	expect,
	beforeAll,
	beforeEach,
	afterEach,
	afterAll,
	describe,
} from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user;
beforeAll(() => {
	user = new User(testEmail);
});

beforeEach(() => {
	user = new User(testEmail);
});
afterEach(() => {
	console.log('afterEach()');
});
afterAll(() => {
	console.log('after all');
});

//we can use concurrent to speed up testing by run all the test on //
//when we asign it to a suit of test like describe
//or using it on some of test to making // testing on them
describe.concurrent('Testing the User email', () => {
	it.concurrent('should update the email', () => {
		const newTestEmail = 'test2@test.com';

		user.updateEmail(newTestEmail);

		expect(user.email).toBe(newTestEmail);
	});

	it('should have an email property', () => {
		expect(user).toHaveProperty('email');
	});

	it('should store the provided email value', () => {
		expect(user.email).toBe(testEmail);
	});

	it('should clear the email', () => {
		user.clearEmail();

		expect(user.email).toBe('');
	});

	it('should still have an email property after clearing the email', () => {
		user.clearEmail();

		expect(user).toHaveProperty('email');
	});
});
