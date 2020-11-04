let foodList = [
  ["Fruta", "Manzana", "Banana", "Frutilla", "Melón"],
  ["Verduras", "Tomate", "Cebolla", "Morrón", "Ajo"],
  ["Carne", "Asado", "Pulpón", "Picada", "Corazón"]
];

function createFoodTable(list) {
  const FOOD_TABLE_HEAD = document.getElementById("food-table-head");
  const FOOD_TABLE_BODY = document.getElementById("food-table-body");
  
  function generateTableHead (list) {
    //gets elements [0][0], [1][0], [2][0]
    let text = `<tr>`;
      
    for (let i = 0; i < list.length; i++) {
      text += `<th>${list[i][0]}</th>`   
    }
    text += `</tr>`;
    FOOD_TABLE_HEAD.innerHTML = text;
  }

  function generateTableBody (list) {
    //iterates on [0][1], [0][2], ..., [0][4]
    //            [1][1], [1][2], ..., [1][4]
    // etc. to get individual elements after header.

    let text = `<tr>`;

    for (let i = 1; i < list[1].length; i++) {

      for (let j = 0; j < list.length; j++) {
        text += `<td>${list[j][i]}</td>`;
      }

      text += `</tr>`;
      FOOD_TABLE_BODY.innerHTML += text;
      text = `<tr>`;
    }
  }

generateTableHead(foodList);
generateTableBody(foodList);
}


createFoodTable(foodList);