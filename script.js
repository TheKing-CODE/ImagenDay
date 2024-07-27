	**{
		margin: 0;
	    padding: 0; 

	}


	header{
		text-align: center;
	}

	body{
		background-color: #f5e8c6;
	}

	.inicio{
		height: 100vh;
	}



	.contanie-img{
		display: grid;
		grid-template-columns: 1fr 1fr;
		border-style: solid;
		height: 100%;
		
	}

	.contanie-img .img-day{
		width: 100%;
		height: 100%;
	}

	.contanie-img .dados-img{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 10%;
		margin-left: 20px;
		width: 90%;
		height: 100%;
		grid-area: 1 2 1 2;		
	}

	.contanie-img .dados-img button{
	    background-color: #ef3353; /* Cor de fundo */
	    color: white; /* Cor do texto */
	    border: none; /* Remover borda */
	    padding: 10px 20px; /* Espaçamento interno */
	    text-align: center; /* Alinhamento do texto */
	    text-decoration: none; /* Remover sublinhado */
	    display: inline-block; /* Exibir como um bloco */
	    font-size: 18px; /* Tamanho da fonte */
	    width: 65%;
	    
	    cursor: pointer; /* Cursor ao passar */
	    border-radius: 20px; /* Raio da borda para arredondar */
	    transition: background-color 0.3s ease; /* Transição suave de cor de fundo */
	    box-shadow: 0px 0px 0px 2px;
	    margin: auto 4px;
	    margin-top: 10px;		
	}

	.cards-img{
	 	display: grid;
	    grid-template-columns: 1fr;
	    grid-template-rows: 1fr;    
	    width: 90%;
	    max-width: 1140px;
	    min-width: 1fr;
	    height: 100vh;
	    margin: auto; 
	    margin-bottom: 20px;  	    
	    margin-top: 10%;
	}

	.cards-img .titulo, .texto-titulo{
		text-align: center;
	}

	.cards-img .cards-blocos{		
		gap: 10px;
	}

	.cards-img ul{
			
	}

	.cards-img ul li{
		display: inline-flex;
		list-style-type: none;		
		margin: 10px;
		align-items: center;	
		border-style: solid;
		padding: 5px;	
	}

	.cards-img ul li span{		
		
	}

	.cards-img ul li .dados-img{
		display: grid;
		gap: 0px;
		margin-left: 20px;		
		width: 520px;
		max-width: 520px;
	}

	.cards-img ul li .dados-img #titulo-img{
		font-weight: bolder;		
		font-size: 30px;
	}

	.cards-img ul li .dados-img .descricao-img{
		font-size: 22px;
		font-style: italic;
		max-height: 4.8em;
	}

	.cards-img ul li .dados-img button{
	    background-color: #ef3353; /* Cor de fundo */
	    color: white; /* Cor do texto */
	    border: none; /* Remover borda */
	    padding: 10px 20px; /* Espaçamento interno */
	    text-align: center; /* Alinhamento do texto */
	    text-decoration: none; /* Remover sublinhado */
	    display: inline-block; /* Exibir como um bloco */
	    font-size: 18px; /* Tamanho da fonte */
	    width: 65%;
	    
	    cursor: pointer; /* Cursor ao passar */
	    border-radius: 20px; /* Raio da borda para arredondar */
	    transition: background-color 0.3s ease; /* Transição suave de cor de fundo */
	    box-shadow: 0px 0px 0px 2px;
	    margin: auto 4px;
	    margin-top: 10px;				
	}


	.cards-img ul li img{
		max-width: 420px;		
	}


	.cards-img ul li:hover{

	}

	.cards-img ul li img:hover{
	
	}

	

	@media (max-width: 767px){
		.contanie-img{
			grid-template-columns: 1fr;
			grid-auto-flow: 1fr;
			height: auto;
		}

		.contanie-img .dados-img button{
			margin-bottom: 10px;
		}

		.contanie-img .img-day{
			
		}

	}
