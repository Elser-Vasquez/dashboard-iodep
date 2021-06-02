// To parse this data: https://app.quicktype.io/
//
//   const Convert = require("./file");
//
//   const proyect = Convert.toProyect(json);

// Converts JSON strings to/from your types
function toProyect(json) {
  return JSON.parse(json);
}

function proyectToJson(value) {
  return JSON.stringify(value);
}

module.exports = {
  "proyectToJson": proyectToJson,
  "toProyect": toProyect,
};
