import {Component} from 'angular2/core';
var electron = require("electron");
var ipcRenderer = electron.ipcRenderer;

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App {{title}}</h1>'
})
export class AppComponent { 
    public title = "custom title";
    
    constructor(){
        var response = ipcRenderer.sendSync('channel', 'ping');
        console.log(response);        
    }
}