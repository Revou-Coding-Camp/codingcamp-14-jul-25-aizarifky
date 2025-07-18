document.getElementById('messageForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const tgl = document.getElementById('tgl').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const pesan = document.getElementById('pesan').value;

  const result = `
    <p><strong>Current Time:</strong> ${new Date()}</p>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Tanggal Lahir:</strong> ${tgl}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${pesan}</p>
  `;

  document.getElementById('formResult').innerHTML = result;
});
