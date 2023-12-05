function employee(_name,_age,_salary,_department)
{
  this.name=_name;
  this.age=_age;
  this.salary=_salary;
  this.department=_department;
  /*this.toString=function(){
      console.log("name: "+this.name+" age: " +this.age+" department: "+this.department+" salary: "+salary);
  }*/

}
////////////////////////
function drawRow()
{
    row=document.createElement("tr");
    for(key in emp)
     {
       cell=document.createElement("td");
       cell.innerText=emp[key];
       row.appendChild(cell);
     }
     var tdEle=document.createElement("td");
     var delEle=document.createElement("button");
     delEle.innerText="delete";
     tdEle.appendChild(delEle);
     row.appendChild(tdEle);
     table.appendChild(row);
     delEle.addEventListener("click",function(){
         var x=this.parentElement.parentElement;
        //  console.log(x);
         table.removeChild(x);
         emps.splice(x.rowIndex,1);
      });
}
function drawHeader()
{
   var row=document.createElement("tr");
   var cell1=document.createElement("td");
    cell1.innerText="Name";
    cell1.style.fontWeight="bold";
    row.appendChild(cell1);
   var cell2=document.createElement("td");
    cell2.innerText="Age";
    cell2.style.fontWeight="bold";
    row.appendChild(cell2);
    var cell3=document.createElement("td");
    cell3.innerText="Salary";
    cell3.style.fontWeight="bold";
    row.appendChild(cell3);
    var cell4=document.createElement("td");
    cell4.innerText="Department";
    cell4.style.fontWeight="bold";
    row.appendChild(cell4);
    table.appendChild(row);
}
//////////////////////////////
function drawTable(emps)
{
    table.innerHTML="";
    drawHeader();
    for(var i=0; i<emps.length; i++)
    {
      row=document.createElement("tr");
      for(key in emps[i])
      {
         cell=document.createElement("td");
         cell.innerText=emps[i][key];
         row.appendChild(cell);
      }
       var tdEle=document.createElement("td");
       var delEle=document.createElement("button");
       delEle.innerText="delete";
       tdEle.appendChild(delEle);
       row.appendChild(tdEle);
       table.appendChild(row);
       delEle.addEventListener("click",function(){
         var x=this.parentElement.parentElement;
         table.removeChild(x);
         emps.splice(x.rowIndex,1);
      });
    } 
}
//////////////////////////
var emps=[];
var filtered=[];
var emp=null;

window.onload=function(){
    table=document.getElementsByName("employees")[0];
    addBtn=document.getElementById("mybtn");
    eSort=document.getElementById("Sort");
    eFilter=document.querySelectorAll("select")[2];
    //add event
    addBtn.addEventListener("click",function(){
        if(name_flag&&age_flag&&salary_flag)
        {
            ename=document.getElementsByName("name")[0].value;
            eage=document.getElementsByName("age")[0].value;
            esalary=document.getElementsByName("salary")[0].value;
            edepartment=document.querySelectorAll("select")[0].value;
            emp=new employee(ename.toLowerCase(),eage,esalary,edepartment);//,edepartment.toLowerCase());
            if(emps.length==0)
            {
              table.innerHTML="";
              drawHeader();
            }
            emps.push(emp);
            drawRow();
        }
        });
        //sort event
        eSort.addEventListener("change",function(){
            emps.sort(function(a,b){
               if(a[eSort.value]>b[eSort.value])
               {
                 return 1;
               }
               else if(a[eSort.value]<b[eSort.value])
               {
                return -1;
               }
               else(a[eSort.value]==b[eSort.value])
               {
                 return 0;
               }
            });
            drawTable(emps);
          });
          // filter event
          eFilter.addEventListener("change",function(){
              switch(eFilter.value)
              {
                  case "1":filtered=emps.filter(function(a){
                         return a.age>50;
                        });
                        drawTable(filtered);
                  break;
                  case "2":filtered=emps.filter(function(a){
                        return a.age<50;
                        });
                        drawTable(filtered);
                  break;
                  case "3":filtered=emps.filter(function(a){
                        return a.age==50;
                        });
                        drawTable(filtered);
                  break;
                  case "4":
                        drawTable(emps);
                  break;      
              }
              
          });
          ///////////////////////////////
          //validation
          var name_flag=false;
          var age_flag=false;
          var salary_flag=false;
         name_text= document.getElementsByName("name")[0];
         name_text.addEventListener("keypress",function(eventObj){
             if(!isNaN(eventObj.key))
             {
                eventObj.preventDefault();
                name_flag=false;
             }
         });
         name_text.addEventListener("blur",function(){
             if(name_text.value=="")
             {
                document.getElementById("name_span").innerText="name should be string and not empty";
                name_flag=false;
             }
             else
             {
                document.getElementById("name_span").innerText="";
                name_flag=true;
             }
         });
         ////////////////////////////////
         age_text=document.getElementsByName("age")[0];
         age_text.addEventListener("keypress",function(eventObj){
            if(isNaN(eventObj.key))
            {
               eventObj.preventDefault();
               age_flag=false;
            }
         });
         age_text.addEventListener("blur",function(){
            if(age_text.value=="")
            {
               document.getElementById("age_span").innerText="age must be between 25 and 60";
               age_flag=false;
            }
            if(age_text.value<25 || age_text>60)
            {
                document.getElementById("age_span").innerText="age must be between 25 and 60";
                age_flag=false;
              
            }
            else
            {
                document.getElementById("age_span").innerText="";
                age_flag=true;
            }
        });
        //////////////////////////////////
        salary_text=document.getElementsByName("salary")[0];
        salary_text.addEventListener("keypress",function(eventObj){
           if(isNaN(eventObj.key))
           {
              eventObj.preventDefault();
              salary_flag=false;
           }
        });
        salary_text.addEventListener("blur",function(){
           if(salary_text.value=="")
           {
              document.getElementById("salary_span").innerText="salary must be a number";
              salary_flag=false;
           }
           else
           {
               document.getElementById("salary_span").innerText="";
               salary_flag=true;
           }
       });


    };


