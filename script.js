form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    nama: nama.value,
    nim: nim.value,
    jurusan: jurusan.value,
    semester: semester.value
  };

  fetch("https://script.google.com/macros/s/AKfycbzZl7FrVFYaqIKE0UqIDXkuvE6msFSVM4q4SD2mDyZm/dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.text())   // Apps Script aman pakai text
  .then(() => {
    alert("Data terkirim ke Google Sheet");
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert("Gagal mengirim data");
  });
});

