function topla() {
  document.getElementById("k1");
  var sayi1 = k1.value;
  sayi1 = Number(sayi1);

  document.getElementById("k2");
  var sayi2 = k2.value;
  sayi2 = Number(sayi2);

  var sonuc = sayi1 + sayi2;
  sonuc = Number(sonuc);

  document.getElementById("toplam").innerHTML = "SONUÇ: "+sonuc;
  if(isNaN(sonuc)){
    document.getElementById("toplam").innerHTML = "LÜTFEN GEÇERLİ BİR DEĞER GİRİNİZ";
  }
}

function cikar() {
  document.getElementById("k1");
  var sayi1 = k1.value;
  sayi1 = Number(sayi1);

  document.getElementById("k2");
  var sayi2 = k2.value;
  sayi2 = Number(sayi2);

  var sonuc = sayi1 - sayi2;
  sonuc = Number(sonuc);

  document.getElementById("toplam").innerHTML = "SONUÇ: "+sonuc;
  if(isNaN(sonuc)){
    document.getElementById("toplam").innerHTML = "LÜTFEN GEÇERLİ BİR DEĞER GİRİNİZ";
  }
}

function carp() {
  document.getElementById("k1");
  var sayi1 = k1.value;
  sayi1 = Number(sayi1);

  document.getElementById("k2");
  var sayi2 = k2.value;
  sayi2 = Number(sayi2);

  var sonuc = sayi1 * sayi2;
  sonuc = Number(sonuc);

  document.getElementById("toplam").innerHTML = "SONUÇ: "+sonuc;
  if(isNaN(sonuc)){
    document.getElementById("toplam").innerHTML = "LÜTFEN GEÇERLİ BİR DEĞER GİRİNİZ";
  }
}

function bol() {
  document.getElementById("k1");
  var sayi1 = k1.value;
  sayi1 = Number(sayi1);

  document.getElementById("k2");
  var sayi2 = k2.value;
  sayi2 = Number(sayi2);

  var sonuc = sayi1 / sayi2;
  sonuc = Number(sonuc);

  document.getElementById("toplam").innerHTML = "SONUÇ: "+sonuc;
  if(isNaN(sonuc)){
    document.getElementById("toplam").innerHTML = "LÜTFEN GEÇERLİ BİR DEĞER GİRİNİZ";
  }
}

function mod() {
  document.getElementById("k1");
  var sayi1 = k1.value;
  sayi1 = Number(sayi1);

  document.getElementById("k2");
  var sayi2 = k2.value;
  sayi2 = Number(sayi2);

  var sonuc = sayi1 % sayi2;

  sonuc = Number(sonuc);
  document.getElementById("toplam").innerHTML = "SONUÇ: "+sonuc;
  if(isNaN(sonuc)){
    document.getElementById("toplam").innerHTML = "LÜTFEN GEÇERLİ BİR DEĞER GİRİNİZ";
  }
  
}
function temizle() {
  document.getElementById("k1").value = "";
  document.getElementById("k2").value = "";
  document.getElementById("toplam").innerHTML = "";
}