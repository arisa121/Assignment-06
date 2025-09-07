const allTress=()=>{
    const url="https://openapi.programming-hero.com/api/categories"
    fetch(url)
    .then(res=>res.json())
    .then(json=> displayTrees(json.categories))
}
const displayTrees=(trees)=>{
    // console.log(trees)
    
    // 1.get the container & empty
    const treeAll = document.getElementById("all-trees");
    treeAll.innerHTML = "";
    // // 2.get every tree section
    for(let plant of trees){
    //     // 3. create Element
       console.log(plant)
        const treeDiv = document.createElement("div");
        treeDiv.innerHTML = `
        <button class="btn btn-success">${plant.category_name}</button>`;
    //     // 4.append into container 
        treeAll.append(treeDiv);



    }

   

};
allTress()