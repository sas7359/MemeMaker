@ECHO OFF
ECHO Install NPM? (Y or N)

set  /P answer=""
IF "%answer%"=="Y" (
    ECHO Installing NPM...
    install npm
)

start cmd /k "npm run server"
npm start