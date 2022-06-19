function loaded() {
    if (getCookie('cookiesAccepted') != 'yes') {
      document.getElementById("cookies-container").classList.add("active");
    }
  }
  
  function closeCookies() {
    document.getElementById("cookies-container").classList.remove("active");
    setCookie("cookiesAccepted", "yes", 7);
  }