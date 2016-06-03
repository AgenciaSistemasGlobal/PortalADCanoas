app.config(function ($routeProvider) {
	$routeProvider

	// Home
	.when("/", {
		templateUrl: "home.html",
		controller: "homeCtrl",
		resolve: {
			slides: function (crudesAPI) {
				return crudesAPI.getSlides();
			},
			destaques: function (crudesAPI) {
				return crudesAPI.getDestaques();
			},
			noticias: function (crudesAPI) {
				return crudesAPI.getNoticias();
			},
			projetos: function (crudesAPI) {
				return crudesAPI.getProjetos();
			},
			videos: function (crudesAPI) {
				return crudesAPI.getVideos();
			},
			artigos: function (crudesAPI) {
				return crudesAPI.getArtigos();
			},
			eventos: function (crudesAPI) {
				return crudesAPI.getEventos();
			},
			agendas: function (crudesAPI) {
				return crudesAPI.getAgendasMins();
			},
			jornais: function (crudesAPI) {
				return crudesAPI.getJornais();
			}
		}
	})

	// Jornal Koinonia
	.when("/Jornal-Koinonia", {
		templateUrl: "JornalKoinonia/samples/basic/index.html"
	})

	// Todos + mais
	.when("/mais/:table/:id", {
		templateUrl: "mais.html",
		controller: "maisCtrl",
		resolve: {
			mais: function (crudesAPI, $route) {
				return crudesAPI.getMais($route.current.params.table, $route.current.params.id)
			}
		}
	})

	// Igreja / Sobre
	.when("/Igreja", {
		templateUrl: "sobre.html",
		controller: "sobreCtrl",
		resolve: {
			sobres: function (crudesAPI) {
				return crudesAPI.getSobres();
			},
			integrantes: function (crudesAPI) {
				return crudesAPI.getIntegrantes();
			},
			imagens: function (crudesAPI) {
				return crudesAPI.getImagens();
			}
		}
	})

	// Departamentos
	.when("/Departamentos", {
		templateUrl: "departamentos.html",
		controller: "departamentosCtrl",
		resolve: {
			departamentos: function (crudesAPI) {
				return crudesAPI.getDepartamentos();
			},
			galerias: function (crudesAPI) {
				return crudesAPI.getGalerias();
			}
		}
	})

	// Congregações
	.when("/Congregacoes", {
		templateUrl: "congregacoes.html",
		controller: "congregacoesCtrl",
		resolve: {
			congregacoes: function (crudesAPI) {
				return crudesAPI.getCongregacoes();
			},
			distritos: function (crudesAPI) {
				return crudesAPI.getDistritos();
			}
		}
	})

	// Agenda
	.when("/Agenda", {
		templateUrl: "agenda.html",
		controller: "agendaCtrl",
		resolve: {
			agendas: function (crudesAPI) {
				return crudesAPI.getAgendas();
			}
		}
	})

	// Noticias
	.when("/Noticias", {
		templateUrl: "noticias.html",
		controller: "NoticiasCtrl",
		resolve: {
			noticias: function (crudesAPI) {
				return crudesAPI.getNoticias();
			}
		}
	})

	// Contato
	.when("/Contato", {
		templateUrl: "contato.html",
		controller: "contatoCtrl",
		resolve: {
			contatos: function (crudesAPI) {
				return crudesAPI.getContatos();
			}
		}
	})

	$routeProvider.otherwise({redirectTo: '/'});
})