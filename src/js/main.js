function sendEmail() {
    const to = "yanuararufy14@gmail.com";
    const subject = "";
    const body = "";

    const mailto_link = "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(to) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.open(mailto_link, "_blank");
}


