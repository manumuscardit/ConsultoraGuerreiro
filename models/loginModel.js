const pool = require ("../utils/bd");
logueado = async(usuario, pass) => { //Consulta
    try {
      const query = "SELECT * FROM usuario WHERE usuario= ? AND contraseña = ?";
      const params = [usuario, pass];
      return await pool.query(query,params); 
    } catch (error) {
       console.log(error);
       console.log("Usuario o contraseña incorrectos")
    }
}

module.exports = {
    logueado
}