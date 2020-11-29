import { Uri } from "vscode";

import {createFileIfNotExists} from './fsutils'

import * as path from 'path'
import * as vscode from 'vscode';

export function openProjectTodoFile()
{
	// TODO: Add workspace support by not assuming there is only one folder in the workspace
	// TODO: Make the TODO File name inside a project configurable
	if (!vscode.workspace.workspaceFolders) {
		vscode.window.showErrorMessage('No open workspace');
		return;
	}
	const filePath: string = path.join(vscode.workspace.workspaceFolders.map(folder => folder.uri)[0].fsPath, 'TODO');
	// This should read the filename from config

	createFileIfNotExists(filePath);

	vscode.window.showTextDocument(Uri.file(filePath));
}

export function openUserTodoFile()
{


}

function getTodoDirPath(isProjectTodo: boolean) : string {
	/* The TODO dir path depends on a few parameters:
	- A flag that determines if project TODO's should be store in the project or not
	- A configurable main TODO dir
	- A configurable project TODO relative path
	*/
	return '';
}

function getTodoFileName() : string {
	/* The TODO file name can be:
	1. Configurable
	2. TODO as default
	*/
	return 'TODO';
}
