import * as vscode from 'vscode';

import {openProjectTodoFile, openUserTodoFile} from './commands';

export function activate(context: vscode.ExtensionContext)
{
	// Extension dir can be found at context.extensionPath
	console.log('Activated simple-todo extension');

	context.subscriptions.push(
		vscode.commands.registerCommand('simple-todo.open-project-todo', openProjectTodoFile)
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('simple-todo.open-user-todo', openUserTodoFile)
	);

}

export function deactivate()
{
	console.log('Deactivating simple-todo extension');
}
