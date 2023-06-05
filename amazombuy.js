function Tax10(par1, taxPercent = 0.1){
    return (par1 * taxPercent);
}

function Pop(){
    alert('pop');
}

const produkt = {
    name: 'shirt',
    'dilivery-time': '1 day',
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function beschreibung(){
        console.log('Das ist ein shirt');
    },
}

console.log(produkt);