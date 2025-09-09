const allTress=()=>{
    const url="https://openapi.programming-hero.com/api/plants"
    fetch(url)
    .then(res=>res.json())
    .then(json=> displayTrees(json.plants))
    const url2 = "https://openapi.programming-hero.com/api/categories"
    fetch(url2)
    .then(res=>res.json())
    .then(data=> displayCategories(data.categories))
}
const loadCategoryPlants =(id)=>{
    
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(json=> displaycategoryTree(json.plants))
}


// Modal Box JS Code

const modalBox=async(id)=>{
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    
    const res = await fetch(url)
    const detail = await res.json();
    displayModalBox(detail.plants)   
}
const displayModalBox=(box)=>{
    console.log(box)
    const treeModalBox = document.getElementById("treeModal")
    const modalbox = document.getElementById("modalContainer")
    const closeBtn = document.getElementById("closeModalBtn")
    modalbox.innerHTML = `
    <!-- Tree Name -->
    <h2 class="text-2xl font-bold text-green-700 mb-4">
      ${box.name}
    </h2>

    <!-- Tree Image -->
    <img src="${box.image}" alt="Tree Image"
         class="w-full h-48 object-cover rounded mb-4" />

    <!-- Category -->
    <p class="text-gray-700 mb-2">
      <strong>Category:</strong>${box.category}
    </p>

    <!-- Price -->
    <p class="text-gray-700 mb-2">
      <strong>price:</strong>৳${box.price}
    </p>

    <!-- Description -->
    <p id="treeDescription" class="text-gray-700 mb-4">
      <strong>Description:</strong>${box.description}
    </p> 
    `;
    treeModalBox.showModal();
    closeBtn.addEventListener('click',()=>{
        treeModalBox.close()

    })

}
const displaycategoryTree =(section)=>{
    // console.log(section)
    const treeAll = document.getElementById("all-trees");
    treeAll.innerHTML = "";
    // // 2.get every tree section
    for(let plant of section){
    //     // 3. create Element
       console.log(plant)
        const treeDiv = document.createElement("div");
        treeDiv.innerHTML = `
         <div class="flex flex-col max-w-sm rounded-xl ml-5 mb-10 p-4 shadow-md bg-white">
        <!-- Image Placeholder -->
        <img src="${plant.image}" alt="${plant.name}" class="h-40 w-full object-cover rounded-md mb-4" />

        <!-- Title -->
        <h2 onclick="modalBox(${plant.id})" class="text-lg font-semibold text-gray-800">${plant.name}</h2>

        <!-- Description -->
        <p class="text-sm text-gray-600 mt-1 flex-grow">${plant.description.length > 80 ? plant.description.substring(0, 80) + "...":plant.description}</p>

        <!-- Tag & Price -->
        <div class="flex items-center justify-between mt-3">
          <span class="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">${plant.category}</span>
          <span class="text-sm font-bold text-gray-700">৳${plant.price}</span>
        </div>

        <!-- Add to Cart Button -->
        <button class="w-full mt-4 bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition">Add to Cart</button>
      </div>
        `;
    //     // 4.append into container 
        treeAll.append(treeDiv);



    }
    

}
const displayCategories=(treeName)=>{
    // console.log(treeName);
    const treeCategory = document.getElementById("tree-category");
    treeCategory.innerHTML = ""
    for(let groupTree of treeName){
        console.log(groupTree);
        const TreeSection = document.createElement("div")
        TreeSection.innerHTML = `
         <button onclick ="loadCategoryPlants(${groupTree.id})" class="w-full text-center mb-3 px-3 py-1 text-gray-800 hover:bg-green-500 rounded">${groupTree.category_name}</button>
      
        `;
        treeCategory.append(TreeSection);


    }

};

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
         <div class="flex flex-col h-full max-w-sm rounded-xl ml-5 mb-10 p-4 shadow-md bg-white">
        <!-- Image Placeholder -->
        <img src="${plant.image}" alt="${plant.name}" class="h-40 w-full object-cover rounded-md mb-4" />

        <!-- Title -->
        <h2 onclick="modalBox(${plant.id})" class="text-lg font-semibold text-gray-800">${plant.name}</h2>

        <!-- Description -->
        <p class="text-sm text-gray-600 mt-1 flex-grow">${plant.description.length > 80 ? plant.description.substring(0, 80) + "...":plant.description};

        <!-- Tag & Price -->
        <div class="flex items-center justify-between mt-3">
          <span class="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">${plant.category}</span>
          <span class="text-sm font-bold text-gray-700">৳${plant.price}</span>
        </div>

        <!-- Add to Cart Button -->
        <button onclick="addCart(${plant.id})" class="w-full mt-4 bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition">Add to Cart</button>
      </div>
        `;
    //     // 4.append into container 
        treeAll.append(treeDiv);
        const addCart=(id)=>{
  console.log(id)
}    
        
    }
      
      
      
    // const addCart=()=>{
    // const url="https://openapi.programming-hero.com/api/plants"
    // fetch(url)
    // .then(res=>res.json())
    // .then(json=> displayTrees(json.plants))
    //   console.log(id)
    //   }
};


allTress()