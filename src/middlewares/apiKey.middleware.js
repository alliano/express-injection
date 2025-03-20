import "dotenv/config";

export function apiKeyMeddleware(reqeust, response, nextFunction){
    const API_KEY = process.env.X_API_KEY;
    const apiKey = reqeust.get("X_API_KEY");
    if(!apiKey){
        response.status(401).json({
            message: "X_API_KEY harus disertakan"
        })
    }

    if(API_KEY === apiKey){
        nextFunction();
    }
    else {
        response.status(401).json({
            message: "X_API_KEY tidak valid"
        })
    }

}