radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        左轉()
    } else if (receivedNumber == 8) {
        前進()
    } else if (receivedNumber == 6) {
        右轉()
    } else if (receivedNumber == 2) {
        後退()
    } else if (receivedNumber == 1) {
        把球上升()
    } else if (receivedNumber == 3) {
        把球下降()
    } else if (receivedNumber == 7) {
        把球夾起來()
    } else if (receivedNumber == 9) {
        把球放下來()
    } else if (receivedNumber == 0) {
        停止()
    }
})
function 左轉 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    255
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    255
    )
}
function 右轉 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    255
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    255
    )
}
function 把球夾起來 () {
    pins.servoWritePin(AnalogPin.P1, 180)
}
function 後退 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    255
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    255
    )
}
function 前進 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    255
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    255
    )
}
function 把球下降 () {
    pins.servoWritePin(AnalogPin.P8, 180)
}
function 把球上升 () {
    pins.servoWritePin(AnalogPin.P8, 0)
}
function 把球放下來 () {
    pins.servoWritePin(AnalogPin.P1, 0)
}
function 停止 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
    pins.servoWritePin(AnalogPin.P8, 90)
}
radio.setGroup(142)
pins.servoWritePin(AnalogPin.P1, 90)
pins.servoWritePin(AnalogPin.P8, 90)
