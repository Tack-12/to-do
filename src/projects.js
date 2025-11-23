import { Todo } from "./todo.js"

const project = function () {
    const projects = [{
        name: "DEFAULT",
        todo: [Todo("DEMO Todo1", "This is a demo for RED", "2025-11-18"),
        Todo("DEMO Todo1", "This is a demo for Yellow", "2025-11-25"),
        Todo("DEMO Todo1", "This is a demo for RED", "2025-12-18")
        ],
    }]

    //Adds Todo to the list if existing Project // Else creates a new Project 
    const Add = (function (todoname, des, due) {

        const createNewProj = function (name) {
            projects.push({
                name: name,
                todo: [],
            })
        }

        const addtoNew = function (name) {
            projects.forEach((proj) => {
                if (proj.name == name) {
                    proj.todo.push(Todo(todoname, des, due));
                }
            })
        }

        return { createNewProj, addtoNew };
    });

    //Remove Todo from the list of exisiting Project..
    const Remove = function (name) {
        projects.forEach((project, index) => {
            if (project.name == name) {
                projects.splice(index, 1);
            }
        })
    }


    const createProject = function (projName = "DEFAULT", todoname, des, due) {

        if (projName == "DEFAULT") {
            let default_project = Add(todoname, des, due);
            default_project.addtoNew(projName);
        }
        else {
            let exist;
            let new_project = Add(todoname, des, due);

            exist = projects.find((proj) => (proj.name == projName))

            if (exist) {
                new_project.addtoNew(projName);
            }
            else {
                new_project.createNewProj(projName);
                new_project.addtoNew(projName)
            }
        }
    }


    const getProject = function () {
        return projects
    }



    return { createProject, getProject , Remove }
}

let newProject = project();
newProject.createProject("NewProject", "todo1", "this is todo1", "2025-12-11");
newProject.createProject("NewProject", "todo2", "this is todo2", "2025-12-15");
newProject.createProject("NewPRoj2", "todo1", "this is todo1", "2025-12-11");

newProject.Remove("NewProject");

console.log(newProject.getProject());