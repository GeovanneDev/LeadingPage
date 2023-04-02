function register() {
    const resp = confirm("Deseja ver o meu perfil no Linkedin?");
    if (resp == true) {
        alert("\n\nExelente! \n\n você será redirecionado ao meu perfil no Linkedin");
        window.location = "https://www.linkedin.com/in/geovanne-fernandes-479929238/";
    }
    else // false
        alert("Ok , muito Obrigado");
}