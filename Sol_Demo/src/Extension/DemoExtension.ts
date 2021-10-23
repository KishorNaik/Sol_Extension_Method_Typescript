import { Demo } from "../Demo";

declare module '../Demo'{
    export interface Demo{
        Test2Extension():void;
    }
}
    

Demo.prototype.Test2Extension=function():void{
    console.log(this.Values);
    console.log("Test 2");
}

export {}