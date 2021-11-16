
import baseUrl from "../js/index.js"
import redirectHome from "../js/usuario.js"
import { usuarioLogado } from "../js/usuario.js";

const url = baseUrl + "/veiculo";

$(function(){
    cadastrarVeiculo();
    carregarMeusVeiculos();
    selecionarVeiculo();
})

function cadastrarVeiculo(){
    $('#btnCadastrarVeiculo').click( () => {

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
       
        $.post(`${url}/cadastrar`, veiculo, carregarVeiculosAposCadastrarUmNovo);
    })
}

function carregarVeiculosAposCadastrarUmNovo(){
    carregarMeusVeiculos();
    redirectHome();
}

function carregarMeusVeiculos(){
    $.post(`${url}/usuario`, usuarioLogado(), preencheBoxVeiculos)
}

function preencheBoxVeiculos(data){
    var listaVeiculos = document.getElementById("meusVeiculos");
    data?.forEach(veiculo => {
        var novoVeiculo = document.createElement("option");
        novoVeiculo.value = veiculo.id;
        novoVeiculo.text = veiculo.modelo;
        listaVeiculos.options.add(novoVeiculo, 0);
    });
}

function selecionarVeiculo(){
    $('#meusVeiculos').on('change', () => {
        let veiculo = {
            id: $('#meusVeiculos').val()
        }
        sessionStorage.setItem("veiculo", JSON.stringify(veiculo));
    })
}

export function veiculoSelecionado() {
    return JSON.parse(sessionStorage.getItem("veiculo"));
}