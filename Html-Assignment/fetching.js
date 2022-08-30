fetch("https://reqres.in/api/users/")
.then((response)=>
{
  console.log(response);
 return  response.json();
}).then((data)=>{
  console.log(data.data);

  let tabledata="";
  data.data.map((values)=>{
    tabledata +=`
    <tr>
    <td>${values.id}</td>
    <td>${values.email}</td>
    <td>${values.first_name}</td>
    <td>${values.last_name}</td>
    <td><img src="${values.avatar}"</td></td>
  </tr>`
  });
  document.getElementById("tbody").innerHTML=tabledata;
})


