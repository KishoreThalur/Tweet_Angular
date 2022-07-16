export class users{
    
    username:string |undefined;
    firstname:string |undefined;
    lastname:string |undefined;
    email:number |undefined;
    createdAt:Date |undefined;
    password:string |undefined;
    contact:number |undefined;

    // constructor(username:string,firstname:string,
    //     lastname:string,
    //     email:number,
    //     createdAt:Date,
    //     password:string,
    //     contact:number){
    //         this.username=username;
    //         this.lastname=lastname;
    //         this.firstname=firstname;
    //         this.email=email;
    //         this.createdAt=createdAt;
    //         this.password=password;
    //         this.contact=contact;


    //     }
    public setAll(username:string,firstname:string,
            lastname:string,
            email:number,
            createdAt:Date,
            password:string,
            contact:number){
                this.username=username;
                this.lastname=lastname;
                this.firstname=firstname;
                this.email=email;
                this.createdAt=createdAt;
                this.password=password;
                this.contact=contact;
    
    
            }
    constructor(){

    }
}