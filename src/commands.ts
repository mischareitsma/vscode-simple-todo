import * as path from 'path';
import * as vscode from 'vscode';

import {createFileIfNotExists, createDirIfNotExists} from './fsutils';

export function openProjectTodoFile() {
	// TODO: Do not support multi-root workspaces yet. Later could add and have a drop down menu for the
	// specific workspace, just like the open terminal option in multi-root workspaces.

	// Do need one workspace
	if (!vscode.workspace.workspaceFolders) {
		vscode.window.showErrorMessage('No open workspace');
		return;
	}

	const todoFileName: string = vscode.workspace.workspaceFolders[0].name + '-TODO';

	openTodoFile(getTodoFileDirectory(), todoFileName);
}

export function openUserTodoFile() {
	openTodoFile(getTodoFileDirectory(), 'TODO');
	
}

function openTodoFile(directory: string , fileName: string) {
	const fullPath: string = path.join(directory, fileName);
	createDirIfNotExists(directory);
	createFileIfNotExists(fullPath);

	vscode.window.showTextDocument(vscode.Uri.file(fullPath));
}

function getTodoFileDirectory(): string {
	const todoFileLocation: string | undefined = vscode.workspace.getConfiguration("simple-todo")
		.get<string>("todoFileDirectory");

	// FIXME: This error is not handled properly, should return str or undefined and just deal with
	// undefined in the caller?
	if (!todoFileLocation) {
		throw new Error('Please configure the TODO file directory in the settings');
	}

	return todoFileLocation!;
}
