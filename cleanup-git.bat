@echo off
setlocal

:: === Настройки ===
set "ZIP_FILE=my-project.zip"
set "REPO_NAME=my-project"
set "CLEAN_DIR=my-project-clean"
set "BFG_JAR=bfg-1.14.0.jar"
set "GITHUB_REMOTE=https://github.com/Codes1x/reatreat.git"

:: === Удалим файл из индекса ===
echo Удаление %ZIP_FILE% из отслеживания...
git rm --cached %ZIP_FILE%

:: === Добавим в .gitignore ===
echo Добавление %ZIP_FILE% в .gitignore...
echo %ZIP_FILE%>>.gitignore
git add .gitignore
git commit -m "🧹 Удалён %ZIP_FILE% и добавлен в .gitignore"

:: === Клонируем репозиторий как зеркало ===
echo Клонирование зеркала...
git clone --mirror . ../%CLEAN_DIR%

:: === Запуск BFG для удаления большого файла ===
echo Запуск BFG для удаления %ZIP_FILE% из истории...
cd ../%CLEAN_DIR%
java -jar ../%BFG_JAR% --delete-files %ZIP_FILE%

:: === Очистка мусора ===
echo Очистка reflog и упаковка...
git reflog expire --expire=now --all
git gc --prune=now --aggressive

:: === Пушим обратно на GitHub ===
echo Пуш в GitHub...
git remote set-url origin %GITHUB_REMOTE%
git push --force

echo ✅ Готово! История очищена и загружена на GitHub.
pause
