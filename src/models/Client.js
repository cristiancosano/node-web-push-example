class Client{

    constructor(){
        if(!Client.instance){
            Client.instance = this
            this.clientList = new Array()
        }
        return Client.instance
    }

    push(subscriptor){
        if(!this.clientList.find((element) => element === subscriptor)) 
            this.clientList.push(subscriptor)
    }
    getList(){
        return this.clientList
    }
}

module.exports.Client = Client;