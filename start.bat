@echo off
echo ========================================
echo   JavaScript Interactive Learning
echo   Demarrage du site web...
echo ========================================
echo.

REM Check if Python is available
where python >nul 2>nul
if %errorlevel% equ 0 (
    echo [*] Python detecte ! Demarrage du serveur...
    echo.
    echo [i] Le site sera disponible sur : http://localhost:8000
    echo [i] Appuyez sur Ctrl+C pour arreter le serveur
    echo.
    start http://localhost:8000
    python -m http.server 8000
    goto :end
)

REM Check if Node.js is available
where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [*] Node.js detecte ! Installation de http-server...
    call npm install -g http-server
    echo.
    echo [*] Demarrage du serveur...
    echo.
    echo [i] Le site sera disponible sur : http://localhost:8000
    echo [i] Appuyez sur Ctrl+C pour arreter le serveur
    echo.
    start http://localhost:8000
    http-server -p 8000
    goto :end
)

REM If neither Python nor Node.js is available, open directly in browser
echo [!] Python et Node.js non detectes
echo [*] Ouverture du fichier HTML directement...
echo.
echo [i] Note: Pour une meilleure experience, installez Python ou Node.js
echo.
start index.html

:end
echo.
echo ========================================
echo   Merci d'avoir utilise JavaScript Interactive Learning !
echo ========================================
pause
