$(function(){
	const url_key = "https://api.nasa.gov/planetary/apod?api_key=LAgHhV4J8lHUU7pvT9A0rwVJpz3teTvJ3vfcZW2W";
	

	// Obtendo a data atual
	let Data_atual = new Date();

	let dataFormatada = Data_atual.toLocaleString('en-US', { timeZone: 'America/New_York' });
	Data_atual = new Date(dataFormatada);

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


	console.log(Data_atual);


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
	  		$('#link-img-completa').attr('href',data[6].url);
			var urlDay = data[6].url; 
			if(urlDay.includes("youtube")){
				  $('#img-day').css('display','none');
				  $('#video-principal').css('display','');
				  $('#video-link').attr('href',urlDay);
				  console.log(urlDay);
			  }
  
	  		//

	  		//preenchimento da img da semana 
	  		for (const index in data){
	  			var tagImg = "#img-" + index;
				var tagTituloImg = "#titulo-img-" + index;
				var tagDescricaoImg = "#descricao-img-" + index;
				var tagDataImg = "#data-img-" + index;
				var descricaoImg = data[index].explanation;
				var videoPrinciapal = "#video-principal-"+index;
				var videoLink = "#video-link-"+index;
				var urlDayImgSemana = data[index].url;
				descricaoImg = descricaoImg.slice(0, 150) + "...";
				

	  			if(urlDayImgSemana.includes("youtube")){
					$(tagImg).css('display','none');

					$(videoPrinciapal).css('display','');
					$(videoLink).attr('src',data[index].url);

					$(tagTituloImg).text(data[index].title);
					$(tagDescricaoImg).text(descricaoImg);
					$(tagDataImg).text(data[index].date);

					console.log("preenchimento youtube");
					console.log(videoPrinciapal);
				}else{
					$(tagImg).attr('src',data[index].url);
	  				$(tagTituloImg).text(data[index].title);
					$(tagDescricaoImg).text(descricaoImg);
					$(tagDataImg).text(data[index].date);
				}
	  		}

	  		//preenchimento da galeria

	  		for (var i = 3; i >= 0; i--) {
	  			var tagImg = '#img-intro-'+i;
	  			var srcUrl = data[i].url;
	  			if(srcUrl.includes("youtube")){
	  				$(tagImg).attr('src',srcUrl+1);
	  			}else{
	  				$(tagImg).attr('src',srcUrl);	
	  			}	  			
	  		}

	  	}
	  })
	  .catch(error => {
	    // Trata erros de rede ou problemas na requisição
	    console.error('There was a problem with the fetch operation:', error);
	});

	$('#link-post').click(
		function(){
		 navigator.clipboard.writeText("https://imagenday.vercel.app/")
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


//<p class="descricao-pag" id="descricao-pag">"Todos os dias uma imagen do cosmo com uma breve descrição"</p>
