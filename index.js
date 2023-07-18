document.getElementById("ibm-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var nama = document.getElementById("nama").value;
  var jenisKelamin = document.getElementById("jenis_kelamin").value;
  var usia = parseInt(document.getElementById("usia").value);
  var beratBadan = parseFloat(document.getElementById("berat_badan").value);
  var tinggi = parseInt(document.getElementById("tinggi").value);
  
  var hasil = beratBadan / Math.pow(tinggi / 100, 2);
  var status = "";
  
  if (hasil < 18.5) {
    status = "Berat badan kurang";
  } else if (hasil >= 18.5 && hasil < 25) {
    status = "Berat badan normal";
  } else if (hasil >= 25 && hasil < 30) {
    status = "Berat badan berlebih";
  } else {
    status = "Obesitas";
  }
  
  document.getElementById("output_nama").textContent = nama;
  document.getElementById("output_jenis_kelamin").textContent = jenisKelamin;
  document.getElementById("output_usia").textContent = usia;
  document.getElementById("output_berat_badan").textContent = beratBadan;
  document.getElementById("output_tinggi").textContent = tinggi;
  document.getElementById("output_hasil").textContent = hasil.toFixed(2);
  document.getElementById("output_status").textContent = status;
  
  document.getElementById("hasil").style.display = "block";
});

document.getElementById("ibm-form").addEventListener("reset", function() {
  document.getElementById("hasil").style.display = "none";
});