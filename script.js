$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'))

    document.querySelector('header button').addEventListener('click' ,function(e) {

    })
    $('header button').click(function(){// **** isso se chama callback
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e) 
    {e.preventDefault()
    const endereçoImg = $('#endereço').val();
    const novaImg = $('<li style="display:none"></li>');
    $(`<img src="${endereçoImg}"/>`).appendTo(novaImg);
    $(`
    <div class="overlay">
    <a href="endereçoImg" title="Ver imgagem em Tamanho real" target="_blank"
    rel="noopener noreferrer">  
    Ver imagem</a>
        </div>
        `).appendTo(novaImg);
        $(novaImg).appendTo('ul');
        $(novaImg).fadeIn(1000);
        $('#endereço').val('');
    })
})

