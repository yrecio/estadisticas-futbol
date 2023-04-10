// tabla dinamica
import { datos } from 'https://yrecio.github.io/estadisticas-futbol/recursos/datos-futbol.js';


let id = []
let listavalores = []
    
let tablaD = document.getElementById("tablaD")

for (let i = 0; i < datos.length; i++) {
    id.push(i);
    listavalores.push(`
	<tr>
        <th id="Equipo"><img width='30rem' src='${datos[i].url_icon}'> ${datos[i].Equipo}</th>
        <td id="Goles_a_favor_de_cabeza">${datos[i].Goles_a_favor_de_cabeza}</td>
        <td id="Goles_a_favor_con_el_pie_izquierdo">${datos[i].Goles_a_favor_con_el_pie_izquierdo}</td>
        <td id="Goles_a_favor_con_el_pie_derecho">${datos[i].Goles_a_favor_con_el_pie_derecho}</td>
        <td id="Goles_a_favor_de_penalti">${datos[i].Goles_a_favor_de_penalti}</td>
	</tr>
    `);
}

let tabla = `
    <table>
        <thead>
            <tr>
                <th>Equipo</th>
                <th>Goles a favor de cabeza</th>
                <th>Goles a favor con el pie izquierdo</th>
                <th>Goles a favor con el pie derecho</th>
                <th>Goles a favor de penalti</th>
            </tr>
        </thead>
        <tbody>
            ${listavalores.join('')}
        </tbody>
    </table>
`;

	tablaD.innerHTML = tabla;