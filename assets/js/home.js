document.addEventListener("DOMContentLoaded", function(event) {
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId),
    aRefVeiculo= document.getElementById('veiculo'),
    aRefAbastecimento = document.getElementById('abastecimento'),
    aRefAdministracao= document.getElementById('administracao'),
    aRefServico = document.getElementById('servico'),
    aRefDespesa = document.getElementById('despesa'),
    aRefReceita = document.getElementById('receita'),
    aRefPercurso = document.getElementById('percurso'),
    aRefLembrete= document.getElementById('lembrete'),
    aRefHome=document.getElementById('home');
 


    aRefHome.addEventListener('click', function() {
        //if(index.style.display === 'block') {
          // index.style.display = 'none';
      // } else {
           //index.style.display = 'block';
      // }
      document.querySelector('#index').style.display = 'block';
      document.querySelector('#telaAbastecimento').style.display = 'none';
      document.querySelector('#telaAdministracao').style.display = 'none';
      document.querySelector('#telaServico').style.display = 'none';
      document.querySelector('#telaDespesa').style.display = 'none';
      document.querySelector('#telaReceita').style.display = 'none';
      document.querySelector('#telaPercurso').style.display = 'none';
      document.querySelector('#telaLembrete').style.display = 'none';
      document.querySelector('#telaVeiculo').style.display = 'none';
     });
     
    aRefVeiculo.addEventListener('click', function() {
        //if(index.style.display === 'block') {
          // index.style.display = 'none';
      // } else {
           //index.style.display = 'block';
      // }
      document.querySelector('#index').style.display = 'none';
      document.querySelector('#telaAbastecimento').style.display = 'none';
      document.querySelector('#telaAdministracao').style.display = 'none';
      document.querySelector('#telaServico').style.display = 'none';
      document.querySelector('#telaDespesa').style.display = 'none';
      document.querySelector('#telaReceita').style.display = 'none';
      document.querySelector('#telaPercurso').style.display = 'none';
      document.querySelector('#telaLembrete').style.display = 'none';
      document.querySelector('#telaVeiculo').style.display = 'block';
     });

    aRefAbastecimento.addEventListener('click', function() {
       //if(index.style.display === 'block') {
           // index.style.display = 'none';
       // } else {
            //index.style.display = 'block';
       // }
       document.querySelector('#telaAbastecimento').style.display = 'block';
       document.querySelector('#telaServico').style.display = 'none';
       document.querySelector('#telaDespesa').style.display = 'none';
       document.querySelector('#telaReceita').style.display = 'none';
       document.querySelector('#telaPercurso').style.display = 'none';
       document.querySelector('#telaLembrete').style.display = 'none';
    document.querySelector('#index').style.display = 'none';
    document.querySelector('#telaAdministracao').style.display = 'none';
    document.querySelector('#telaVeiculo').style.display = 'none';

      });
      aRefAdministracao.addEventListener('click', function() {
        //if(index.style.display === 'block') {
            // index.style.display = 'none';
        // } else {
             //index.style.display = 'block';
        // }
        document.querySelector('#telaAbastecimento').style.display = 'none';
        document.querySelector('#telaServico').style.display = 'none';
        document.querySelector('#telaDespesa').style.display = 'none';
        document.querySelector('#telaReceita').style.display = 'none';
        document.querySelector('#telaPercurso').style.display = 'none';
        document.querySelector('#telaLembrete').style.display = 'none';
     document.querySelector('#index').style.display = 'none';
     document.querySelector('#telaAdministracao').style.display = 'block';
     document.querySelector('#telaVeiculo').style.display = 'none';
     document.querySelector('#telaVeiculo').style.display = 'none';
 
       });


      aRefServico.addEventListener('click', function() {
        //if(index.style.display === 'block') {
            // index.style.display = 'none';
        // } else {
             //index.style.display = 'block';
        // }
        document.querySelector('#telaAbastecimento').style.display = 'none';
        document.querySelector('#telaServico').style.display = 'block';
        document.querySelector('#telaDespesa').style.display = 'none';
        document.querySelector('#telaReceita').style.display = 'none';
        document.querySelector('#telaPercurso').style.display = 'none';
        document.querySelector('#telaLembrete').style.display = 'none';
     document.querySelector('#index').style.display = 'none';
     document.querySelector('#telaAdministracao').style.display = 'none';
     document.querySelector('#telaVeiculo').style.display = 'none';
 
       });
       aRefDespesa.addEventListener('click', function() {
        //if(index.style.display === 'block') {
            // index.style.display = 'none';
        // } else {
             //index.style.display = 'block';
        // }
        document.querySelector('#telaAbastecimento').style.display = 'none';
        document.querySelector('#telaServico').style.display = 'none';
        document.querySelector('#telaDespesa').style.display = 'block';
        document.querySelector('#telaReceita').style.display = 'none';
        document.querySelector('#telaPercurso').style.display = 'none';
        document.querySelector('#telaLembrete').style.display = 'none';
     document.querySelector('#index').style.display = 'none';
     document.querySelector('#telaAdministracao').style.display = 'none';
     document.querySelector('#telaVeiculo').style.display = 'none';
 
       });

       aRefReceita.addEventListener('click', function() {
        //if(index.style.display === 'block') {
            // index.style.display = 'none';
        // } else {
             //index.style.display = 'block';
        // }
        document.querySelector('#telaAbastecimento').style.display = 'none';
        document.querySelector('#telaServico').style.display = 'none';
        document.querySelector('#telaDespesa').style.display = 'block';
        document.querySelector('#telaReceita').style.display = 'none';
        document.querySelector('#telaPercurso').style.display = 'none';
        document.querySelector('#telaLembrete').style.display = 'none';
     document.querySelector('#index').style.display = 'none';
     document.querySelector('#telaAdministracao').style.display = 'none';
     document.querySelector('#telaVeiculo').style.display = 'none';
 
       });
       aRefPercurso.addEventListener('click', function() {
        //if(index.style.display === 'block') {
            // index.style.display = 'none';
        // } else {
             //index.style.display = 'block';
        // }
        document.querySelector('#telaAbastecimento').style.display = 'none';
        document.querySelector('#telaServico').style.display = 'none';
        document.querySelector('#telaDespesa').style.display = 'none';
        document.querySelector('#telaReceita').style.display = 'none';
        document.querySelector('#telaPercurso').style.display = 'block';
        document.querySelector('#telaLembrete').style.display = 'none';
     document.querySelector('#index').style.display = 'none';
     document.querySelector('#telaAdministracao').style.display = 'none';
     document.querySelector('#telaVeiculo').style.display = 'none';
 
       });
       aRefLembrete.addEventListener('click', function() {
        //if(index.style.display === 'block') {
            // index.style.display = 'none';
        // } else {
             //index.style.display = 'block';
        // }
        document.querySelector('#telaAbastecimento').style.display = 'none';
        document.querySelector('#telaServico').style.display = 'none';
        document.querySelector('#telaDespesa').style.display = 'none';
        document.querySelector('#telaReceita').style.display = 'none';
        document.querySelector('#telaPercurso').style.display = 'none';
        document.querySelector('#telaLembrete').style.display = 'block';
     document.querySelector('#index').style.display = 'none';
     document.querySelector('#telaAdministracao').style.display = 'none';
     document.querySelector('#telaVeiculo').style.display = 'none';
 
       });
    

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change iconss
 
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
   
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    // Your code to run since DOM is loaded and ready
   
    });


