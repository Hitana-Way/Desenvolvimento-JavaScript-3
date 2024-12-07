const titulo = document.getElementById('titulo');
const link = document.querySelector('a');
const listaNaoOrdenada = document.querySelector('ul');
const listaOrdenada = document.getElementById('lista-ordenada');

titulo.innerText = " Conheça a Proz! ";
link.innerText = "Consulte o site da Proz Educação";

 
listaNaoOrdenada.innerHTML = `
    <li> Técnico em Enfermagem </li>
    <li> Técnico em Farmácia </li>
    <li> Técnico em Estética </li>
`


listaOrdenada.innerHTML = `
    <li><a href="https://www.facebook.com/prozeducacaobr">Facebook</a></li>
    <li><a href="https://www.instagram.com/prozeducacaobr">Instagram</a></li>
    <li><a href="https://www.linkedin.com/company/prozeducacao">Linkedin</a></li>
`