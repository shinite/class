var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

var t=[];
for (var i=0;i<myObj.length;i++)
{
    t.push(myObj[i].age);

}

t.sort();
t.reverse();
console.log("Age key in descending order");
console.log(t);
