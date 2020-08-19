const pool= require('../utils/bd') //importamos referencia de conexion
getInicio= async () => { try {
  const query = "SELECT titulo, slogan, textabout, imagen FROM inicio"; //consulta
  const rows = await pool.query(query); //ejecucion 
  return rows; 
} catch (error){
    console.log(error); //error  
}}

module.exports = {
    getInicio
}