import __ENV from '../../.env';

import angular from 'angular';

import './app.templates';
import './bot/bot.module';
import './auth/auth.module';
import './dashboard/dashboard.module';


let appModule = angular.module('app', [
    'templates',
    'app.bot',
    'app.auth',
    'app.shared',
    'app.dashboard'
]);

appModule.config(function ($windowProvider) {
    'ngInject';
    $windowProvider.$get().__ENV = __ENV;
});

import appRoutes  from './app.routes';
appModule.config(appRoutes);

import appConfig  from './app.config';
appModule.config(appConfig);

import appRun  from './app.run';
appModule.run(appRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});



