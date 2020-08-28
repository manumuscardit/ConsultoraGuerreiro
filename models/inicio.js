const pool= require('../utils/bd') //importamos referencia de conexion

// Funcion para info inicial
getInicio= async () => { try {
  const query = "SELECT titulo, slogan, textabout, imagen FROM inicio"; //consulta
  const rows = await pool.query(query); //ejecucion 
  return rows; 
} catch (error){
    console.log(error); //error  
}}
const update = async(obj) =>{
  console.log("Se actualizará el index");
  const query = "UPDATE ?? SET ? where id = 1";
  const params = ["inicio", obj];
  const rows = await pool.query(query,params);
  return rows;
}
module.exports = {
    getInicio, update
}