<?php

// Orbital Intention System - API Routes
// This is a mock API structure for Laravel

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application.
|
*/

// Intentions
Route::get('/intentions', 'IntentionController@index');
Route::get('/intentions/{id}', 'IntentionController@show');
Route::post('/intentions', 'IntentionController@store');
Route::put('/intentions/{id}', 'IntentionController@update');
Route::delete('/intentions/{id}', 'IntentionController@destroy');

// Strategies
Route::get('/intentions/{id}/strategies', 'IntentionController@strategies');
Route::get('/strategies', 'StrategyController@index');
Route::get('/strategies/{id}', 'StrategyController@show');

// Sources
Route::get('/sources', 'SourceController@index');
Route::get('/sources/{id}', 'SourceController@show');

// History
Route::get('/history', 'HistoryController@index');
Route::get('/history/{id}', 'HistoryController@show');

// Alerts
Route::get('/alerts', 'AlertController@index');
Route::post('/alerts/{id}/read', 'AlertController@markAsRead');
Route::delete('/alerts/{id}', 'AlertController@destroy');
