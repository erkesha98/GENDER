
'use strict';
function getGender(){
    const nameInput=document.getElementById("inputName");
    const result=document.getElementById("result");

    const userName=nameInput.value;



fetch(`https://api.genderize.io?name=${userName}`)
.then(response=>response.json())
.then(data=>{

    result.textContent=`${userName} is a ${data.gender} name probability is ${data.probability} out of 1`;
})
.catch(error=>{
    console.error("Error:",error);
    
});

}