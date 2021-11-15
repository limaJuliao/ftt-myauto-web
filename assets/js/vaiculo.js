
import baseUrl from "../js/index.js"
import redirectHome from "../js/usuario.js"
import { usuarioLogado } from "../js/usuario.js";

const url = baseUrl + "/veiculo";

$(function(){
    console.log(url)
    cadastrarVeiculo();
    carregarMeusVeiculos();
})

function cadastrarVeiculo(){
    $('#btnCadastrarVeiculo').click( () => {
        console.log("Cadastrando novo veiculo.")

        const marca = $('#marca').val();
        const modelo = $('#modelo').val();
        const ano = $('#ano').val();
        const apelido = $('#apelido').val();
    
        if(marca == "") return alert ("Informe a marca do veículo.");
        if(modelo == "") return alert ("Informe o modelo do veiculo");

        const veiculo = {
            marca: marca,
            modelo: modelo,
            usuarioId: usuarioLogado().id
        }

        console.log(veiculo);
       
        $.post(`${url}/cadastrar`, veiculo, redirectHome);
    })
}

function carregarMeusVeiculos(){
    console.log("Carregando meus veiculos");
    $.post(`${url}/usuario`, usuarioLogado(), preencheBoxVeiculos)
}

function preencheBoxVeiculos(data){
    var listaVeiculos = document.getElementById("meusVeiculos");
    data?.forEach(veiculo => {
        var novoVeiculo = document.createElement("option");
        novoVeiculo.text = veiculo.modelo;
        listaVeiculos.options.add(novoVeiculo, 0);
    });
}