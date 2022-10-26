
async function obtenerdatos(){
const response = await fetch ("http://127.0.0.1:5500/ivan.json");
const json = await response.text();
console.log(JSON.parse(json));
}
obtenerdatos;