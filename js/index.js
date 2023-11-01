import {CRUD} from "../CRUD.js";
function app() {
    let crud = new CRUD("APP");
    crud.create([1, 2, 3]);
    crud.create({message:"hola mundo"});

    let crud2 =new CRUD("ejemplo");
    console.log(crud2.readALL());
}

app();