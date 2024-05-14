https://nereyamantzur.github.io/cocktails/main.html

1. open an terminal at the project directory and run "node server.js"

2.  open a terminal at the project directory and run "ngrok.exe"

    from https://dashboard.ngrok.com copy the authtoken and "ngrok config add-authtoken -'AOUTHTOKEN-HERE'-"
    // replace -'AOUTHTOKEN-HERE'

    run "ngrok http -'PORT-NUMBER'-"
    // replace -'PORT-NUMBER'- 
    
    copy and add the url from ngrok to script.js under the variable url

