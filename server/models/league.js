module.exports = class League {
    constructor(id, name, owner, dateOfEvent, type) {
      this.id = id;
      this.name = name;
      this.owner = owner;
      this.dateOfEvent = dateOfEvent;
      this.type = type;
    }
}