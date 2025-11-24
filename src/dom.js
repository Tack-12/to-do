import { project } from "./projects.js";


const displayProject = (function () {

    addProjectDisplay();

})();

function addProjectDisplay() {

    const listProject = document.querySelector(".left");
    const addProject = document.querySelector("#projectadd");

    addProject.addEventListener("click", addProjectToList);
}



function addProjectToList() {
    const newProject = project();
    const createproj = document.querySelector("#Project");
    createproj.showModal();
    const closeProjectmodal = document.querySelector("#Project>button");
    const projectName = document.querySelector("#name").innerHTML;


    closeProjectmodal.addEventListener("click", (e) => {
        e.preventDefault();
        newProject.createNewProj(projectName);
        createproj.close();
        console.log(newProject.getProject());
    })
}