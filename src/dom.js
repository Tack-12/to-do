import { project } from "./projects.js";





const display = (function () {

    const newProject = project();

    let list = newProject.getProject();

    function addProjectDisplay() {

        const listProject = document.querySelector(".left");
        const addProject = document.querySelector("#projectadd");
        const addTodo = document.querySelector(".addNotes");

        addTodo.addEventListener("click", addTodoToProject);
        addProject.addEventListener("click", addProjectToList);

    }



    function addProjectToList() {
        const createproj = document.querySelector("#Project");
        createproj.showModal();
        const closeProjectmodal = document.querySelector("#closeProj");
        let projectName = document.querySelector("#name").innerHTML;


        closeProjectmodal.addEventListener("click", (e) => {
            e.preventDefault();
            newProject.createNewProj(projectName);
            createproj.close();
            console.log(newProject.getProject());
        })
    }

    function addTodoToProject() {


        const createTodo = document.querySelector("#TodoCreator");
        createTodo.showModal();
        let todoName = document.querySelector("#todo-name");
        let todoDescription = document.querySelector("#todo-descriptione");
        let duedate = document.querySelector("#date");
        let projectList = document.querySelector("#list-projects");
        let closeModal = document.querySelector("#closeTodo")

        projectList.addEventListener("click", changeOptions);
        let currentChoice = projectList.value;
        newProject.addToProject(currentChoice, todoName, todoDescription, duedate);


        closeModal.addEventListener("click", (e) => {
            e.preventDefault();
            createTodo.close();
        })

    }

    function changeOptions() {
        let projList = document.querySelector("#list-projects");

        list.forEach((project) => {
            let options = document.createElement("option");
            options.value = project.name;
            options.innerHTML = project.name;


        })
    }

    return { addProjectDisplay }
})();


const displayProject = (function () {

    display.addProjectDisplay();

})();