const bcryptjs = require("bcryptjs")
///Contraseña sin encriptar texto plano : holamundo
const encrypt = async (passwordPlain)=>{
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash
}
// pasar contraseña sin encriptar y encriptada
const compare= async (passwordPlain, hashPassword)=>{
    return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports= {encrypt, compare}