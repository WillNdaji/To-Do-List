const inputBox = document.getElementById("input-box")
const addBtn = document.getElementById("add-todo")
const container = document.querySelector(".container")
let ulEl = document.getElementById("ul-el");

const resetBtn = document.getElementById("reset-el")

inputBox.value = ""
const pendingEl = document.getElementById("pending-el")


let liArray = []
let iconBtn;



addBtn.addEventListener("click", function(){
  if (inputBox.value.trim() === ""){
    alert("Enter Valid Item")
    return;
  }

  let listItem = document.createElement("li")

  container.append(listItem)


   iconBtn = document.createElement("button")
iconBtn.className = "iconbtn"
const icon = document.createElement("i");
  icon.className = "fa-solid fa-trash"; 
iconBtn.append(icon)
  
  
  liArray.push(inputBox.value)
  listItem.innerHTML += `${liArray[liArray.length-1]} `;
  listItem.title = liArray[liArray.length - 1]
  listItem.append(iconBtn);


  console.log(liArray)
  inputBox.value =""
  
  resetBtn.style.display = 'block'


updatePendingTasks()
iconBtn.addEventListener("click", function() {
  listItem.remove();
  liArray.pop(); 
  updatePendingTasks(); 
  console.log("button clicked");
});

  listItem.addEventListener("click", function(){
  iconBtn.style.display = "block "
  console.log(iconBtn)

})


})
  function updatePendingTasks(){
    if(liArray.length === 1){
      pendingEl.innerHTML = `You have ${liArray.length} pending task `
    
    }
    else{
      pendingEl.innerHTML = `You have ${liArray.length} pending tasks `
    }
    
  }


  // ulEl.addEventListener("click", function(event) {
  //   if (event.target.classList.contains("iconbtn")) {
  //     const listItem = event.target.parentElement;
  //     listItem.remove();
  //     liArray.pop();
  //     updatePendingTasks()
  //     console.log("button clicked");
  //   }
  
    
  // });
console.log(iconBtn)

resetBtn.addEventListener("click", function(){
  
  inputBox.value = ''
  liArray = []

 

  pendingEl.innerHTML = `You have ${liArray.length} pending tasks `
  const listItems = container.querySelectorAll("li");
  for (const listItem of listItems) {
    listItem.remove();
  }
  console.log(liArray)

  resetBtn.style.display = "none"
})

inputBox.addEventListener("keydown", function(event){
  if (event.keyCode === 13) {
      addBtn.click();
  }
});

document.addEventListener("keydown", function(event){
  if (event.keyCode === 46) {
      resetBtn.click();
  }
});
