@echo off
chcp 65001 >nul
setlocal
REM 崇城シャトル運航ローカル + ngrok
REM 前提: Node.js が PATH にあり、ngrok が PATH にあること

cd /d "%~dp0bus-ops-local"
if not exist "package.json" (
  echo [エラー] bus-ops-local が見つかりません: %cd%
  pause
  exit /b 1
)

echo [1/2] 運航サーバーを別ウィンドウで起動します（閉じるとサーバー停止）...
start "bus-ops-local (npm start)" cmd /k "cd /d %cd% && npm start"

echo [2/2] サーバー起動待ち...
timeout /t 3 /nobreak >nul

echo ngrok を起動します（終了はこのウィンドウで Ctrl+C）...
echo   ローカル: http://127.0.0.1:3050/driver.html
echo   公開URL は ngrok が表示する https://.... をスマホで開いてください。
echo.

ngrok http 3050
if errorlevel 1 (
  echo.
  echo [エラー] ngrok の実行に失敗しました。PATH に ngrok が通っているか確認してください。
  pause
  exit /b 1
)

endlocal
