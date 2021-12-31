function login(){
    let username = document.forms["Form"]["username"].value;
    let password = document.forms["Form"]["password"].value;
    if( username == "noval" && password == "noval"){
        alert("Login Berhasil")
        return true;
    }
    else if(username =="" || password ==""){
      alert("Masukan username dan password Anda");
      return false;
    }
    else{
      alert("Username atau password yang Anda masukan SALAH");
      return false;
    }
  }