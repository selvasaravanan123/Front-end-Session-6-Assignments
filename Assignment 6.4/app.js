var employee = [];
employee[0] = {name:"Selvasaravanan",
    age:24,
    salary:300000,
    city:"Chennai",
    state:"Tamilnadu",
    pincode:600078};
employee[1] = {name:"Dhivya",
    age:25,
    salary:200000,
    city:"Coimbatore",
    state:"Tamilnadu",
    pincode:625645};
employee[2] = {name:"Sarath",
    age:26,
    salary:300000,
    city:"Chennai",
    state:"TamilNadu",
    pincode:645254};
employee[3] = {name:"Rahul",
    age:25,
    salary:400000,
    city:"Chennai",
    state:"TamilNadu",
    pincode:655425};
employee[4] = {name:"Anvesh",
    age:21,
    salary:20000,
    city:"Boston",
    state:"North America",
    pincode:84521};

    for (var item in employee)
    {
        console.log(employee[item]);
    }