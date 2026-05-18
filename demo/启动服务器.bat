@echo off
cd /d "%~dp0"
title 长江大学财务与资产管理部网站服务器
echo ========================================
echo   启动网站服务器...
echo ========================================
echo.
echo 请在浏览器中访问: http://localhost:8000
echo 按 Ctrl+C 停止服务器
echo.
node server.js
pause
