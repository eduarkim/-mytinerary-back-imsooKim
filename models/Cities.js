import {Schema, model} from "mongoose";

let collection = "cities";
let schema = new Schema({
    name:{type:String, required:true},
  //  id:{type:Number, required:true},
    country:{type:String, required:true},
    continent:{type:String, required:true},
    currency:{type:String, required:true}
},{
    timestamps:true
})
let Cities = model(collection, schema);
export default Cities;