// function student(_name,_dept,_age){
//     this.name=_name;
//     this.dept=_dept;
//     this.age=_age;
// }
// var table=document.querySelector("table");
// ///////////////
// var stds=new student();
// function drawRow(){
//     row=document.createElement("tr");
//     for(key in std){
//         cell=document.createElement("td");
//         cell.innerText=std[key];
//         row.appendChild(cell);
//     }
//     var tdEle=document.createElement("td");
//     var delEle=document.createElement("button");
//     // console.log(table);
//     delEle.innerText="Delete";
//     tdEle.appendChild(delEle);
//     row.appendChild(tdEle);
//     table.appendChild(row);
//     // console.log(delEle.parentElement.parentElement);
//     delEle.addEventListener("click",function(){
//         var x=this.parentElement.parentElement;
//         // console.log(x);
//         table.removeChild(x);
//         stds.splice(x.rowIndex,1);
//      });

// }

// drawRow()

// //////////////

// function drawHeader()
// {
//    var row=document.createElement("tr");
//    var cell1=document.createElement("td");
//     cell1.innerText="Name";
//     row.appendChild(cell1);
//    var cell2=document.createElement("td");
//     cell2.innerText="Dept";
//     row.appendChild(cell2);
//     var cell3=document.createElement("td");
//     cell3.innerText="Age";
//     row.appendChild(cell3);
//     // var cell4=document.createElement("td");
//     // cell4.innerText="department";
//     // row.appendChild(cell4);
//     table.appendChild(row);
// }
// // drawHeader()

// ////////////////////

// function drawTable(std)
// {
//     table.innerHTML="";
//     drawHeader();
//     for(var i=0; i<std.length; i++)
//     {
//       row=document.createElement("tr");
//       for(key in std[i])
//       {
//          cell=document.createElement("td");
//          cell.innerText=emps[i][key];
//          row.appendChild(cell);
//       }
//        var tdEle=document.createElement("td");
//        var delEle=document.createElement("button");
//        delEle.innerText="delete";
//        tdEle.appendChild(delEle);
//        row.appendChild(tdEle);
//        table.appendChild(row);
//        delEle.addEventListener("click",function(){
//          var x=this.parentElement.parentElement;
//          table.removeChild(x);
//          stds.splice(x.rowIndex,1);
//       });
//     } 
// }
// ////////////////////
// var stds=[];
// var std=null;
// var name_flag=false;
// var dept_flag=false;
// var age_flag=false;
// window.onload=function(){
//     table=document.getElementsByName("students")[0];
//     addBtn=document.getElementById("mybtn");
//     // eSort=document.getElementById("Sort");
//     // eFilter=document.querySelectorAll("select")[2];
//     //add event
//     addBtn.addEventListener("click",function(){
//         if(name_flag&&dept_flag&&age_flag)
//         {
//             ename=document.getElementsByName("name")[0].value;
//             edept=document.getElementsByName("dept")[0].value;
//             eage=document.getElementsByName("age")[0].value;
//             // edepartment=document.querySelectorAll("select")[0].value;
//             std=new student(ename.toLowerCase(),edept.toLowerCase(),eage);
//             if(stds.length==0)
//             {
//               table.innerHTML="";
//               drawHeader();
//             }
//             stds.push(std);
//             drawRow();
//         }
//     });
// }

