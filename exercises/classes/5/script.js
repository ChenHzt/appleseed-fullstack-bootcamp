class Room{
    constructor(_roomID, _level, _amount){
        this.roomID = _roomID;
        this.level = _level;
        this.amount = _amount;
        this.isFree = true;
    }

    getRoomID(){
        return this.roomID
    }

    isFit(amountOfPeople){
        if(this.amount >= amountOfPeople)
        {
            this.isFree = false;
            return true;
        }
        return false;
    }

    getLevel(){
        return this.level;
    }

    getAmount(){
        return this.amount;
    }

    print(){
        console.log(`roomID: ${this.roomID}, level: ${this.level}, amount: ${this.amount}, isFree: ${this.isFree}`)
    }
}

class Hotel{
    constructor(_room){
        this.rooms = new Map();
        this.rooms.set(_room.getRoomID(), _room);
    }

    addRoom(_room){
        // if(!this.rooms.find((r) => r.getRoomID === _room.getRoomID()))
        // {
        //     this.rooms.push(_room);
        //     return true;
        // }
        // return false;

        if(!this.rooms.has(_room.getRoomID)){
            this.rooms.set(_room.getRoomID(), _room);
            return true;
        }
        return false;
    }

    addNewRoom(_roomID, _level, _amount){
        const room = new Room(_roomID, _level, _amount);
        return this.addRoom(room);
    }

    removeRoom(_roomID){
        // const temp = this.rooms.findIndex((r) => r.getRoomID === _room.getRoomID());
        // const temp = 
        if(this.rooms.has(_roomID) && this.rooms.get(_roomID).isFree)
        {
            this.rooms.delete(_roomID);
            return true;
        }
        return false;
    }

    checkFreeRooms(amount){
        const temp = Array.from(this.rooms.values());
        return temp.filter((room) => room.isFit() && room.isFree);
    }

    checkIn(_roomID, _amount){
        if(!this.rooms.has(_roomID))
            return false;
        return this.rooms.get(_roomID).isFit(_amount);
    }

    highRoomsFree(){
        let temp = Array.from(this.rooms.values());
        const max = temp.reduce((maxLevel, current) => maxLevel < current.getLevel() ? current.getLevel() : maxLevel,0 );
        temp = temp.filter((room) => max === room.getLevel());
        return temp.sort((a,b) => a.getAmount() - b.getAmount());
    }

    getAllRooms(isFree){
        let temp = Array.from(this.rooms.values());
        temp = temp.filter((room) => room.isFree === isFree);
        return temp.sort((a,b) => a.getRoomID() - b.getRoomID());
    }

}