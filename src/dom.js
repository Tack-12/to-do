import { createProj } from "./projects.js";


(function display (){
    const addProj = document.querySelector("#projectadd"); 

   function addProjDisplay (){
     addProj.addEventListener("click", addProject)
   } 

   addProjDisplay();
})()


function addProject(){
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    const doneButton = document.querySelector("dialog>button");
    
    doneButton.addEventListener(("click"), (e)=>{
        e.preventDefault();
        const name = document.querySelector("#name").value;

        if (name != ""){
            createProj(name);
            let projdiv = document.createElement("div");          
            document.querySelector(".left").appendChild(projdiv);
            projdiv.textContent = name;
        }
        else{
            
        }
    })
}
