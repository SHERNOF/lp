let Tme = require('../models/Clck')

// let Tme = function () {
    const tday = new Date()
    let h = function(){
        tdy.getHours() + ":"
    }
    let m = function(){
        tdy.getMinutes() + ":"
    }

    let s = function(){
        tdy.getSeconds()
    }

exports.dsplyTime = function (req, res) {
    let tme = document.getElementById("tw").innerHTML = h + m + s;
    res.send(tme)
}

exports.home = function(req, res){
    res.render('lp')
}