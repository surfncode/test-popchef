# Popchef technical test

## prerequisites

* nodejs: I used node version 12.13.1 although previous versions will probably work (if they are relatively recent)
* mariadb 10.1

## Initialise database

Create a database on your mariadb instance then issue the following command by replacing appropriately each parameter between &lt;&gt;
```bash 
mysql -h <host> --port=<port> -u <user> -p<password> <database> < init.sql

```
## Configure

The following environment variables can be used to configure node app

* PORT: (optionnal, default to 3001) port used by node http server. Please leave port to 3001 for development mode
* JAWSDB_MARIA_URL: (required) mysql connection string. The format is mysql://login:password@host:port/database

Variables may be set up in a .env:
```bash
JAWSDB_MARIA_URL=mysql://login:password@host:port/database
PORT=3001
```

Or in bash console:
```bash
export JAWSDB_MARIA_URL=mysql://login:password@host:port/database
export PORT=3001
```

## Run in development mode

Start backend
```
npm install
npm start
``` 

Start react development server
```bash
cd frontend
npm install
npm start
```

Then open http://localhost:3000

## Run in production mode

Build frontend, then launch backend
```bash
cd frontend
npm install
npm run build
cd ..
npm install
npm start
```

Then open http://localhost:3001

## File organisation

Frontend code is located in the directoy "frontend" (created with react-create-app), everything other file is related to backend.

In development mode backend is called by frontend through a proxy parameter (see frontend/package.json#proxy)
In production mode, the frontend build (in frontend/build) is served by the backend.

The sql seed file is init.sql





