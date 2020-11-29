import * as vscode from 'vscode';

import {openProjectTodoFile} from './todo';

export function activate(context: vscode.ExtensionContext)
{
	// Extension dir can be found at context.extensionPath
	console.log('Activated simple-todo extension');

	context.subscriptions.push(
		vscode.commands.registerCommand('simple-todo.open-project-todo', openProjectTodoFile)
	);
}

export function deactivate()
{
	console.log('Deactivating simple-todo extension');
}
