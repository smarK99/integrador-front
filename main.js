import { renderCategories } from "./src/services/categories";
import "./style.css";

renderCategories();

/*   POP UP   */

//Abrir popup - Agregar nuevo Producto
const btnAdd = document.getElementById("btn-add")

btnAdd.addEventListener("click", () => {
    openModal();
})

const openModal = () => {
    const modal = document.getElementById("modal")
    modal.style.display = "flex"
}

//Cerrar popup
const btnCancel = document.getElementById("btn-cancel")

btnCancel.addEventListener("click", () =>{
    closeModal();
})

const closeModal = () => {

    const modal = document.getElementById("modal")
    modal.style.display = "none"
}

//Guardar datos ingresados -- Agregar producto

const btnAccept = document.getElementById("btn-accept")
btnAccept.addEventListener("click",() => {
    handleSaveModifyElements();
})

const handleSaveModifyElements = () => {
    const nombre = document.getElementById("nombre-prod").value
    const imagen = document.getElementById("img-prod").value
    const precio = document.getElementById("precio-prod").value
    const categoria = document.getElementById("categoria-prod").value


    //Asigno los datos obtenidos a un objeto
    let object = {
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categoria
    }

    localStorage.setItem("producto", object)

    //console.log(object)

    closeModal();
}
