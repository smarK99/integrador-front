//Render vista categorias

export const renderCategories = () =>{
    
    //Tomamos la lista ul
    const ulList = document.getElementById("list-filter");

    //Creamos elementos dentro de esta lista
    ulList.innerHTML = `
    <li id="todo"> Todos los productos </li>
    <li id="hamburguesas"> Hamburguesas </li>
    <li id="papas"> Papas </li>
    <li id="gaseosa"> Gaseosas </li>
    <li id="mayor-precio"> Mayor precio </li>
    <li id="menor-precio"> Menor precio </li>
    `;

    //Iteramos los items de la lista de arriba
    //Reconocemos x consola cada elemento clickeado
    //Llamamos a una funcion que le pone estilos al elemento clickeado
    const lielements = ulList.querySelectorAll("li");
    lielements.forEach( e => {
        e.addEventListener('click', () => {
            console.log("click en ", e.id)
            handleClick(e);
        });
    });

    //Verificamos el elemento activo o clickeado
    //Para agregarle una clase con estilos
    const handleClick = eclicked => {
        lielements.forEach(e => {
            if (e.classList.contains("li-active")) {
                e.classList.remove("li-active");
            }else{
                if(eclicked === e){
                    e.classList.add("li-active");
                }
            }
        });
    };
}