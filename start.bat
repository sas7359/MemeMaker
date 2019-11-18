@ECHO OFF
ECHO Install NPM? (Y or N)

set  /P answer=""
IF "%answer%"=="Y" (
    ECHO Installing NPM...
    npm install
)

start cmd /k "npm run server"
npm start