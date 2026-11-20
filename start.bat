@echo off
title Rumah Solution Law Firm (SLF) - Server Launcher
echo ===================================================================
echo   RUMAH SOLUTION LAW FIRM - PREMIUM MODERN LAW FIRM WEBSITE
echo   Adv. Samuel Tambunan, S.Kom., S.H.
echo ===================================================================
echo.
set PATH=C:\laragon\bin\php\php-8.3.30-Win32-vs16-x64;C:\laragon\bin\composer;C:\laragon\bin\git\cmd;C:\laragon\bin\nodejs\node-v24.19.0;C:\Program Files\nodejs;%PATH%

cd /d "%~dp0"

echo [1/2] Checking database status...
php artisan migrate --force

echo [2/2] Starting local web server at http://127.0.0.1:8000 ...
echo.
echo ===================================================================
echo   Website URL : http://127.0.0.1:8000
echo   Admin Portal: http://127.0.0.1:8000/admin/login
echo   Admin Email : admin@solutionlawfirm.com
echo   Password    : admin12345
echo ===================================================================
echo.
php artisan serve --port=8000
pause
