import { Todo } from "./todo.js";

export const project = function () {
  const projects = [
    {
      name: "DEFAULT",
      todo: [
        Todo("DEMO Todo1", "This is a demo for RED", "2025-11-18"),
        Todo("DEMO Todo1", "This is a demo for Yellow", "2025-11-30"),
        Todo("DEMO Todo1", "This is a demo for RED", "2025-12-18"),
      ],
    },
  ];

  //Adds Todo to the list if existing Project // Else creates a new Project
  const Add = function (todoname, des, due) {
    const addtoProject = function (name) {
      projects.forEach((proj) => {
        if (proj.name == name) {
          proj.todo.push(Todo(todoname, des, due));
        }
      });
    };

    return { addtoProject };
  };

  //removeProject Todo from the list of exisiting Project..
  const removeProject = function (name) {
    projects.forEach((project, index) => {
      if (project.name == name) {
        projects.splice(index, 1);
      }
    });
  };

  const createNewProj = function (name) {
    projects.push({
      name: name,
      todo: [],
    });
  };

  const addToProject = function (projName = "DEFAULT", todoname, des, due) {
    if (projName == "DEFAULT") {
      let default_project = Add(todoname, des, due);
      default_project.addtoProject(projName);
    } else {
      let exist;
      let new_project = Add(todoname, des, due);

      exist = projects.find((proj) => proj.name == projName);

      if (exist) {
        new_project.addtoProject(projName);
      } else {
        console.log("Project doesnt exist");
      }
    }
  };

  const deleteTodo = function (projName, title) {
    projects.forEach((proj) => {
      if (proj.name == projName) {
        let Todo = proj.todo;
        Todo.forEach((todos, index) => {
          if (todos.title == title) {
            proj.todo.splice(index, 1);
          }
        });
      }
    });
  };

  const getProject = function () {
    return projects;
  };

  return { addToProject, getProject, removeProject, deleteTodo, createNewProj };
};
