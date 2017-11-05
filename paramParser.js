//TODO: move this to another location
let RapidError = function(code, fields) {
    let messages = {
        'REQUIRED_FIELDS':        'Please, check and fill in required fields.',
        'JSON_VALIDATION':        'Syntax error. Incorrect input JSON. Please, check fields with JSON input.',
        'INTERNAL_PACKAGE_ERROR': 'Something went wrong inside the package.'
    }

    this.status_code = code;
    this.status_msg  = messages[code];

    if(code == 'REQUIRED_FIELDS')
        this.fields  = fields || [];
}

RapidError.prototype = Object.create(Error.prototype);
RapidError.prototype.constructor = RapidError;


module.exports.parse = (req , params) =>{
    const res = params.reduce((acc , param) =>{
        const paramName = param .name;
        if(req.body.args[paramName]){
            switch(param.paramType){
                case "urlParam":
                    if(!acc.urlParams == ""){
                        acc.urlParams = acc.urlParams.concat("&");
                    }
                    acc.urlParams = acc.urlParams.concat( paramName  , "=" , req.body.args[paramName]);
                    return acc;   

                case "headerParam":
                    acc.header[paramName] = req.body.args[paramName];    
                    return acc;
                
                case "bodyParam":
                    acc.body[paramName] = req.body.args[paramName];    
                    return acc;                    
                
                case "concatUrl":
                    acc.concatUrl[paramName] = req.body.args[paramName];
                    return acc;
            }
        }
        else{
            return acc;
        }
    },{"concatUrl" : {}  , "urlParams" : "", "body" : {} ,"header" : {}  });
    return res;
}

module.exports.validateRequest = (req , params) =>{
    let missingFields = [];
    Object.keys(params).forEach(param =>{
        if((param.required == true )&(!req.body.args[param.name])){
            missingFields.push(param.name);
        }
    });
    if(missingFields.length != 0){
        throw new RapidError(REQUIRED_FIELDS , missingFields);
    }
}

module.exports.BuildUrl = (referenceUrl , baseUrl , concatUrl) =>{
    let url = referenceUrl;
    Object.keys(concatUrl).forEach(param =>{
        let string = `\$\(${param})`
        url =  referenceUrl.replace(string , concatUrl[param]);
    });
    url = url.replace(baseUrl , "");
    return url;
}