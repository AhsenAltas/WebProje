function islemGonder() {
	var kural, yazi;
	yazi = document.getElementById("mail").value;
	kural = /.+@.+\.+./;

	if (document.getElementById("ad").value == "" ) {
		alert("Adınızı giriniz!");
		return false;
	}

	else if (document.getElementById("mail").value == "") {
		alert("Mailinizi giriniz!");
		return false;
	}
	else if (!kural.test(yazi)) {
		alert("Mail geçersiz!");
		return false;
	}

    var option = getRVBN('cinsiyet');
    if(option==''){
    alert("Cinsiyet Seçiniz!");
    return false;
   }                 

	function getRVBN(rName) {
    var radioButtons = document.getElementsByName(rName);
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) return radioButtons[i].value;
    }
    return '';
	}
	 
  if (document.getElementById("mesaj").value == "") {
    alert("Açıklama giriniz!");
    return false;
  }

}

function islemTemizle() {
document.getElementById("formcuk").reset();
}