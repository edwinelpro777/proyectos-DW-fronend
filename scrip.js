function Datos(){
     let name = document.getElementById('nombre').value;
     let LastName = document.getElementById('apellido').value;
     let user = document.getElementById('usuario').value;
     let email = document.getElementById('correo').value;
     let password = document.getElementById('contraseña').value;
     let Terminos = document.getElementById('terminos').value;

     alert(`informacion:\n
         Nombre: ${name}\n
         Apellido: ${LastName}\n
         Nombre de usuario: ${user}\n
         Correo electronico: ${email}\n
         Contraseña: ${password}\n`);
}

function color(){
    document.body.classList.toggle('dark')
}