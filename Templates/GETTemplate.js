const request = require('request');
const config = require('../config.json');
const baseUrl = config.baseUrl;

module.exports =(req, res, urlEnding , urlParams , headersObject,postBodyjson) =>{
    
    const args = req.body.args;

    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";
    let url = `${baseUrl}${urlEnding}`;
    
    if(urlParams){
        url = url.concat(`?${urlParams}`);
    }

    request.get({
        headers: headersObject,
        url: url,
    }
    ,function(err, response, body){
        if (err) {
            r.contextWrites[to] = err;
            r.callback = 'error';
        }
        else {
            r.contextWrites[to] = response.body;
            r.callback = 'success';

        }
        res.status(200).send(r);
        });
}
        