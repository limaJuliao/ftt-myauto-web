
import baseUrl from "../js/index.js"
import { veiculoSelecionado } from "./vaiculo.js";

const url = baseUrl + "/usuario"

$(function(){
    cadastrarUsuario();
    obterUsuario();
})

function cadastrarUsuario(){
    $('#btnCadastrar').on('click', function(){
    
        const nome = $('#nome').val();
        const email = $('#email').val();
        const senha = $('#senha').val();
        const confirmaSenha = $('#confirmaSenha').val();

        if(nome == "") return alert ("Informe seu nome");
        if(email == "") return alert ("Informe seu e-mail");
        if(senha == "") return alert ("Informe sua senha");
        if(senha !== confirmaSenha) return alert("Senhas informadas não coinsidem.")

        const parametros = {
            nome: nome,
            email: email,
            senha: senha,
        }
        
        $.post(`${url}/cadastrar`, parametros, usuarioEncontrado)
        .fail( (error) => {
            alert("Falha ao cadastrar usuário.")
            console.log(error);
        })
    });
}

function redirectHomeWithSuccess(){
    alert("Cadastro realizado com sucesso. Você será redirecionado para a pagina inicial. Seja bem vindo ao myayto.");
    redirectHome();
}

export default redirectHome

function redirectHome(){
    window.location.href = `/home.html`;
}

function obterUsuario(){
    $('#btnLogin').on('click', function(){
        const email = $('#email').val();
        const senha = $('#senha').val();
        
        if(email == "") return alert ("Informe seu e-mail");
        if(senha == "") return alert ("Informe sua senha");
    
        const parametros = {
            email: email, 
            senha: senha
        };
    
        $.post(`${url}/login`, parametros, usuarioEncontrado)
        .fail( () => {
            alert("Usuário inválido.")
        });
    })
}

function usuarioEncontrado(data){
    redirectHome();
    iniciarSessao(data);
}

function iniciarSessao(data){
    sessionStorage.setItem("usuario", JSON.stringify(data));
    veiculoSelecionado();
}

export function usuarioLogado(){    
    return JSON.parse(sessionStorage.getItem("usuario"));
}