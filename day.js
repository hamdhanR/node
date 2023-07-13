function dif(endd){
const start=new Date();
const end=new Date(endd);

const daysleft= end.getTime()-start.getTime()
return Math.floor(daysleft/(1000*24*3600));
}

const endDate = '2023-08-15';
const date=new Date();
console.log("current date is ",date);
const daysDif = dif(endDate);
console.log(`The difference in days is ${daysDif} days.`);