function MB () {
    if (pos - increment < range_min) {
        pos = range_min
    } else {
        pos = pos - increment
    }
    servos.P0.setAngle(pos)
}
input.onButtonPressed(Button.A, function () {
    MF()
})
input.onButtonPressed(Button.AB, function () {
    pos = 0
    servos.P0.setAngle(pos)
})
input.onButtonPressed(Button.B, function () {
    MB()
})
function MF () {
    if (pos + increment > range_max) {
        pos = range_max
    } else {
        pos = pos + increment
    }
    servos.P0.setAngle(pos)
}
let pos = 0
let range_min = 0
let range_max = 0
let increment = 0
increment = 20
range_max = 180
servos.P0.setRange(range_min, range_max)
servos.P0.setStopOnNeutral(true)
basic.forever(function () {
	
})
