var myObj =
[{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
  {'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},

{'name':'Krishnakath', 'age': 22, 'occupation': "Manager"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];


var t={};
var occ=[];
for(var i=0; i<myObj.length; i++)
{
  var el = myObj[i].occupation;
  if(!occ[el]) {
    t[el]=[];
    occ[el] = []}; // start the array

  t[el].push({"name": myObj[i].name,"age": myObj[i].age});
}

console.log(t);
