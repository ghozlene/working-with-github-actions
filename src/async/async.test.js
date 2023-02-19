import { describe, expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async';

describe('generateToken()', () => {
	it('should return a token based on the email giving', (done) => {
		const testUserEmail = 'aaaa@aaa.com';

		generateToken(testUserEmail, (err, token) => {
			//
			try {
				//expect(token).toBe(1);
				expect(token).toBeDefined();
				done();
			} catch (error) {
				done(error);
			}
		});
	});
});

//Method 1:
describe('generateTokenPromise()', () => {
	it('should return a token', () => {
		const testUserEmail = 'aaaa@aaa.com';

		return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
	});
});

//Method 2:
describe('generateTokenPromise()', () => {
	it('should return a token', async () => {
		const testUserEmail = 'aaaa@aaa.com';
		const token = await generateTokenPromise(testUserEmail);

		//failed
		//expect(token).toBe(2);
		//work
		expect(token).toBeDefined();
	});
});
