var ioUrl;
var appUrl;
var enablePassword;
var isReady = 0


//App mode
var env = 'LOCAL'; // LOCAL, STAGE, PROD

function setEnvironmentSpecifics(env) {
    switch (env) {
        case 'LOCAL':
            // ioUrl = 'http://10.0.0.186:4500';
            ioUrl = 'http://localhost:5034';
            enablePassword = 0;
            break;
        case 'STAGE':
            ioUrl = 'http://172.16.16.51:15000';
            enablePassword = 0;
            break;
        case 'PROD':
            ioUrl = 'http://localhost:5034';
            enablePassword = 1;
            break;
    }
    //common
    appUrl = ioUrl + '/';

}

setEnvironmentSpecifics(env);