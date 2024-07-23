import { getdata } from "./crud/getAll";
import { addtask } from "./crud/add";
import { deleteTask } from "./crud/delete";
import { editTask } from "./crud/update";

export const db = JSON.parse(localStorage.getItem("db")) || [];

getdata();

const addClick = document.querySelector(".addClick");
const deleteClick = document.querySelectorAll(".deleteClick");
const editClick = document.querySelectorAll(".editClick");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");
const add = document.querySelector(".add");
let index

addClick.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  addtask();
});

deleteClick.forEach((button, i) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTask(i);
  })
})

editClick.forEach((button, i) => {
  button.addEventListener('click', () =>{
    modal.showModal()
    index = i
  })
})

closeModal.addEventListener('click', ()=>{
    modal.close()
})

add.addEventListener('click',(e)=>{
    e.preventDefault()
    editTask(index)
})

