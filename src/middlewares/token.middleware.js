export function tokenMiddleware(request, respone, nextFunction){
    const bearer = request.get("Authorization");
    if(!bearer){
        respone.status(401).json({
            message: "silakan login terlebih dahulu"
        })
    }
    const token = bearer.substring(0, 7);
    const isTokenValid = verify(token);
    if(!isTokenValid){
        respone.status(401).json({
            message: "token tidak valid"
        })
    } else {
        nextFunction();
    }
    
}


function verify(token){
    if(token === "329u12d1280e7123t12twegw91278y"){
        return true;
    }
    else {
        return false
    }
}