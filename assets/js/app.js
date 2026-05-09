
const cl=console.log;

const stddata=document.getElementById("stddata");

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


let result='';
function templating(ele){
      ele.forEach((o,i) => {
        result +=`<tr>
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


function onStdRead(){

}





stddata.addEventListener('submit',onStdRead)