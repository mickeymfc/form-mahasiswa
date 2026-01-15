form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    nama: nama.value,
    nim: nim.value,
    jurusan: jurusan.value,
    semester: semester.value
  };

  fetch("https://script.google.com/macros/s/AKfycbx9vGzRRvG2Ameo52GZm18UrKdjoS_JwS-RbH-VKcigm2pNY3qJuYcsaW-IEMNKIw0HfQ/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(r => r.json())
  .then(() => {
    alert("Data terkirim ke Google Sheet");
    form.reset();
  })
  .catch(() => alert("Gagal"));
});
