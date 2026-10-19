function latihan1() {
    document.getElementById("pesan").textContent = "Hello World!";
    console.log("Hello World!");
}

function latihan2() {
    let nama = prompt("Masukkan nama kamu:");

    if (nama === null) {
        return;
    }

    if (nama.trim() === "") {
        alert("Nama tidak boleh kosong!");
    } else {
        alert("Halo, " + nama + "! Selamat belajar JavaScript.");
    }
}

function latihan3() {
    const a = Number(document.getElementById("angkaA").value);
    const b = Number(document.getElementById("angkaB").value);

    if (
        document.getElementById("angkaA").value === "" ||
        document.getElementById("angkaB").value === ""
    ) {
        document.getElementById("hasil3").textContent =
            "Masukkan kedua angka terlebih dahulu!";
        return;
    }

    document.getElementById("hasil3").textContent =
        "Penjumlahan: " + (a + b) +
        " | Pengurangan: " + (a - b) +
        " | Perkalian: " + (a * b) +
        " | Pembagian: " + (b !== 0 ? a / b : "Tidak bisa dibagi 0") +
        " | Modulus: " + (b !== 0 ? a % b : "Tidak bisa dibagi 0");
}

function latihan4() {
    const input = document.getElementById("nilai").value;
    const hasil = document.getElementById("hasil4");

    if (input === "") {
        hasil.textContent = "Masukkan nilai terlebih dahulu!";
        return;
    }

    const nilai = Number(input);

    if (nilai < 0 || nilai > 100) {
        hasil.textContent = "Nilai harus antara 0 sampai 100!";
    } else if (nilai >= 60) {
        hasil.textContent = "Lulus!";
    } else {
        hasil.textContent = "Belum lulus.";
    }
}

function latihan5() {
    const pilihan = Number(document.getElementById("pilihan").value);
    const hasil = document.getElementById("hasil5");

    switch (pilihan) {
        case 1:
            hasil.textContent = "Satu";
            break;
        case 2:
            hasil.textContent = "Dua";
            break;
        case 3:
            hasil.textContent = "Tiga";
            break;
        case 4:
            hasil.textContent = "Empat";
            break;
        case 5:
            hasil.textContent = "Lima";
            break;
        default:
            hasil.textContent = "Masukkan angka 1 sampai 5!";
    }
}

function latihan6() {
    const input = document.getElementById("bilangan").value;
    const hasil = document.getElementById("hasil6");

    if (input === "") {
        hasil.textContent = "Masukkan bilangan terlebih dahulu!";
        return;
    }

    const bilangan = Number(input);

    if (!Number.isInteger(bilangan)) {
        hasil.textContent = "Masukkan bilangan bulat!";
    } else if (bilangan % 2 === 0) {
        hasil.textContent = bilangan + " adalah bilangan genap.";
    } else {
        hasil.textContent = bilangan + " adalah bilangan ganjil.";
    }
}

function latihan7(warna) {
    document.body.style.backgroundColor = warna;
}

function hitungTotal() {
    const menu = document.querySelectorAll(".menu:checked");
    let total = 0;

    menu.forEach(function(item) {
        total += Number(item.value);
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}

document.querySelectorAll(".menu").forEach(function(item) {
    item.addEventListener("change", hitungTotal);
});

function hitungNilai() {
    const tugasInput = document.getElementById("tugas").value;
    const utsInput = document.getElementById("uts").value;
    const uasInput = document.getElementById("uas").value;
    const hasil = document.getElementById("hasilNilai");

    if (tugasInput === "" || utsInput === "" || uasInput === "") {
        hasil.textContent = "Semua nilai harus diisi!";
        return;
    }

    const tugas = Number(tugasInput);
    const uts = Number(utsInput);
    const uas = Number(uasInput);

    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.textContent = "Nilai harus antara 0 sampai 100!";
        return;
    }

    const akhir = (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
    let grade;

    if (akhir >= 85) {
        grade = "A";
    } else if (akhir >= 75) {
        grade = "B";
    } else if (akhir >= 60) {
        grade = "C";
    } else if (akhir >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    const status = akhir >= 60 ? "Lulus" : "Tidak Lulus";

    hasil.textContent =
        "Nilai Akhir: " + akhir.toFixed(2) +
        " | Grade: " + grade +
        " | Status: " + status;
}

function eksperimenPrompt() {
    const angka1 = Number(prompt("Masukkan angka pertama:"));
    const angka2 = Number(prompt("Masukkan angka kedua:"));

    alert("Hasil penjumlahan: " + (angka1 + angka2));
}

function tabelPerkalian7() {
    let hasil = "";

    for (let i = 1; i <= 10; i++) {
        hasil += "7 x " + i + " = " + (7 * i) + "\n";
    }

    alert(hasil);
}

function cekGenap(angka) {
    if (angka % 2 === 0) {
        return angka + " adalah bilangan genap.";
    } else {
        return angka + " adalah bilangan ganjil.";
    }
}

function validasiNama(nama) {
    if (nama.trim() === "") {
        return "Nama tidak boleh kosong!";
    } else {
        return "Nama berhasil diisi: " + nama;
    }
}

function validasiNilai(nilai) {
    if (nilai < 0 || nilai > 100) {
        return "Nilai harus antara 0 sampai 100!";
    } else {
        return "Nilai valid: " + nilai;
    }
}
