
const proyectos = [
  {
    name: "Sarita Farm",
    device: "AK-49",
    description: "Es un arma de fuego rápido para ser utilizado en combate de guerra, tiene incorporado IOT",
  },
  {
    name: "Sarita Farm 2",
    device: "THUNDER 380 CC",
    description: "Es un tanke de guerra para commbate de guerra",
  },
  {
    name: "Sarita Farm 3",
    device: "THUNDER 30 CC",
    description: "El lo imsmo que el otro, pero mejorado, aunque no parezca",
  }
]


/**
 * 
 * @returns Proyecto
 */
export function getProjects(){
  return proyectos
}

/**
 * objeto que se tratará como tipo Object
 * @param {Project} project 
 */
export function setProjects( project){
  proyectos.push(project)
}