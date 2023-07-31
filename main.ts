radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
    	
    } else if (receivedNumber == 8) {
    	
    } else if (receivedNumber == 6) {
    	
    } else if (receivedNumber == 2) {
    	
    } else if (receivedNumber == 1) {
    	
    } else if (receivedNumber == 3) {
    	
    } else if (receivedNumber == 7) {
    	
    } else if (receivedNumber == 9) {
    	
    } else if (receivedNumber == 0) {
    	
    }
})
function 左轉 () {
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
}
function 右轉 () {
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
}
function 把球夾起來 () {
	
}
function 後退 () {
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
}
function 前進 () {
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
}
function 把球下降 () {
	
}
function 把球上升 () {
	
}
function 把球放下來 () {
	
}
function 停止 () {
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
}
radio.setGroup(98)
