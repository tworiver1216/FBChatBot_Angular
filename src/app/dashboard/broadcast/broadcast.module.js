import angular from 'angular';

let broadcastModule = angular.module('app.dashboard.broadcast', []);

import BroadcastListComponent from './broadcast-list.component';
broadcastModule.component('broadcastList', BroadcastListComponent);

import CreateBroadcastComponent from './create-broadcast.component';
broadcastModule.component('createBroadcast', CreateBroadcastComponent);

import EditBroadcastComponent from './edit-broadcast.component';
broadcastModule.component('editBroadcast', EditBroadcastComponent);

import ShowBroadcastComponent from './show-broadcast.component';
broadcastModule.component('showBroadcast', ShowBroadcastComponent);

import BroadcastService from './broadcast.service';
broadcastModule.service('Broadcasts', BroadcastService);

import BroadcastController from './broadcast.controller';
broadcastModule.controller('BroadcastController', BroadcastController);

import BroadcastRoutes from './broadcast.routes';
broadcastModule.config(BroadcastRoutes);

export default broadcastModule;