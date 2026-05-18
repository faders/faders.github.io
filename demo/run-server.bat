@echo off
cd /d "%~dp0"
echo Starting server...
start "" cmd /k "node server.js"
