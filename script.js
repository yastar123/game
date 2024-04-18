function getPilihancomputer() {
    const computer = Math.random().toFixed(1);
    if (computer < 0.34) return 'gajah';
    if (computer >= 0.34 && computer < 0.64) return 'semut';
    return 'orang';
}

function getHasil(player, computer) {
    if (player == computer) return 'seri';
    if (player == 'gajah') return (computer == 'orang') ? 'menang' : 'kalah';
    if (player == 'semut') return (computer == 'gajah') ? 'menang' : 'kalah';
    if (player == 'orang') return (computer == 'semut') ? 'menang' : 'kalah';
}

function putar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }

        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100)
};


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihancomputer = getPilihancomputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanPlayer, pilihancomputer);

        putar();

        setTimeout(function () {
            const img = document.querySelector('.img-computer');
            const info = document.querySelector('.info')
            img.setAttribute('src', 'img/' + pilihancomputer + '.png');
            info.innerHTML = hasil;
        }, 1000);
    });
});
