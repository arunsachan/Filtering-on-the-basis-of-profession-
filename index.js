 // [{id:1,name:""john"",age:""18"",profession:""developer""},{id:2, name:""jack"",age:""20"", profession:""developer""},{id:3, name:""karen"", age:""19"",profession:""admin""}]

const usersList = [
    {
        id:1,
        name:"Arun",
        age:18,
        profession:"developer"
    },

    {
        id:2, 
        name:"Anand",
        age:20, 
        profession:"developer"  
    },

    {
        id:3, 
        name:"Hanu", 
        age:19,
        profession:"admin" 
    }
]

const selected = document.getElementsByTagName("select")[0];
const container= document.getElementById("cards-container");
const form= document.getElementById('forum');

const filterBtn = document.getElementById("filter");

function filterUsers(){
    const selectValue=  selected.value;
     if(!selectValue){
        alert("Select a profession")
     }

     container.innerHTML="";
     const result= usersList.filter((user)=>{
          if(user.profession == selectValue) return true;
          return false;
     })

     const createParaWithInnerText = (label, value)=>{
        const p= document.createElement('p');
        p.innerText= `${label} : ${value}`
        return p;
     }
     
     result.forEach((user, index)=>{
        const div= document.createElement('div');
        div.className= "user-card";
        const p1= document.createElement('p');
        p1.innerText= (index+1)+ ".";
        let paraList=[p1];
        for(let i in user){
            if(i !== "id")
            paraList.push(createParaWithInnerText(i, user[i]))
        }
        paraList.forEach((p)=>{
            div.appendChild(p);
        })     
        container.appendChild(div);
     })
}

function addNewUser(e){
     e.preventDefault();
    //  the below e.target.age.value will give us the value of the age input text area whatever we will type inside that input area
    //  console.log(e.target.age.value);

    const user = {
        name : e.target["name"].value,
        age: e.target["age"].value,
        profession: e.target["profession"].value
    }

    usersList.push(user)
}
filterBtn.addEventListener("click", filterUsers )

form.addEventListener("submit", addNewUser);