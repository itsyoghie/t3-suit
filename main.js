
function cekKomputer() {
        var komputer = ['gunting', 'kertas', 'batu']
        var index = Math.floor(Math.random() *komputer.length)
        var hasil = komputer[index]
        document.getElementById('enemy').setAttribute("src","img/"+hasil+".png")
        return hasil
}

function logika (com, you) {
    if(com == you) {
        return 'seri'
    }else if (com == 'gunting' && you == 'batu') {
        return 'Anda Menang'
    }else if (com == 'gunting' && you == 'kertas'){
        return 'Anda Kalah'
    }else if (com == 'kertas' && you == 'batu'){
        return 'Anda Kalah'
    }else if (com == 'kertas' && you == 'gunting'){
        return 'Anda Menang'
    }else if (com == 'batu' && you == 'gunting'){
        return 'Anda Kalah'
    }else if (com == 'batu' && you == 'kertas'){
        return 'Anda Menang'
    }
}

function batu() {
    var com = cekKomputer()
    var you = 'batu'
    document.getElementById('status').textContent = logika(com, you)
 }
function kertas() {
    var com = cekKomputer()
    var you = 'kertas'
    document.getElementById('status').textContent = logika(com, you)

}
function gunting() {
    var com = cekKomputer()
    var you = 'gunting'
    document.getElementById('status').textContent = logika(com, you)

}