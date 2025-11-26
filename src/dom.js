import { project } from "./projects.js";

const display = (function () {

    const newProject = project();

    function addProjectDisplay() {
        showProject();
        showNotes();
        const addProject = document.querySelector("#projectadd");
        const addTodo = document.querySelector(".addNotes");

        addTodo.removeEventListener("click", addTodoToProject);
        addProject.removeEventListener("click", addProjectToList);

        addTodo.addEventListener("click", addTodoToProject);
        addProject.addEventListener("click", addProjectToList);

        // addTodo.removeEventListener("click",showNotes);
        // addTodo.addEventListener("click", showNotes);

        // addProject.removeEventListener("click", showProject);
        // addProject.addEventListener("click", showProject);

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

        if (currentChoice != "" & todoName.value != "") {
            newProject.addToProject(currentChoice, todoName.value, todoDescription.value, duedate.value);
            showNotes();
        }
        createTodo.close();
    }

    function changeOptions() {
        let projList = document.querySelector("#list-projects");
        projList.innerHTML = "";

        newProject.getProject().forEach((project) => {
            let options = document.createElement("option");
            options.value = project.name;
            options.innerHTML = project.name;
            projList.appendChild(options);
        })
    }

    function showProject() {
        const left = document.querySelector(".left");
        left.innerHTML = "";
        newProject.getProject().forEach((project) => {
            let li = document.createElement("li")
            let projectname = document.createElement("div");
            let closebutton = document.createElement("button");
            closebutton.id = "removeProject";
            projectname.innerHTML = project.name;
            closebutton.innerHTML = "X";
            left.appendChild(li);
            li.appendChild(projectname);
            li.appendChild(closebutton);
        })
        removeProject();
    }


    function showNotes() {
        const listofProjects = document.querySelectorAll(".left  div");

        listofProjects.forEach((listOptions) => {
            let value = listOptions.innerHTML;
            listOptions.addEventListener("click", () => { ifPressed(value) })
        })
    }

    function ifPressed(value) {

        const right = document.querySelector(".right");
        right.innerHTML = "";

        newProject.getProject().forEach((proj) => {
            if (proj.name == value) {
                proj.todo.forEach((todos) => {
                    let li = document.createElement("li");
                    let leftcontainer = document.createElement("div");
                    let close = document.createElement("button");
                    close.innerHTML = "X";
                    close.id = "removeNote";
                    let todoname = document.createElement("h3");
                    let note = document.createElement("p");
                    let due = document.createElement("p");
                    todoname.innerHTML = todos.title;
                    todoname.id = proj.name;
                    note.innerHTML = todos.note;
                    due.innerHTML = todos.due;
                    right.appendChild(li);
                    li.appendChild(leftcontainer);
                    li.appendChild(close);
                    leftcontainer.appendChild(todoname);
                    leftcontainer.appendChild(note);
                    leftcontainer.appendChild(due);
                })
            }
        })
        removeNotes();
    }

    return { addProjectDisplay }


    function removeNotes() {
        const removebuttons = document.querySelectorAll('#removeNote');

        removebuttons.forEach((btn) => {
            btn.addEventListener("click", removingNotes)
        })
    }

    function removingNotes(e) {
        e.preventDefault();
        let todo = e.target.previousSibling;
        let todo_name = todo.firstElementChild.innerHTML
        let project_name = todo.firstElementChild.id;
        console.log(todo_name, project_name);
        newProject.deleteTodo(project_name, todo_name);
        showNotes();
    }

    function removeProject() {
        const removebuttons = document.querySelectorAll('#removeProject');

        removebuttons.forEach((btn) => {
            btn.addEventListener("click", removingProjects)
        })
    }

    function removingProjects(e) {
        e.preventDefault();
        let project = e.target.previousSibling;
        let project_name = project.innerHTML;

        newProject.removeProject(project_name);
        showProject();
    }
})();
const displayProject = (function () {

    display.addProjectDisplay();

})();