/// <reference path="../../node_modules/angular2/typings/tsd.d.ts" />
/// <reference path="../../typings/tsd.d.ts" />

import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
var electron = require("electron");
var ipcRenderer = electron.ipcRenderer;

bootstrap(AppComponent);