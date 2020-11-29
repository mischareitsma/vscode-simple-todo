import * as fs from 'fs';

export function createFileIfNotExists(fileName: string) {
	if (!fs.existsSync(fileName)) {
		// Open in append mode and create if not exists. Ignore the file descriptor.
		fs.openSync(fileName, 'a');
	}
}
