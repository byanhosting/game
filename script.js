let level = 1;
let hp = 5;
let score = 0;
let player = 1;
let angka = randomAngka();

function randomAngka() {
    return Math.floor(Math.random() * (level * 10)) + 1;
}

function updateInfo() {
    document.getElementById("info").innerText =
        `Level ${level} | HP ${hp} | Score ${score}`;
    document.getElementById("player").innerText =
        `Giliran: Player ${player}`;
}

function tebak() {
    let input = document.getElementById("input");
    let pesan = document.getElementById("pesan");
    let box = document.querySelector(".game");
    let tebakan = parseInt(input.value);

    if (isNaN(tebakan)) {
        pesan.innerText = "Masukkan angka dulu!";
        return;
    }

    if (tebakan === angka) {
        document.getElementById("benar").play();
        score += level * 10;
        level++;
        pesan.innerText = "🎉 BENAR! Level naik!";
    } else {
        document.getElementById("salah").play();
        hp--;
        pesan.innerText = "❌ SALAH! HP berkurang!";
        box.classList.add("shake");
        setTimeout(() => box.classList.remove("shake"), 300);
    }

    if (hp <= 0) {
        document.getElementById("gameover").play();
        pesan.innerText = `☠️ GAME OVER | Player ${player} kalah | Score: ${score}`;
        return;
    }

    // ganti player
    player = player === 1 ? 2 : 1;

    angka = randomAngka();
    input.value = "";
    updateInfo();
}

updateInfo();
