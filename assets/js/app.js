
const cl=console.log;

const stddata=document.getElementById("stddata");
const stdContainer=document.getElementById("stdContainer");
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const email=document.getElementById("email");
const contact=document.getElementById("contact");



const studentData = [
  {
    id: "1754723401001",
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul.sharma@gmail.com",
    contact: "9876543210"
  },
  {
    id: "1754723401002",
    firstName: "Priya",
    lastName: "Patil",
    email: "priya.patil@gmail.com",
    contact: "9123456780"
  },
  {
    id: "1754723401003",
    firstName: "Aman",
    lastName: "Verma",
    email: "aman.verma@gmail.com",
    contact: "9988776655"
  },
  {
    id: "1754723401004",
    firstName: "Sneha",
    lastName: "Joshi",
    email: "sneha.joshi@gmail.com",
    contact: "9090909090"
  }
];


function templating(ele){
      let result='';
      ele.forEach((o,i) => {
        result +=`<tr id='${o.id}'>
                                        <td>${i+1}</td>
                                        <td>${o.firstName} ${o.lastName}</td>
                                        <td>${o.email}</td>
                                        <td>${o.contact}</td>
                                        <td><i type="button" class="fa-solid fa-pen-to-square text-primary fa-2x"></i></i></td>
                                        <td><i type="button" class="fa-solid fa-trash-can text-danger fa-2x"></i></td>
                                    </tr>`
        
 } );
     stddata.innerHTML=result;
}
templating(studentData)


function onstdSubmit(ele){
    ele.preventDefault();

    //create a new std obj

    let NEW_OBJ ={
        firstName:fname.value,
        lastName:lname.value,
        email:email.value,
        contact:contact.value,
        id:Date.now().toString()
    }
    
    //add new obj in db

    studentData.push(NEW_OBJ);
    stdContainer.reset()
    
    //add data in ui

    let tr = document.createElement('tr');
    tr.innerHTML=`
                                        <td>${studentData.length}</td>
                                        <td>${NEW_OBJ.firstName} ${NEW_OBJ.lastName}</td>
                                        <td>${NEW_OBJ.email}</td>
                                        <td>${NEW_OBJ.contact}</td>
                                        <td><i type="button" class="fa-solid fa-pen-to-square text-primary fa-2x"></i></i></td>
                                        <td><i type="button" class="fa-solid fa-trash-can text-danger fa-2x"></i></td>
                                   `

    
    stddata.append(tr);
    Swal.fire({
          title: "new student data added successfully!",
          icon: "success",
          timer:3000
    });
}





stdContainer.addEventListener('submit',onstdSubmit)