export class CRUD{
    #tablename = null;
    #data = null;

    constructor(tablename){
        this.#setTablename(tablename);
        this.#setData();         
    }
    #setTablename(tablename){
        this.#tablenameValidate(tablename);
        this.#tablename = tablename;
    }

    #setData(){
        let dataRepository = this.#get(this.#tablename);
        this.#data = dataRepository === null? [] : dataRepository;
  
    }

    #tablenameValidate(tablename){
        if(tablename == undefined) throw new
        Erro("table name required");

    }

    #save(){
        let dataToSave =JSON.stringify(this.#data);
        sessionStorage.setItem(this.tablename, dataToSave);
    }

    #get(key){
        let data = sessionStorage.getItem(key);
        return JSON.parse(data);
    }

    #existElementWithId(id){
        return this.#data[id] === undefined? false : true;
    }

    #checkThatElementExistWithId(id){
        if (!this.#existElementWithId(id))
            throw new Error("This Element not Exists");
    }

    create(data){
        this.#data.push(data);
        this.#save();
        return this.#data.length;
    }

    read(id){
        this.#checkThatElementExistWithId(id);
        return this.#data[id];
    }
    readALL(){
        return this.#data;
    }

    update(id, data){
        this.#checkThatElementExistWithId(id);
        this.#data[id] = data;
        this.#save();
        return true;
    }

    delete(id){
        this.#checkThatElementExistWithId(id);
        this.#data.splice(id, 1);
        this.#save()
        return true;
    }
}