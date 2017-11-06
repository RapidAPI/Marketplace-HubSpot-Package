"use strict";

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser'),
    config          = require("./config.json"),
    metadata        = require("./metadata.json"),
    ParamsJSON      = require("./params.json"),
    ParamParser     = require("./paramParser.js");

/* object mapping for templates */
const templates = {
    "GET" :  require('./Templates/GETTemplate'),
    "POST" : require('./Templates/POSTTemplate'),
    "DELETE" : require('./Templates/DELETETemplate'),
    "PATCH" : require('./Templates/PATCHTemplate'),
    "PUT" : require("./Templates/PUTTemplate")
};


/** SET UP **/
//If ran in production - suse enviroment PORT. In development, default to 8080
const PORT = process.env.PORT || 8080;
//The package name
global.PACKAGE_NAME = config.PACKAGE_NAME;

//Initialize web server
const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

/** ENDPOINT **/
//A metadata endpoint at GET /api/PACKAGE_NAME should return package metadata
//TODO: remove backslashes
app.get(`/api/${PACKAGE_NAME}`, (req , res) => {
    res.status(200).send(metadata);
});

//For each block, a POST /api/PACKAGE_NAME/BLOCK_NAME should execute the block
try{
    Object.keys(ParamsJSON).forEach(api => {
        let paramsObj = ParamsJSON[api];
        let template = templates[paramsObj.method];
        app.post(`/api/${PACKAGE_NAME}/${api}` , (req , res) => {
            passParams(req,res,paramsObj,template)
         });
        // app.post(`/api/${PACKAGE_NAME}/${api}`,(req,res) =>  require(`./blocks/${api}.js`)(req , res ,template));
    })
}
catch(e){
console.log(e);
}

function passParams(req, res , paramsObj , template){
    //TODO: add validation (error handeling)
    const parsedObj = ParamParser.parse(req , paramsObj.params);
    const parametizedUrl = ParamParser.BuildUrl(paramsObj.referenceUrl , config.baseUrl , parsedObj.concatUrl);
    try{
        ParamParser.validateRequest(req ,paramsObj.params);
    }
    catch(e){
        return res.status(500).send(e);
    }
    return template(req,res, parametizedUrl ,parsedObj.urlParams , parsedObj.header , parsedObj.body);
}



/** START LISTENING **/
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(PORT);
    }
});
