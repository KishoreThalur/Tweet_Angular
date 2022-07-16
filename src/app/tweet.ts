export interface Tweet{
    id:string;
    username:string;
    firstname:string;
    tweet:string;
    likes:number;
    createdAt:Date;
    updatedAt:Date;
    replyTo:string;
}