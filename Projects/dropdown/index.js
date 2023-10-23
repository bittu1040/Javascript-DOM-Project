const selectName= document.getElementById('name');
const selectedName= document.getElementById('selectedName');
const selectColor = document.getElementById('colors');


selectedName.innerHTML=selectName.value 
selectedName.style.backgroundColor=selectColor.value;

selectName.addEventListener('change', (data)=>{
    selectedName.innerHTML=data.target.value;
})

selectColor.addEventListener('change', (data)=>{
    selectedName.style.backgroundColor= data.target.value;
})


