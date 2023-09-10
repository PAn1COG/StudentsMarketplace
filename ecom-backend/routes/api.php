<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register',[userController::class,'register']);
Route::post('login',[userController::class,'login']);
Route::post('addProduct',[userController::class,'addProduct']);
Route::post('listProduct',[userController::class,'listProduct']);
Route::post('deleteProduct',[userController::class,'deleteProduct']);
Route::post('addclub',[userController::class,'addclub']);
Route::post('listclub',[userController::class,'listclub']);
Route::post('joinclub',[userController::class,'joinclub']);
Route::post('leaveclub',[userController::class,'leaveclub']);
Route::post('listClubbyid',[userController::class,'listClubbyid']);
Route::post('getuserinfo',[userController::class,'getuserinfo']);
Route::post('showstudents',[userController::class,'showstudents']);
Route::post('showbusinessowners',[userController::class,'showbusinessowners']);
Route::post('deleteClub',[userController::class,'deleteClub']);
Route::post('deleteStudent',[userController::class,'deleteStudent']);
Route::post('deleteBusinessOwner',[userController::class,'deleteBusinessOwner']);
Route::post('allProducts',[userController::class,'allProducts']);
Route::post('handleAcountReset',[userController::class,'handleAcountReset']);
Route::post('getUserCount',[userController::class,'getUserCount']);
Route::post('addToCart',[userController::class,'addToCart']);
Route::post('listCart',[userController::class,'listCart']);
Route::post('removeFromCart',[userController::class,'removeFromCart']);
Route::post('addAd',[userController::class,'addAd']);
Route::post('fetchAd',[userController::class,'fetchAd']);
Route::post('addtoOrders',[userController::class,'addtoOrders']);
Route::post('getOrdersforstudent',[userController::class,'getOrdersforstudent']);
Route::post('getOrdersforBo',[userController::class,'getOrdersforBo']);
Route::post('orderPlaced',[userController::class,'orderPlaced']);
Route::post('productReturn',[userController::class,'productReturn']);
Route::post('updateinfo',[userController::class,'updateinfo']);