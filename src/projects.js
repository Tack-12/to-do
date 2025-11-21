import { endOfDay } from "date-fns";
import { Todo } from "./todo.js";



function Project(newname) {

    const name = newname;
    const dateCreated = endOfDay((new Date()), 'yyyy-MM-dd')
    const listNotes = [];

    const addNotes = function (todo) {
        listNotes.push(todo);
    }

    const removeNotes = function (notetitle) {
        listNotes.forEach((notes, index) => {
            if (notes.title == notetitle) {
                listNotes.splice(index, 1);
            }
        })
    }

    const getProject = function () {
        return { name, listNotes, dateCreated };
    }

    return { addNotes, removeNotes, getProject }
};


function createProj( todo) {
    const listProj = [];

    const addDefaultProj = function () {
        const defProj = new Project("Default Project");
        defProj.addNotes(new Todo("Todo1", "this is a demo", "2025-11-23"));
        defProj.addNotes(new Todo("Todo1", "this is a demo", "2025-11-23"));
        defProj.addNotes(todo);

        listProj.push(defProj.getProject());
    }

    const addNewProj = function (name ) {

        const createProj = new Project(name);
        createProj.addNotes(todo);

        listProj.push(createProj.getProject());
    }

    const getProj = function () {
        return (listProj);
    }

    return { addNewProj, addDefaultProj, getProj};
}

const proj = new createProj(new Todo("Todo1", "this is a demo", "2025-11-23"));
proj.addDefaultProj();
proj.addNewProj("New Proj")
console.log(proj.getProj());





