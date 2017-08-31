class CrewMember {
  constructor(position, currentShip = 'Looking for a Rig') {
    this.position = position
    this.currentShip = currentShip
  }

  engageWarpDrive() {
    if (this.position === 'Pilot' && this.currentShip !== 'Looking for a Rig') {
      if (this.currentShip.warpDrive === 'engaged!'){
        return this.currentShip.warpDrive = 'disengaged'
      } else {
        return this.currentShip.warpDrive = 'engaged!' //WTF??
      }
    } else {
      return 'had no effect'
    }
  }

  setsInvisibility() {
    if (this.position === 'Defender' && this.currentShip !== 'Looking for a Rig') {
      if (this.currentShip.cloaked){
        return this.currentShip.cloaked = false
      } else {
        return this.currentShip.cloaked = true
      }
    } else {
      return 'had no effect'
    }
  }

  chargePhasers() {
    if (this.position === 'Gunner' && this.currentShip !== 'Looking for a Rig') {
      if (this.currentShip.phasersCharge === 'uncharged'){
        return this.currentShip.phasersCharge = 'charged!'
      } else {
        return this.currentShip.phasersCharge = 'uncharged'
      }
    } else {
      return 'had no effect'
    }
  }

}
