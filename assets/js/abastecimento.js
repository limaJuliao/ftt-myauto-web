import baseUrl from "../js/index.js"
import { veiculoSelecionado } from "../js/vaiculo.js";
import redirectHome from "./usuario.js";

const url = baseUrl + "/abastecimento";

document.addEventListener("DOMContentLoaded", function(event) {
    $('.datepicker').datepicker({
        format: 'yyyy-MM-dd',
        todayHighlight: true,
        toggleActive: true
    });
});

$(() => {
    cadastrarAbastecimento();
    listarAbastecimento();
})

function cadastrarAbastecimento() {
    $("#btnCadastrarAbastecimento").click(() => {
        console.log("botão funcionando")

        let data = $('#dp1').val();
        let odometro = $('#odometro').val();
        let precoLitro = $('#precoLitro').val();
        let volume = $('#volume').val();
        let precoTotal = $('#precoTotal').val();

        let abastecimento = {
            data: data,
            odometro: odometro,
            precoLitro: precoLitro,
            volume: volume,
            precoTotal: precoTotal,
            veiculoId: veiculoSelecionado().id
        };

        $.post(`${url}/cadastrar`, abastecimento, redirectHome)

    })
}

function listarAbastecimento(){
    $('#home').on('click', () => {

        let dados = {
            id: veiculoSelecionado().id
        }


        $.post(`${url}/veiculo`, dados, (response)=>{
            response?.forEach(abastecimento => {
                
                console.log(JSON.stringify(abastecimento));
                
                // $('#tbHistorico > tbody').append("<tr><td>1</td><td>2</td><td>3</td><td>4</td></tr>");             
                
            });
        })
    })
}