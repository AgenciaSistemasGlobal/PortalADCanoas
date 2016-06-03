app.config(function ($routeProvider) {
	$routeProvider

	// Primeira tela
	.when("/", {
		templateUrl: "recomendacoes.html"
	})

	// Novos Administradores
	.when("/novosUsuarios", {
		templateUrl: "signup.html",
		controller: "LoginController"
	})

	// Mensagem de email enviado com sucesso
	.when("/novosUsuarios/sucesso", {
		templateUrl: "sucesso.html",
		controller: "LoginController"
	})

	// Perfil
	.when("/perfil", {
		templateUrl: "perfil.html",
		controller: "PerfilCtrl",
		resolve: {
			dados: function (crudesAPI) {
				return crudesAPI.gatDadosUsuario(localStorage['token']);
			}
		}
	})

	/////////////
	// Inicio //
	///////////

	// Slide
	.when("/slide", {
		templateUrl: "slide.html",
		controller: "SlideCtrl",
		resolve: {
			slides: function (crudesAPI) {
				return crudesAPI.getSlides();
			}
		}
	})
	.when("/slide/novoSlide", {
		templateUrl: "novoslide.html",
		controller: "NovoSlideCtrl"
	})
	.when("/slide/editarSlide/:id", {
		templateUrl: "editarslide.html",
		controller: "EditarSlideCtrl",
		resolve: {
			slide: function (crudesAPI, $route) {
				return crudesAPI.getSlide($route.current.params.id)
			}
		}
	})

	// Destaques
	.when("/destaques", {
		templateUrl: "destaques.html",
		controller: "DestaqueCtrl",
		resolve: {
			destaques: function (crudesAPI) {
				return crudesAPI.getDestaques();
			}
		}
	})
	.when("/destaques/novoDestaque", {
		templateUrl: "novodestaque.html",
		controller: "NovoDestaqueCtrl"
	})
	.when("/destaques/editarDestaque/:id", {
		templateUrl: "editardestaque.html",
		controller: "EditarDestaqueCtrl",
		resolve: {
			destaque: function (crudesAPI, $route) {
				return crudesAPI.getDestaque($route.current.params.id)
			}
		}
	})

	// Projetos
	.when("/projetos", {
		templateUrl: "projetos.html",
		controller: "ProjetoCtrl",
		resolve: {
			projetos: function (crudesAPI) {
				return crudesAPI.getProjetos();
			}
		}
	})
	.when("/projetos/novoProjeto", {
		templateUrl: "novoprojeto.html",
		controller: "NovoProjetoCtrl"
	})
	.when("/projetos/editarProjeto/:id", {
		templateUrl: "editarprojeto.html",
		controller: "EditarProjetoCtrl",
		resolve: {
			projeto: function (crudesAPI, $route) {
				return crudesAPI.getProjeto($route.current.params.id)
			}
		}
	})

	// Galeria de Vídeos
	.when("/videos", {
		templateUrl: "videos.html",
		controller: "VideoCtrl",
		resolve: {
			videos: function (crudesAPI) {
				return crudesAPI.getVideos();
			}
		}
	})
	.when("/videos/novoVideo", {
		templateUrl: "novovideo.html",
		controller: "NovoVideoCtrl"
	})
	.when("/videos/editarVideo/:id", {
		templateUrl: "editarvideo.html",
		controller: "EditarVideoCtrl",
		resolve: {
			video: function (crudesAPI, $route) {
				return crudesAPI.getVideo($route.current.params.id)
			}
		}
	})
	.when("/videos/ajudaVideo", {
		templateUrl: "ajudavideo.html"
	})

	// Eventos
	.when("/eventos", {
		templateUrl: "eventos.html",
		controller: "EventoCtrl",
		resolve: {
			eventos: function (crudesAPI) {
				return crudesAPI.getEventos();
			}
		}
	})
	.when("/eventos/novoEvento", {
		templateUrl: "novoevento.html",
		controller: "NovoEventoCtrl"
	})
	.when("/eventos/editarEvento/:id", {
		templateUrl: "editarevento.html",
		controller: "EditarEventoCtrl",
		resolve: {
			evento: function (crudesAPI, $route) {
				return crudesAPI.getEvento($route.current.params.id)
			}
		}
	})

	// Agenda Ministerial
	.when("/agenda-ministerial", {
		templateUrl: "agendas.html",
		controller: "AgendaCtrl",
		resolve: {
			agendas: function (crudesAPI) {
				return crudesAPI.getAgendasMins();
			}
		}
	})
	.when("/agenda-ministerial/novaData", {
		templateUrl: "novoagenda.html",
		controller: "NovoAgendaCtrl"
	})
	.when("/agenda-ministerial/editarData/:id", {
		templateUrl: "editaragenda.html",
		controller: "EditarAgendaCtrl",
		resolve: {
			agenda: function (crudesAPI, $route) {
				return crudesAPI.getAgendaMins($route.current.params.id)
			}
		}
	})

	// Jornal Koinonia
	.when("/jornal-koinonia", {
		templateUrl: "jornal.html",
		controller: "JornalCtrl",
		resolve: {
			jornais: function (crudesAPI) {
				return crudesAPI.getJornais();
			}
		}
	})
	.when("/jornal-koinonia/editar/:id", {
		templateUrl: "editarjornal.html",
		controller: "EditarJornalCtrl",
		resolve: {
			jornal: function (crudesAPI, $route) {
				return crudesAPI.getJornal($route.current.params.id)
			}
		}
	})

	// Artigos
	.when("/artigos", {
		templateUrl: "artigos.html",
		controller: "ArtigoCtrl",
		resolve: {
			artigos: function (crudesAPI) {
				return crudesAPI.getArtigos();
			}
		}
	})
	.when("/artigos/novoArtigo", {
		templateUrl: "novoartigo.html",
		controller: "NovoArtigoCtrl"
	})
	.when("/artigos/editarArtigo/:id", {
		templateUrl: "editarartigo.html",
		controller: "EditarArtigoCtrl",
		resolve: {
			artigo: function (crudesAPI, $route) {
				return crudesAPI.getArtigo($route.current.params.id)
			}
		}
	})

	/////////////
	// Igreja //
	///////////

	// Sobre
	.when("/sobre", {
		templateUrl: "sobre.html",
		controller: "SobreCtrl",
		resolve: {
			sobres: function (crudesAPI) {
				return crudesAPI.getSobres();
			}
		}
	})
	.when("/sobre/editar/:id", {
		templateUrl: "editarsobre.html",
		controller: "EditarSobreCtrl",
		resolve: {
			sobre: function (crudesAPI, $route) {
				return crudesAPI.getSobre($route.current.params.id)
			}
		}
	})

	// Integrantes
	.when("/integrantes", {
		templateUrl: "integrantes.html",
		controller: "IntegranteCtrl",
		resolve: {
			integrantes: function (crudesAPI) {
				return crudesAPI.getIntegrantes();
			}
		}
	})
	.when("/integrantes/novoIntegrante", {
		templateUrl: "novointegrante.html",
		controller: "NovoIntegranteCtrl"
	})
	.when("/integrantes/editarIntegrante/:id", {
		templateUrl: "editarintegrante.html",
		controller: "EditarIntegranteCtrl",
		resolve: {
			integrante: function (crudesAPI, $route) {
				return crudesAPI.getIntegrante($route.current.params.id)
			}
		}
	})

	// Imagens
	.when("/imagens", {
		templateUrl: "imagens.html",
		controller: "ImagemCtrl",
		resolve: {
			imagens: function (crudesAPI) {
				return crudesAPI.getImagens();
			}
		}
	})
	.when("/imagens/editarImagem", {
		templateUrl: "editarimagem.html",
		controller: "EditarImagemCtrl",
		resolve: {
			imagens: function (crudesAPI) {
				return crudesAPI.getImagens();
			}
		}
	})

	////////////////////
	// Departamentos //
	//////////////////

	.when("/departamentos", {
		templateUrl: "departamentos.html",
		controller: "DepartamentosCtrl",
		resolve: {
			departamentos: function (crudesAPI) {
				return crudesAPI.getDepartamentos();
			},
			galerias: function (crudesAPI) {
				return crudesAPI.getGalerias();
			}
		}
	})
	.when("/departamentos/novoDepartamento", {
		templateUrl: "novodepartamento.html",
		controller: "DepartamentoCtrl"
	})
	.when("/departamentos/editarDepartamento/:id", {
		templateUrl: "editardepartamento.html",
		controller: "EditarDepartamentoCtrl",
		resolve: {
			departamento: function (crudesAPI, $route) {
				return crudesAPI.getDepartamento($route.current.params.id)
			},
			galeriass: function (crudesAPI) {
				return crudesAPI.getGalerias();
			}
		}
	})

	///////////////////
	// Congregações //
	/////////////////

	// Congregações
	.when("/congregacoes", {
		templateUrl: "congregacoes.html",
		controller: "CongregacaoCtrl",
		resolve: {
			congregacoes: function (crudesAPI) {
				return crudesAPI.getCongregacoes();
			}
		}
	})
	.when("/congregacoes/novaCongregacao", {
		templateUrl: "novacongregacao.html",
		controller: "NovaCongregacaoCtrl",
		resolve: {
			distritos: function (crudesAPI) {
				return crudesAPI.getDistritos();
			}
		}
	})
	.when("/congregacoes/editarCongregacao/:id", {
		templateUrl: "editarcongregacao.html",
		controller: "EditarCongregacaoCtrl",
		resolve: {
			congregacao: function (crudesAPI, $route) {
				return crudesAPI.getCongregacao($route.current.params.id)
			},
			distritos: function (crudesAPI) {
				return crudesAPI.getDistritos()
			}
		}
	})

	// Distritos
	.when("/distritos", {
		templateUrl: "distritos.html",
		controller: "DistritoCtrl",
		resolve: {
			distritos: function (crudesAPI) {
				return crudesAPI.getDistritos();
			}
		}
	})
	.when("/distritos/novoDistrito", {
		templateUrl: "novodistrito.html",
		controller: "NovoDistritoCtrl"
	})
	.when("/distritos/editarDistrito/:id", {
		templateUrl: "editardistrito.html",
		controller: "EditarDistritoCtrl",
		resolve: {
			distrito: function (crudesAPI, $route) {
				return crudesAPI.getDistrito($route.current.params.id)
			}
		}
	})

	/////////////
	// Agenda //
	////////////
	.when("/agenda", {
		templateUrl: "agenda.html",
		controller: "Agenda2Ctrl",
		resolve: {
			agendas: function (crudesAPI) {
				return crudesAPI.getAgendas();
			}
		}
	})
	.when("/agenda/novoAgenda", {
		templateUrl: "novoagendaso.html",
		controller: "NovoAgenda2Ctrl"
	})
	.when("/agenda/editarAgenda/:id", {
		templateUrl: "editaragendaso.html",
		controller: "EditarAgenda2Ctrl",
		resolve: {
			agenda: function (crudesAPI, $route) {
				return crudesAPI.getAgenda($route.current.params.id)
			}
		}
	})

	///////////////
	// Noticias //
	/////////////
	.when("/noticias", {
		templateUrl: "noticias.html",
		controller: "NoticiasCtrl",
		resolve: {
			noticias: function (crudesAPI) {
				return crudesAPI.getNoticias();
			}
		}
	})
	.when("/noticias/novoNoticia", {
		templateUrl: "novonoticia.html",
		controller: "NovoNoticiaCtrl"
	})
	.when("/noticias/editarNoticia/:id", {
		templateUrl: "editarnoticia.html",
		controller: "EditarNoticiaCtrl",
		resolve: {
			noticia: function (crudesAPI, $route) {
				return crudesAPI.getNoticia($route.current.params.id)
			}
		}
	})

	//////////////////////////
	// Localização/Contato //
	////////////////////////

	.when("/localizacao-contato", {
		templateUrl: "contato_localizacao.html",
		controller: "ContatoCtrl",
		resolve: {
			contatos: function (crudesAPI) {
				return crudesAPI.getContatos();
			}
		}
	})

	.when("/localizacao-contato/editar/:id", {
		templateUrl: "editarcontato.html",
		controller: "EditarContatoCtrl",
		resolve: {
			contato: function (crudesAPI, $route) {
				return crudesAPI.getContato($route.current.params.id)
			}
		}
	})

	$routeProvider.otherwise({redirectTo: '/'});
})