input.onButtonPressed(Button.A, function () {
    alakzat = alakzat + 1
    if (alakzat > 3) {
        alakzat = 1
    }
    AlakzatMegjelenites()
})
function KorRajzolas () {
    OmniBit.CarRun(OmniBit.enCarRun.Spin_Right, 100)
    basic.pause(4000)
    OmniBit.MotorStopAll()
}
function NegyzetRajzolas () {
    OmniBit.CarRun(OmniBit.enCarRun.Forward, sebesseg)
    basic.pause(mozgasido)
    OmniBit.CarRun(OmniBit.enCarRun.MoveRight, sebesseg)
    basic.pause(mozgasido)
    OmniBit.CarRun(OmniBit.enCarRun.Back, sebesseg)
    basic.pause(mozgasido)
    OmniBit.CarRun(OmniBit.enCarRun.MoveLeft, sebesseg)
    basic.pause(mozgasido)
    OmniBit.MotorStopAll()
}
input.onButtonPressed(Button.B, function () {
    music.playTone(2109, music.beat(BeatFraction.Sixteenth))
    if (alakzat == 1) {
        NegyzetRajzolas()
    } else if (alakzat == 2) {
        HaromszogRajzolas()
    } else if (alakzat == 3) {
        KorRajzolas()
    } else {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
})
function AlakzatMegjelenites () {
    if (alakzat == 1) {
        basic.showIcon(IconNames.Square)
    } else if (alakzat == 2) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            `)
    } else if (alakzat == 3) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
}
function HaromszogRajzolas () {
    OmniBit.MotorRun(OmniBit.enMotors.M1, 0)
    OmniBit.CarRun(OmniBit.enCarRun.Right_Front, sebesseg)
    basic.pause(mozgasido)
    OmniBit.CarRun(OmniBit.enCarRun.Right_Back, sebesseg)
    basic.pause(mozgasido)
    OmniBit.CarRun(OmniBit.enCarRun.MoveLeft, sebesseg)
    basic.pause(mozgasido * 1.1)
    OmniBit.MotorStopAll()
}
let mozgasido = 0
let sebesseg = 0
let alakzat = 0
alakzat = 1
sebesseg = 100
mozgasido = 2000
AlakzatMegjelenites()
