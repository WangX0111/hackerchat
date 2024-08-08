// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { HackerChatSidebarProvider } from './sidebar';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hackerchat" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('hackerchat.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from hackerchat!');
	});
	const view = vscode.window.registerWebviewViewProvider('hackerchat.view', new HackerChatSidebarProvider(context));


	context.subscriptions.push(disposable, view);
}

// This method is called when your extension is deactivated
export function deactivate() {}


class HackerchatViewProvider implements vscode.WebviewViewProvider {
	context: vscode.ExtensionContext
	constructor(context: vscode.ExtensionContext) {
	  this.context = context
	}
	// 实现 resolveWebviewView 方法，用于处理 WebviewView 的创建和设置
	resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext<unknown>, token: vscode.CancellationToken): void | Thenable<void> {
	  // 配置 WebviewView 的选项
	  webviewView.webview.options = {
		enableScripts: true,
		localResourceRoots: [this.context.extensionUri]
	  };
  
	  // 设置 WebviewView 的 HTML 内容，可以在这里指定要加载的网页内容
	  webviewView.webview.html = getWebviewContent('https://www.baidu.com').toString();
	}
  }
  
  
  
  function getWebviewContent(indexPath: string): string {
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Chat</title>
	</head>
	<body>
	  <iframe src="${indexPath}" frameborder="0" style="width:100%; height:100%;"></iframe>
	</body>
	</html>`;
  }
  