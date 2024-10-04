# WebContainers Offline

Helps to run webcontainers offline run terminal and demos the WebContainres Website saved don't run WebContainers It Says SharedArrayBuffer is not defind and I created This Project.

## Usage

Webcontainers Server Needs NodeJS LTS For More Information go to [Nodejs Website](https://nodejs.org) And [Nodejs docs](https://nodejs.org/docs/latest/api/)

> First of All clone this repo or download this repo
```bash
git clone https://github.com/ShahirTurkmen/webcontainers.io-offline
```
> go to the directory
```bash
cd webcontainers.io-offline/
```
> start the server
```bash
./serve/build/main.js
```

> And go to http://localhost:3000/

> If you are offline and firefox has a problem with Network Error
> You Need to add a firefox extenstion
> Create an extension
> Go to the extension manifest
```json
{
    "permissions":[
        "<all_urls>",
        "http://localhost*/*",
        "http://localhost/*",
        "http://localhost:*/*",
        "http://localhost:*/*",
        "http://localhost:3000/",
    ]
}
```
> This Well Fix Offline Errors in firefox.

### Have Fun!