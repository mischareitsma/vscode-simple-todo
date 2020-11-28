import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext)
{
	console.log('Activated simple-todo extension');
}

export function deactivate()
{
	console.log('Deactivating simple-todo extension');
}