export interface JwtResponseI {

    dataUser:{ //api devuelve un objeto con la data user
        id:number;
        name:String,
        email:String,
        accessToken:string,//guardar un token en local storage
        expiresIn:String,
    }
}
