import { Demo } from "./Demo";
import "./Extension/NumberExtension";
import "./Extension/DemoExtension";

let numberValue:Number;
let result:string;

numberValue=123456789;
result=numberValue.thousandsSeparator()
console.log(result);

let demoObj:Demo=new Demo("Hello");
    demoObj.Test2Extension();