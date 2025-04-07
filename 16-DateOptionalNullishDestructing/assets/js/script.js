
// Task 1
let date = new Date();
let saat = date.getHours();


if (saat >= 8 && saat < 14) {
    alert("Code Academyde dersde ol");
} else if (saat >= 14 && saat < 19) {
    alert("Isdirahet et");
} else if (saat >= 19 && saat < 24) {
    alert("Tasklari yaz ve recordlara bax");
} else {
    alert("Yat");
}
// Task 2
const employee = {
    name: "Farid Ali",
    department: "Engineering",
    contact: {
      email: "farid.ali@example.com",
      phone: "555-1234",
      emergencyContact: {
        name: "Far For",
        relation: "Spouse"
      }
    }
  };
  
  
  const { name, department } = employee;
  
 
  const { email, phone } = employee.contact;
  
  
  const { name: emergencyName, relation } = employee.contact.emergencyContact;
  
  console.log({name,department,email,phone,emergencyName,relation});

//   Task 3.1
const apiResponse = [
    {
      id: 1,
      title: "JavaScript əsaslari",
      author: "Səid Məmmədov",
      stats: [2500, 150, 30] 
    },
    {
      id: 2,
      title: "Array Destructuring",
      author: "Leyla Əliyeva",
      stats: [1800, 220, 45]
    },
    {
      id: 3,
      title: "Müasir JavaScript",
      author: "Tural Həsənli",
      stats: [3200, 380, 70]
    }
  ];
  
 
  const { 
    id, 
    title, 
    author, 
    stats: [views, likes, comments] 
  } = apiResponse[1];
  
 
  console.log(`id: ${id}, müellif:${author},meqale:${title},oxunma:${views},beyenme:${likes},beyenme:${comments}`);

//   Task 3.2

//   const apiResponse arrayi ile const objecti 3.1 taskinin evveli ile eynidi
  
  console.log(`oxunma:${views},beyenme:${likes},serh:${comments}`);

//   Task 3.3

//   evvelki iki taskla oxsardi


