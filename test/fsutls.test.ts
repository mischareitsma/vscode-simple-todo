import * as fs from 'fs';
import { join } from 'path';
import {createFileIfNotExists, createDirIfNotExists} from '../src/fsutils';

const tempDir: string = '/tmp/fsutils_testDir';

beforeAll( () => {
	// Prep temporary dir, use unix /tmp dir
	fs.mkdirSync(tempDir);
	
});

afterAll( () => {
	// Remove temporary dir
	fs.rmdirSync(tempDir, { recursive: true});
});

test('Temporary directory already exists', () => {
	createDirIfNotExists(tempDir);
	expect(fs.existsSync(tempDir)).toBe(true);
});

test('Temporary directory does not exist yet', () => {
	const testTempDir: string = join(tempDir, 'testNewTempDir');
	createDirIfNotExists(testTempDir);
	expect(fs.existsSync(testTempDir)).toBe(true);
});

test('Temporary file already exists', () => {
	const testTempFile: string = join(tempDir, 'fileAlreadyExists');
	const testTempFileContent: string = 'This is the content of the test file';
	fs.writeFileSync(testTempFile, testTempFileContent);

	createFileIfNotExists(testTempFile);

	expect(fs.existsSync(testTempFile)).toBe(true);
	expect(fs.readFileSync(testTempFile, { encoding: 'utf8'})).toBe(testTempFileContent);
});

test('Temporary file file does not exist yet', () => {
	const testTempFile: string = join(tempDir, 'fileDoesNotExistYet');
	createFileIfNotExists(testTempFile);
	expect(fs.existsSync(testTempFile)).toBe(true);
	expect(fs.readFileSync(testTempFile, { encoding: 'utf8'})).toBe('');
});
