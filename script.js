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
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(() => {
    alert("Data terkirim");
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert("Gagal");
  });
});
