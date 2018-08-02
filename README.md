# Debugging TypeScript using Docker containers and VSCode

Visual Studio Code (VS Code) has a built-in debugging support for Node.js runtime and can debug any languages that are transpiled to JavaScript.

Since the VS Code Node.js debugger communicates to the Node.js runtimes through wire protocols, the set of supported runtimes is determined by all runtimes supporting the wire protocols:

- **legacy:** the original [V8 Debugger Protocol](https://github.com/buggerjs/bugger-v8-client/blob/master/PROTOCOL.md) which is currently supported by older runtimes.
- **inspector:** the new [V8 Inspector Protocol](https://chromedevtools.github.io/debugger-protocol-viewer/v8/) is exposed via the `--inspect flag` in Node.js versions >= 6.3. It addresses most of the limitations and scalability issues of the legacy protocol.


### Prerequisites

There are some things that should be installed before we get started:

- [ ] Docker
- [ ] Node JS
- [ ] Visual Studio Code (a.k.a VS Code)

### Getting Started

- First, dockerize / docker-compose
- Second, do npm in container, files locally, put files in the container
- Third, configure package.json and VS Code remote debugger


**1.** Let's initialize our project using `npm init` so we get ```package.json``` created (unless you already have project/app initialized). The ```package.json``` file is the standard file for ```npm``` package management (info about your app, dependencies with respective versions, etc.)

**2.** Unless you have your own Node.js code, check out the [server.ts](./server.ts) file in this repo. It basically 

### References

- [Node.js Debugging in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
- [Debugging TypeScript in a Docker Container](https://github.com/Microsoft/vscode-recipes/tree/master/Docker-TypeScript)