// var num1 = +(prompt('Enter the first number '));
// var num2 = +(prompt('Enter the second number '));
// var sum = num1 + num2;
// var multi = num1 * num2;
// console.log("Sum of " + num1 +" and "+num2+" = "+sum);
// console.log("Multi of " + num1 +" and "+num2+" = "+multi);
// console.log("Odd Numbers :- ")
// for(var i=sum;i<=multi;i++)
// {
//     if(i%2!=0)
//     {
//         console.log(i);
//     }
    
// }
// var arr=[];
// var numOfStd = +(prompt('Enter number of students : '));
// for(var i=1;i<=numOfStd;i++){
//     var namestd = prompt('Enter name of student'+i);

//     var degreestd = +(prompt('Enter degree of student'+i));

//     console.log(arr.concat(namestd,degreestd));
// }



// const nums1 = [3, 2, 3];
// nums1.sort(); 
// var mj1=[];
// console.log(nums1);
// var l1=Math.round(nums1.length/2);
// for(var i=0;i<nums1.length;i++){
//     for(var j=i+1;j<=nums1.length;j++){
//         if(nums1[i]==nums1[j])
//         mj1.push(nums1[i]);
//     }
// }
// console.log("Majority = " +mj1);
// // console.log("length1 = "+l1);
// const nums2 = [2, 2, 1, 1, 1, 2, 2];
// nums2.sort();
// var mj2=[];
// console.log(nums2);
// var l2=Math.round(nums2.length/2);
// for(var i=0;i<nums2.length;i++){
//     for(var j=i+1;j<=nums2.length;j++){
//         if(nums2[i]==nums2[j])
//         mj2.push(nums2[i]);
//     }
// }
// console.log(mj2);
// console.log("length2 = "+l2);



// var num1 = +(prompt('Enter the first number '));
// var num2 = +(prompt('Enter the first number '));
// console.log("Sum of " + num1 +" and "+num2+" = "+(num1+num2));
// console.log("Sub of " + num1 +" and "+num2+" = "+(num1-num2));
// console.log("Muli of " + num1 +" and "+num2+" = "+(num1*num2));
// console.log("Div of " + num1 +" and "+num2+" = "+(num1/num2));












// document.write("Welcome");
// document.getElementById("div1").innerHTML="Hi from div1";
// document.getElementById("btn1").onclick=function(){
//     document.getElementById("div1").innerHTML="from btn1";
//     alert("from btn1");
//     confirm("Are you sure!");
//     prompt("Enter your grade");
// }
// console.log("hi")
// var x=100;
// var y=200;
// var z=true;
// var arr=["Ahmed",30,true,"Aliaa",25];
// var o={name:"Aliaa",
//         city:"Cairo",
//         age:null}
// console.log("x+y="+(x+y));
// console.log(typeof arr[3])
// console.log(typeof o.age);

// array=[1,2,3,4,10,1];
// var sum=0;
// for(var i=0;i<array.length;i++){
//         sum+=array[i];
// }
// console.log("Sum = "+ sum);

// var data=[{
//         name:"aliaa",
//         address:"Mans",
//         age:27
// },
// {
//         name:"aliaa",
//         address:"Mans",
//         age:27
// }]
// var data={
//         name:"aliaa",
//         address:"Mans",
//         age:27
// }
// console.log( data)
// var data = JSON.stringify(data)
// // document.getElementById("div").innerHTML=data
// var data=JSON.parse(data)
// data[0].age=40
// console.log( data)
// var data = JSON.stringify(data)
// document.getElementById("div").innerHTML=data

