radio.setGroup(1)
radio.setTransmitPower(1)
basic.forever(function () {
    basic.showIcon(IconNames.Skull)
    radio.sendNumber(2)
    basic.showIcon(IconNames.Ghost)
})
