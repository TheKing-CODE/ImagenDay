$(function(){
	const url_key = "https://api.nasa.gov/planetary/apod?api_key=LAgHhV4J8lHUU7pvT9A0rwVJpz3teTvJ3vfcZW2W";
	

	// Obtendo a data atual
	let Data_atual = new Date();

	// Obtendo o mês atual e adicionando 1 para corrigir a base zero
	var mes = Data_atual.getMonth() + 1;

	// Formatando o mês com zero à esquerda se necessário
	var mesFormatado = mes.toString().padStart(2, '0');

	// Formatando o dia com zero à esquerda se necessário
	var dia = (Data_atual.getDate()-6).toString().padStart(2, '0');

	// Criando a data futura no formato YYYY-MM-DD
	let Data_futura = Data_atual.getFullYear().toString() + "-" + mesFormatado + "-" + dia;

	const formatter = new Intl.DateTimeFormat('pt-BR', {
	  year: 'numeric',
	  month: 'long',
	  day: 'numeric',
	  weekday: 'long' // Opcional, para incluir o nome do dia da semana
	}); //  API Intl.DateTimeFormat


	// Fazendo a requisição GET
	fetch(url_key+"&start_date="+Data_futura)		
	  .then(response => {
	    // Verifica se a resposta foi bem-sucedida
	    if (!response.ok) {
	      throw new Error('Network response was not ok');
	    }
	    // Retorna a resposta como JSON
	    return response.json();
	  })
	  .then(data => {	  	
	  	if(Array.isArray(data)){
	  		Data_atual = formatter.format(Data_atual);

	  		//Exibindo a imagen do dia
	  		$('#dia-img').text(Data_atual.toString());
	  		$('#titulo-img').text(data[6].title);	
	  		$('#descricao-img').text(data[6].explanation);
	  		$('#autor').text(data[6].copyright);
	  		$('#img-day').attr('src',data[6].url);
	  		//

	  		//preenchimento da img da semana 
	  		for (const index in data){
	  			var tagImg = "#img-" + index;
	  			var tagDados = "li .dados-img:nth-of-type(" + index + ")";
	  			$('li .dados-img:nth-of-type(3)')


	  			$(tagImg).attr('src',data[index].url);
	  			$('li .dados-img:nth-of-type(3)')
	  		}


	  				// texto.textContent = originalText.substring(0, previewLength) + '...';
		        // <li class="img-6">
		        //     <img class="img-6" id="img-5" src="" alt="Imagem 6">
		        //     <div class="dados-img" id="dados-img">
		        //     	<span id="titulo-img" style="">Nome imagen</span><br/>	
			      //       <span class="descricao-img" style="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span><br/>
			      //       <button>Veja mais!</button></br>
			      //       <span class="data-img" id="data-img" style="margin-left: 15px;">sábado, 27 de julho de 2024</span><br/>
		        // 	</div>
		        // </li>	  		

















	  	}
	  })
	  .catch(error => {
	    // Trata erros de rede ou problemas na requisição
	    console.error('There was a problem with the fetch operation:', error);
	});

	$('#link-post').click(
		function(){
		 navigator.clipboard.writeText("google.com")
        .then(() => {
            $('#link-post').text("Link Copiado!");
            $('#link-post').css('background-color','#ef6383');// background-color: #ef3353
        })
        .catch(err => {
            console.error('Falha ao copiar o texto: ', err);
        });
		}
	);  
})


