import { project } from "./projects.js";

const display = (function () {

    const newProject = project();

    let list = newProject.getProject();

    function addProjectDisplay() {
        showProject();
        const addProject = document.querySelector("#projectadd");
        const addTodo = document.querySelector(".addNotes");

        addTodo.removeEventListener("click", addTodoToProject);
        addProject.removeEventListener("click", addProjectToList);

        addTodo.addEventListener("click", addTodoToProject);
        addProject.addEventListener("click", addProjectToList);

    }

    function addProjectToList() {
        const createproj = document.querySelector("#Project");
        createproj.showModal();
        const closeProjectmodal = document.querySelector("#closeProj");

        closeProjectmodal.removeEventListener("click", addproject);
        closeProjectmodal.addEventListener("click", addproject);

    }

    function addproject(e) {
        const createproj = document.querySelector("#Project");
        let projectName = document.querySelector("#name");
        console.log(projectName.value);
        e.preventDefault();
        newProject.createNewProj(projectName.value);
        showProject();
        createproj.close();
        console.log(newProject.getProject());
    }


    function addTodoToProject() {
        changeOptions();
        const createTodo = document.querySelector("#TodoCreator");
        createTodo.showModal();
        let closeModal = document.querySelector("#closeTodo")

        closeModal.removeEventListener("click", addtodo);
        closeModal.addEventListener("click", addtodo)
    }


    function addtodo(e) {
        e.preventDefault();
        const createTodo = document.querySelector("#TodoCreator");
        createTodo.showModal();
        let todoName = document.querySelector("#todo-name");
        let todoDescription = document.querySelector("#todo-description");
        let duedate = document.querySelector("#date");
        let projectList = document.querySelector("#list-projects");
        let currentChoice = projectList.value;
        console.log(currentChoice, todoName.value, todoDescription.value, duedate.value);

        if (currentChoice != 0 & todoName.value != 0) {
            newProject.addToProject(currentChoice, todoName.value, todoDescription.value, duedate.value);
            showNotes();
        }
        createTodo.close();
    }

    function changeOptions() {
        let projList = document.querySelector("#list-projects");
        projList.innerHTML = "";

        list.forEach((project) => {
            let options = document.createElement("option");
            options.value = project.name;
            options.innerHTML = project.name;
            projList.appendChild(options);
        })
    }

    function showProject() {
        const left = document.querySelector(".left");
        left.innerHTML = "";
        list.forEach((project) => {
            let projectname = document.createElement("li");
            projectname.innerHTML = project.name;
            left.appendChild(projectname);
        })

    }

    function showNotes(){
        const right= document.querySelector(".right");
        const listofProjects = document.querySelector(".left");
        right.innerHTML="";

        list.forEach((proj)=>{
            proj.todo.forEach((todos)=>{
                let li = document.createElement("li");
                let todoname = document.createElement("h3");
                let note = document.createElement("p");
                let due = document.createElement("p");
                todoname.innerHTML = todos.title;
                note.innerHTML = todos.note;
                due.innerHTML = todos.due;
                right.appendChild(li);
                li.appendChild(todoname);
                li.appendChild(note);
                li.appendChild(due);
            })
        })
        
    }

    return { addProjectDisplay }
})();


const displayProject = (function () {

    display.addProjectDisplay();

})();