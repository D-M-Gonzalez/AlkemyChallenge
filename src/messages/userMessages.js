//Object to handle server responses on Users
export default class UserMessage {
    constructor (message){
        this.status = 0;
        this.message = message;
        this.data = new Object();
        }
    setStatusMessage(code){ //Setups a generic message depending on the status passed
        this.status = code
        this.status === 200 && (this.message = `User ${this.message}d successfully`);
        this.status === 400 && (this.message = `Invalid parameters when doing ${this.message} user`);
        this.status === 406 && (this.message = `Missing parameters to ${this.message} user`);
        this.status === 409 && (this.message = `User already exists`);
        this.status === 404 && (this.message = `User not found`);
        this.status === 401 && (this.message = `Invalid credentials to ${this.message} user in server`);
        this.status === 500 && (this.message = `Unexpected error when doing ${this.message} user`);
        this.status === 504 && (this.message = `Gateway Time-Out when doing ${this.message} user`);
    }
    setData(docData){ //Stores the document data
        this.data.id = docData.id;
        this.data.email = docData.email;
        this.data.password = docData.password;
        this.data.name = docData.name;
        this.data.surname = docData.surname;
        this.data.address = docData.address;
        this.data.phonenumber = docData.phonenumber;
        this.data.items = docData.items;
    }
}