// var str="aliaa ahmed 25"
// console.log( str)
// if(str.indexOf("aya") !=-1){
//         console.log("Exist")
// }
// else
// console.log("NOt")
// var s=str.split(" ")
// document.getElementById("div").innerHTML=s
// var s=str.slice(2,7)
// document.getElementById("div").innerHTML=s
// var s=str.toLocaleUpperCase()
// document.getElementById("div").innerHTML=s
// str=str.trim()
// s=str.indexOf("aliaa")
// console.log(str.indexOf("25"))
// document.getElementById("div").innerHTML=str

// var arr=["aliaa","ahmed",25,null]
// var arr1=["Sara","Noha"]
// console.log(typeof arr[4])
//  ar=arr.join("ola")
// ar=arr.pop()
// ar=arr.push("Ola")
// arr.shift()
// arr.unshift("Sara")
// a= arr.concat(arr1)
// a=arr.slice(0,3)
//  console.log(a)

// console.log(Math.floor(Math.sqrt(108)))
// document.getElementById("div").innerHTML=Math.floor(Math.sqrt(108))

// var x1=100;
// var x1=1000;
// console.log(x1);
// let x2=200;
// let x2=2000;
// console.log(x2);
// x3=300;
// console.log(window.x1); /* global scope */
// console.log(window.x2); /* block scope */
// console.log(window.x3);
// function code1(){
//      /* local scope function scope*/
//     console.log(x);
//     var x=200;
// }
// code1();
// console.log(x);
// const x=100;
// const x=1111;
// console.log(x);
// console.log(window.x); /* not global/ block scope */
// var x;
// console.log(x);
// const x=100;

// let x=100;
// function code1(){
//     // let x;
//     if(true){
//         let x=200;
//         console.log(x);
//     }
    
// }
// code1();

// var x;
// function x(){
//     console.log("HI");
// }
// console.log(x);

// function data(){
//     var x=new XMLHttpRequest();
//     console.log(x);
// }
// data();

// function loadpage(){
//     var xttp=new XMLHttpRequest();
//     xttp.onreadystatechange=function(){
//         if(this.readyState==4 && this.status==200){
//             var divele=document.getElementById("div");
//             divele.innerHTML=this.responseText;
//             console.log(this.responseText);
//         }
//     };
//     xttp.open("GET","https://gbfs.citibikenyc.com/gbfs/en/station_information.json",false);
//     xttp.send();
// }
// loadpage();


// function showData(userName="Ahmed",age="20",show='yes',...skills){
//     // return 'Name: ${userName} Age: ${age} Skills: ${skills}';
//     document.write('<div>');
//     document.write('<h2> Name: '+userName+' </h2>');
//     document.write('<p> Age: '+age+' </p>');
//     if(skills.length===0){
//         document.write('<p> Skills: Not Skills</h2>');
        
//     }
//     else { if(show==='yes'){
//         document.write('<p> Skills: '+skills.join(" | ")+' </h2>');
//     }
//     else{document.write('<p> Skills: Skille hidden</h2>');}
//         }
//     document.write('</div>');
// }
// showData("Ali",20,"html",'css');



// var div=document.querySelector("#div");
// // console.log(div.textContent);
// // div.innerText="Welcome";
// // div.textContent="Hi";
// div.style.color="red"
// div.style.backgroundColor="lightgray"
// console.log(div);
// var x=document.getElementsByClassName("c");
// // console.log(x[1].innerHTML)
// x[1].setAttribute("Price",1000);
// for(let i=0;i<x.length;i++){
//     x[i].style.color="blue";
//     x[i].style.fontSize="30px";
// }
// var inputs=document.querySelector("input");
// console.log(inputs)
// inputs.value="Enter your Name";
// inputs.id="id"
// inputs.className="class"
// // console.log(inputs.parentNode)
// inputs.parentNode.style.backgroundColor="yellow"
// inputs.parentElement.style.backgroundColor="blue"
// // inputs.setAttribute("value","Hi")
// // console.log(inputs.parentElement.nextElementSibling)
// var text=document.createTextNode("Comments")
// div.appendChild(text)


