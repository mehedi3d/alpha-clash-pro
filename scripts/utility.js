function hideelimentbyid(elimentid){
    const d =document.getElementById(elimentid);
    d.classList.add('hidden');
}
function removealimentbyid(elimentid){
    const b = document.getElementById(elimentid);
    b.classList.remove('hidden')

  
}
function removebacgroundcolorbyid(elimentid){
    const element =document.getElementById(elimentid);
    element.classList.remove('bg-red-400')
}
function addbgcid(elimentid){
    const element = document.getElementById(elimentid);
    element.classList.add('bg-red-400')
}
function getrendomword(){
    const alphabeatstring= 'abcdefghijklmnopqrstuvwxyz';
   const alphabets =alphabeatstring.split('');
//    console.log(alphabets);

   const randomnum= Math.random()*25;
   const index = Math.round(randomnum);
   

   const alphabet = alphabets[index];
//    console.log(alphabet);
   return alphabet;
}