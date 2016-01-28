## setup
* npm install
* cd src/server && tsd install
* npm start

## deploy
* download prebuilt electron binary
* node_modules -> resources/
* client/ server/ index.html package.json -> resources/default_app/

## Backend Debugging (VSCode only)
* see launch.json && tasks.json insode .vscode
* just hit F5
* breakpoints do only work in .js files but breakpoint are mapped to the source files (ts)

## Frontend Debugging
* use built in Electron / Chromium debugger