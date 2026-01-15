const form = document.getElementById("formMahasiswa");
const tabel = document.getElementById("tabelMahasiswa");

// ambil data lama saat halaman dibuka
let dataMahasiswa = JSON.parse(localStorage.getItem("mahasiswa")) || [];
tampilkanData();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const mahasiswa = {
    nama: document.getElementById("nama").value,
    nim: document.getElementById("nim").value,
    jurusan: document.getElementById("jurusan").value,
    semester: document.getElementById("semester").value
  };

  dataMahasiswa.push(mahasiswa);

  // simpan ke localStorage
  localStorage.setItem("mahasiswa", JSON.stringify(dataMahasiswa));

  tampilkanData();
  form.reset();
});

function tampilkanData() {
  tabel.innerHTML = "";

  dataMahasiswa.forEach((mhs) => {
    tabel.innerHTML += `
      <tr>
        <td>${mhs.nama}</td>
        <td>${mhs.nim}</td>
        <td>${mhs.jurusan}</td>
        <td>${mhs.semester}</td>
      </tr>
    `;
  });
}
