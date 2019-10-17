let Tme = function () {
const tday = new Date()
let h = Tme.getHours() + ":"
let m = Tme.getMinutes() + ":"
let s = Tme.getSeconds()
}


Tme.prototype.dsplyTime = function() {
    h + m + s
}

module.exports = Tme