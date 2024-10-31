//Render vista categorias

export const renderCategories = () =>{
    
    const ulList = document.getElementById("list-filter");

    ulList.innerHTML = `
    <li id="todo"> Todos los productos </li>
    <li id="hamburguesas"> Hamburguesas </li>
    <li id="papas"> Papas </li>
    <li id="gaseosa"> Gaseosas </li>
    <li id="mayor-precio"> Mayor precio </li>
    <li id="menor-precio"> Menor precio </li>
    `;
    const lielements = ulList.querySelectorAll("li");
    lielements.forEach( e => {
        e.addEventListener('click', () => {
        console.log("click en ", e.id)
        });
    });
}