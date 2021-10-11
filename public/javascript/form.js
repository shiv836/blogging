

  let db=firebase.database().ref('users');


document.getElementById("myForm").addEventListener('submit',submitForm);
function submitForm(e)
{
    e.preventDefault();
    let name=getInputVal('iname');
    let age=getInputVal('iage');
    let number=getInputVal('inumber');
    let mail=getInputVal('imail');
    saveMessage(name,age,number,mail);

    document.querySelector('.alert').style.display='block';

    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    },5000);
    window.alert("successful submission! view your details below contact me section");
    document.getElementById("myForm").reset();

    let namedetail= document.getElementById("dname");
    namedetail.classList.add("done");
   
    namedetail.innerText=name;
    let agedetail= document.getElementById("dage");
    agedetail.classList.add("done");
    
    agedetail.innerText=age;
    let numberdetail= document.getElementById("dnumber");
    numberdetail.classList.add("done");
   
 
    numberdetail.innerText=number;
    let maildetail= document.getElementById("demail");
    
    maildetail.innerText=mail;
    maildetail.classList.add("done");
  
}
function getInputVal(id)
{
    return document.getElementById(id).value; 
}
function saveMessage(name,age,number,mail)
{
let newMessageRef=db.push();
newMessageRef.set(
    {
        Name:name,
        Age:age,
        Number:number,
        Mail:mail
    }
)
}






