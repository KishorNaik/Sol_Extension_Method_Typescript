export class Demo{

    private readonly value:string;

    constructor(value:string){
        this.value=value;
    }

    public get Values():string{
        return this.value;
    }

   public Test1():void{
       console.log("Test 1");
   }
}