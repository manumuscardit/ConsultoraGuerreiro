const pool= require('../utils/bd');
servIndex= async () => { try {
  const query= "SELECT nombre, descripcion FROM servicios";
  const rows = await pool.query(query);
return rows; 
} catch (error){
  console.log(error); //error  
}}
getCapacitaciones= async () => { try {
  const query= "SELECT nombre, texto, imagen FROM servicios WHERE id=1";
  const rows = await pool.query(query);
return rows; 
} catch (error){
  console.log(error); //error  
}}
getConsultoria= async () => { try {
  const query= "SELECT nombre, texto, imagen FROM servicios WHERE id=2";
  const rows = await pool.query(query);
return rows; 
} catch (error){
  console.log(error); //error  
}}
getFacilitaciones= async () => { try {
  const query= "SELECT nombre, texto, imagen FROM servicios WHERE id=3";
  const rows = await pool.query(query);
return rows; 
} catch (error){
  console.log(error); //error  
}}

module.exports = {
    servIndex, getCapacitaciones, getConsultoria, getFacilitaciones
}