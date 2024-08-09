import * as vscode from "vscode";
import * as path from "path";
import * as fs from 'fs';
import { getNonce } from "./nonce";

export class HackerChatSidebarProvider implements vscode.WebviewViewProvider {
    context: vscode.ExtensionContext
    constructor(context: vscode.ExtensionContext) {
      this.context = context
    }
  
    public resolveWebviewView(
      webviewView: vscode.WebviewView,
      context: vscode.WebviewViewResolveContext,
      _token: vscode.CancellationToken
    ): void | Thenable<void> {
  
      webviewView.webview.options = {
        // Allow scripts in the webview
        enableScripts: true,
        localResourceRoots: [vscode.Uri.file(
            path.join(this.context.extensionPath, "vue-dist", "assets")
        )],
      };
      webviewView.webview.html = this.prepareSidebarView(webviewView.webview);
    }



    private prepareSidebarView(webview: vscode.Webview) {


        const dependencyNameList: string[] = [
            "index.css",
            "index.js",
            "vendor.js",
            "logo.png",
        ];
        const dependencyList: vscode.Uri[] = dependencyNameList.map((item) =>
            webview.asWebviewUri(
                vscode.Uri.file(
                    path.join(this.context.extensionPath, "vue-dist", "assets", item)
                )
            )
        );
        const html = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vite App</title>
                <script>
                    const vscode = acquireVsCodeApi();
                </script>
                <script type="module" crossorigin src="${dependencyList[1]}"></script>
                <link rel="modulepreload" href="${dependencyList[2]}">
                <link rel="stylesheet" href="${dependencyList[0]}">
            </head>
            <body>
                <div id="app"></div>
            </body>
            </html>
            `;
        return html;
    }
}