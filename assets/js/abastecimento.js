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
})

function cadastrarAbastecimento() {
    $("#btnCadastrarAbastecimento").click(() => {
        console.log("botão funcionando")

        let data = $('#dp1').val();
        let odometro = $('#odometro').val();
        let precoLitro = $('#precoLitro').val();
        let volume = $('#volume').val();
        let precoTotal = $('#precoTotal').val();
        let veiculoId;

        let abastecimento = {
            data: data,
            odometro: odometro,
            precoLitro: precoLitro,
            volume: volume,
            precoTotal: precoTotal,
            veiculoId: veiculoSelecionado().id
        };
        console.log(data)
        console.log(Date.parse(data))
        console.log(new Date(data))
        console.log(abastecimento);

        $.post(`${url}/cadastrar`, abastecimento, redirectHome)

    })
}