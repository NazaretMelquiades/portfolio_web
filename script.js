document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value.trim();
    const lastname = event.target.elements.lastname.value.trim();
    const email = event.target.elements.email.value.trim();
    const telefono = event.target.elements.telefono.value.trim();

    let msj = "";

    if (name.length < 2 || name.length > 30) {
        msj += "El nombre tiene que estar comprendido entre 2 y 30 caracteres\n";
    }

    if (lastname.length < 3 || lastname.length > 30) {
        msj += "El apellido debe tener entre 3 y 30 caracteres\n";
    }

    // Validar email
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
        msj += "El email no es válido.\n";
    }

    // Validar teléfono (formato 000-000-000)
    const telRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
    if (!telRegex.test(telefono)) {
        msj += "El teléfono debe tener el formato 000-000-000.\n";
    }

    if (msj) {
        alert(msj);
    } else {
        alert("Formulario enviado con éxito");
        event.target.reset();
    }
});
