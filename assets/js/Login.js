function islemGonder() {

	document.getElementById("mailuyari").innerHTML = "";
	document.getElementById("sifreUyari").innerHTML = "";
	document.getElementById("mailuyariBos").innerHTML = "";

	var kural, yazi;
	yazi = document.getElementById("username").value;
	kural = /.+@.+\.+./;


	if (document.getElementById("username").value == "Şifrenizi Giriniz" || document.getElementById("username").value == "") {
		document.getElementById("mailuyariBos").innerHTML =  alert("Mail giriniz!");
		return false;
	}

	else if (!kural.test(yazi)) {
		document.getElementById("mailuyari").innerHTML =  alert("Geçersiz Mail!");
		return false;
	}

	else if (document.getElementById("password").value == "Şifrenizi Giriniz" || document.getElementById("password").value == "") {
		document.getElementById("sifreUyari").innerHTML =  alert("Şifre giriniz!");
		return false;
	}




}
