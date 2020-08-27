const pool= require('../utils/bd');
// Funcion para vista previa de servicios en index
servIndex= async () => { try {
  const query= "SELECT nombre, descripcion, icono, estado FROM servicios WHERE estado = 1";
  const rows = await pool.query(query);
return rows; 
} catch (error){
  console.log(error); //error  
}}
//Funcion para servicios
getServicios= async(nombre) => {try {
  const query= "SELECT id, nombre, descripcion, texto, icono, imagen, estado FROM servicios WHERE estado = 1";
  const rows= await pool.query(query);
  return rows
} catch (error) {
  console.log(error);
}}
// Funcion para servicios individuales
getServicio= async(nombre) => {try {
  const query= "SELECT nombre, texto, imagen FROM servicios WHERE nombre= ?";
 const params= [nombre];
  const rows = await pool.query(query,params);
return rows[0]; //primer elemento vector 
} catch (error) {
  console.log(error);
}}
// Funcion para servicios individuales en ABM
getAdminServicio= async(id) => {try {
  const query= "SELECT nombre, texto, descripcion, imagen, id, icono FROM servicios WHERE id= ?"
 const params= [id];
  const rows = await pool.query(query,params);
return rows[0]; //primer elemento vector 
} catch (error) {
  console.log(error);
}}
// Funcion para insertar nuevos servicios
const create = async(obj) =>{
  const query= "INSERT INTO servicios SET ?";
  const params=[obj];
  const rows= await pool.query(query,params);
  console.log(rows);
  return rows.insertID;
}
//Funcion update
const update = async(id,obj) =>{
  console.log("Se actualizara el id:", id);
  const query = "UPDATE ?? SET ? where id = ?";
  const params = ["servicios", obj, id];
  const rows = await pool.query(query,params);
  return rows;
}
// Exportacion
module.exports = {
    servIndex, getServicio, getServicios, getAdminServicio, create, update
}