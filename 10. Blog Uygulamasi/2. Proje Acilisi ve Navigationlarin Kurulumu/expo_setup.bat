@echo off
rem PowerShell'i aç ve betik dosyasını oluştur
powershell -NoProfile -Command "& {New-Item -ItemType File -Path .\expo_setup.ps1; Add-Content .\expo_setup.ps1 'npx create-expo-app kurslarim'; Add-Content .\expo_setup.ps1 'cd kurslarim'; Add-Content .\expo_setup.ps1 'npm install @react-navigation/native'; Add-Content .\expo_setup.ps1 'npm install @react-navigation/native-stack'; Add-Content .\expo_setup.ps1 'npx expo install react-native-screens react-native-safe-area-context'; Add-Content .\expo_setup.ps1 'npm install @expo/vector-icons';Add-Content .\expo_setup.ps1 'npm i axios' }"

rem PowerShell betik dosyasını çalıştır
powershell .\expo_setup.ps1
rem Betik dosyasını sil
del expo_setup.ps1 /f /q
rem İşlem tamamlandı, komut istemcisini açık tutun
type nul > .\kurslarim\startexpo.bat

rem Dosyaya içeriği yaz
echo @echo off >> .\kurslarim\startexpo.bat
echo start cmd /c "npx expo start" >> .\kurslarim\startexpo.bat
