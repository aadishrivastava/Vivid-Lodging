const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const mongo_url="mongodb://127.0.0.1:27017/wonderlust";
main()
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log("error");
    });
async function main(){
    await mongoose.connect(mongo_url);
};


const initDB=async () =>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"68f368058c8fd77a6eb3ab52"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();