const datos = {  //constante llamada datos
    nombre: "Devtop",
    direccion: "Las Americas # 19121, Santiago",
    telefono: "+56 9 1234 5678",
    email: "soporte@devtop.cl",
    website: "www.devtop.cl"
};

const divDatos = document.getElementById('datos-empresa');
divDatos.innerHTML = `
    <h2>Datos de la Empresa</h2>
    <p><strong>Nombre:</strong> ${datos.nombre}</p>
    <p><strong>Dirección:</strong> ${datos.direccion}</p>
    <p><strong>Teléfono:</strong> ${datos.telefono}</p>
    <p><strong>Email:</strong> <a href="mailto:${datos.email}">${datos.email}</a></p>
    <p><strong>Sitio Web:</strong> <a href="https://liceovvh.cl" target="_blank">${datos.website}</a></p>`;
	
	
const btnMostrar = document.getElementById('mostrar');

btnMostrar.addEventListener('click', () => {
	divDatos.style.display = 'block';
});

const btnOcultar = document.getElementById('ocultar');

btnOcultar.addEventListener('click', () => {
	divDatos.style.display = 'none';
});