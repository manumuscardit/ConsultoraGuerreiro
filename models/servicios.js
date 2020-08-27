const pool= require('../utils/bd');
// Funcion para vista previa de servicios en index
servIndex= async () => { try {
  const query= "SELECT nombre, descripcion FROM servicios";
  const rows = await pool.query(query);
return rows; 
} catch (error){
  console.log(error); //error  
}}
//Funcion para servicios
getServicios= async(nombre) => {try {
  const query= "SELECT id, nombre, texto, imagen FROM servicios";
  const rows= await pool.query(query);
  return rows
} catch (error) {
  console.log(error);
}}
// Funcion para servicios individuales
getServicio= async(nombre) => {try {
  const query= "SELECT nombre, texto, imagen FROM servicios WHERE nombre= ?"
 const params= [nombre];
  const rows = await pool.query(query,params);
return rows[0]; //primer elemento vector 
} catch (error) {
  console.log(error);
}}

// Exportacion
module.exports = {
    servIndex, getServicio, getServicios
}