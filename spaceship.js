class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', phasersCharge = "uncharged"){
    this.name = name
    this.crew = crew.length !== 0 ? this.applyShips(crew) : []
    this.phasers = phasers
    this.shields = shields
    this.cloaked = typeof cloaked === 'boolean' ? cloaked : false
    this.warpDrive = warpDrive
    this.docked = this.crew.length === 0 ? true : false
    this.phasersCharge = phasersCharge
  }

  applyShips(crew) {
    crew.forEach((x) => {x.currentShip = this});
    return crew;
  }

}
