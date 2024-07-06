module.exports = class Player {
    constructor(id, name, hittingHand, gender, primaryRole, secondaryRole) {
      this.id = id;
      this.name = name;
      this.hittingHand = hittingHand;
      this.gender = gender;
      this.primaryRole = primaryRole;
      this.secondaryRole = secondaryRole;
    }
}