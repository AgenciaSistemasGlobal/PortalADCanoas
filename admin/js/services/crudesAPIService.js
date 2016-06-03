app.factory('crudesAPI', function ($http, configUrls) {
    
    var _getDadosUsuarios = function (token) {
        return $http.get('../endpoints/listarDados.php?token=' + token);
    };

    var _getMais = function (table, id) {
        if(id!='all'){
            if(table == 'destaques'){
                return $http.get(configUrls.baseDestaquesUrl + '/listarDestaque.php?id=' + id);
            }else if(table == 'artigos'){
                return $http.get(configUrls.baseArtigosUrl + '/listarArtigo.php?id=' + id);
            }else if(table == 'agendas'){
                return $http.get(configUrls.baseAgendaUrl + '/listarAgenda.php?id=' + id);
            }else if(table == 'noticias'){
                return $http.get(configUrls.baseNoticiasUrl + '/listarNoticia.php?id=' + id);
            }
        }else{
            if(table == 'noticias'){
                return $http.get(configUrls.baseNoticiasUrl + '/listarNoticias.php');
            }else if(table == 'projetos'){
                return $http.get(configUrls.baseProjetosUrl + '/listarProjetos.php');
            }else if(table == 'eventos'){
                return $http.get(configUrls.baseEventosUrl + '/listarEventos.php');
            }else if(table == 'agenda-ministerial'){
                return $http.get(configUrls.baseAgendasUrl + '/listarAgendas.php');
            }else if(table == 'videos'){
                return $http.get(configUrls.baseVideosUrl + '/listarVideos.php');
            }
        }
    };

    //////////////////
    ///// Inicio ////
    ////////////////

    // Slides
    var _getSlides = function () {
        return $http.get(configUrls.baseSlideUrl + '/listarSlides.php');
    };

    var _getSlide = function (id) {
        return $http.get(configUrls.baseSlideUrl + '/listarSlide.php?id=' + id);
    };

    var _saveSlide = function (fd) {
        return $http.post(configUrls.baseSlideUrl + '/adicionarSlide.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    var _deleteSlide = function (id) {
        return $http.delete(configUrls.baseSlideUrl + '/deletarSlide.php', {
            data: {id: id.toString()}
        });
    };

    // Destaques
    var _getDestaques = function () {
        return $http.get(configUrls.baseDestaquesUrl + '/listarDestaques.php');
    };

    var _getDestaque = function (id) {
        return $http.get(configUrls.baseDestaquesUrl + '/listarDestaque.php?id=' + id);
    };

    var _saveDestaque = function (fd) {
        return $http.post(configUrls.baseDestaquesUrl + '/adicionarDestaque.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    var _deleteDestaque = function (id) {
        return $http.delete(configUrls.baseDestaquesUrl + '/deletarDestaque.php', {
            data: {id: id.toString()}
        });
    };

    // Projetos
    var _getProjetos = function () {
        return $http.get(configUrls.baseProjetosUrl + '/listarProjetos.php');
    };

    var _saveProjeto = function (fd) {
        return $http.post(configUrls.baseProjetosUrl + '/adicionarProjeto.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    var _getProjeto = function (id) {
        return $http.get(configUrls.baseProjetosUrl + '/listarProjeto.php?id=' + id);
    };

    var _deleteProjeto = function (id) {
        return $http.delete(configUrls.baseProjetosUrl + '/deletarProjeto.php', {
            data: {id: id.toString()}
        });
    };

    // Galeria de Videos
    var _getVideos = function () {
        return $http.get(configUrls.baseVideosUrl + '/listarVideos.php');
    };

    var _saveVideo = function (video) {
        return $http.post(configUrls.baseVideosUrl + '/adicionarVideo.php', video);
    };

    var _getVideo = function (id) {
        return $http.get(configUrls.baseVideosUrl + '/listarVideo.php?id=' + id);
    };

    var _deleteVideo = function (id) {
        return $http.delete(configUrls.baseVideosUrl + '/deletarVideo.php', {
            data: {id: id.toString()}
        });
    };

    // Eventos
    var _getEventos = function () {
        return $http.get(configUrls.baseEventosUrl + '/listarEventos.php');
    };

    var _saveEvento = function (evento) {
        return $http.post(configUrls.baseEventosUrl + '/adicionarEvento.php', evento);
    };

    var _getEvento = function (id) {
        return $http.get(configUrls.baseEventosUrl + '/listarEvento.php?id=' + id);
    };

    var _deleteEvento = function (id) {
        return $http.delete(configUrls.baseEventosUrl + '/deletarEvento.php', {
            data: {id: id.toString()}
        });
    };

    // Agenda Ministerial
    var _getAgendasMins = function () {
        return $http.get(configUrls.baseAgendasUrl + '/listarAgendas.php');
    };

    var _saveAgendaMins = function (evento) {
        return $http.post(configUrls.baseAgendasUrl + '/adicionarAgenda.php', evento);
    };

    var _getAgendaMins = function (id) {
        return $http.get(configUrls.baseAgendasUrl + '/listarAgenda.php?id=' + id);
    };

    var _deleteAgendaMins = function (id) {
        return $http.delete(configUrls.baseAgendasUrl + '/deletarAgenda.php', {
            data: {id: id.toString()}
        });
    };

    // Jornal Koinonia
    var _getJornais = function () {
        return $http.get(configUrls.baseJornaisUrl + '/listarJornais.php');
    };

    var _getJornal = function (id) {
        return $http.get(configUrls.baseJornaisUrl + '/listarJornal.php?id=' + id);
    };

    var _saveJornal = function (fd) {
        return $http.post(configUrls.baseJornaisUrl + '/salvarJornal.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    // Artigos
    var _getArtigos = function () {
        return $http.get(configUrls.baseArtigosUrl + '/listarArtigos.php');
    };

    var _getArtigo = function (id) {
        return $http.get(configUrls.baseArtigosUrl + '/listarArtigo.php?id=' + id);
    };

    var _saveArtigo = function (fd) {
        return $http.post(configUrls.baseArtigosUrl + '/adicionarArtigo.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    var _deleteArtigo = function (id) {
        return $http.delete(configUrls.baseArtigosUrl + '/deletarArtigo.php', {
            data: {id: id.toString()}
        });
    };

    //////////////////
    ///// Igreja ////
    ////////////////

    // Sobre
    var _getSobres = function () {
        return $http.get(configUrls.baseSobresUrl + '/listarSobres.php');
    };

    var _getSobre = function (id) {
        return $http.get(configUrls.baseSobresUrl + '/listarSobre.php?id=' + id);
    };

    var _saveSobre = function (fd) {
        return $http.post(configUrls.baseSobresUrl + '/salvarSobre.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    // Integrantes
    var _getIntegrantes = function () {
        return $http.get(configUrls.baseIntegrantesUrl + '/listarIntegrantes.php');
    };

    var _getIntegrante = function (id) {
        return $http.get(configUrls.baseIntegrantesUrl + '/listarIntegrante.php?id=' + id);
    };

    var _saveIntegrante = function (fd) {
        return $http.post(configUrls.baseIntegrantesUrl + '/adicionarIntegrante.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    var _deleteIntegrante = function (id) {
        return $http.delete(configUrls.baseIntegrantesUrl + '/deletarIntegrante.php', {
            data: {id: id.toString()}
        });
    };

    // Imagens
    var _getImagens = function () {
        return $http.get(configUrls.baseImagensUrl + '/listarImagens.php');
    };

    var _saveImagem = function (fd) {
        return $http.post(configUrls.baseImagensUrl + '/adicionarImagem.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    var _getImagem = function (id) {
        return $http.get(configUrls.baseImagensUrl + '/listarImagem.php?id=' + id);
    };

    var _deleteImagem = function (id) {
        return $http.delete(configUrls.baseImagensUrl + '/deletarImagem.php', {
            data: {id: id.toString()}
        });
    };

    /////////////////////////
    ///// Departamentos ////
    ///////////////////////
    var _getDepartamentos = function () {
        return $http.get(configUrls.baseDepartamentosUrl + '/listarDepartamentos.php');
    };

    var _saveDepartamento = function (fd) {
        return $http.post(configUrls.baseDepartamentosUrl + '/adicionarDepartamento.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    var _getDepartamento = function (id) {
        return $http.get(configUrls.baseDepartamentosUrl + '/listarDepartamento.php?id=' + id);
    };

    var _deleteDepartamento = function (id) {
        return $http.delete(configUrls.baseDepartamentosUrl + '/deletarDepartamento.php', {
            data: {id: id.toString()}
        });
    };

    var _getGalerias = function () {
        return $http.get(configUrls.baseDepartamentosUrl + '/listarGalerias.php');
    };

    var _deleteImgExistenteGaleria = function (id) {
        return $http.delete(configUrls.baseDepartamentosUrl + '/deletarImgExistenteGaleria.php', {
            data: {id: id.toString()}
        });
    };

    ////////////////////////
    ///// Congragações ////
    //////////////////////

    // Congregações
    var _getCongregacoes = function () {
        return $http.get(configUrls.baseCongregacoesUrl + '/listarCongregacoes.php');
    };

    var _saveCongregacao = function (congregacao) {
        return $http.post(configUrls.baseCongregacoesUrl + '/adicionarCongregacao.php', congregacao);
    };

    var _getCongregacao = function (id) {
        return $http.get(configUrls.baseCongregacoesUrl + '/listarCongregacao.php?id=' + id);
    };

    var _deleteCongregacao = function (id) {
        return $http.delete(configUrls.baseCongregacoesUrl + '/deletarCongregacao.php', {
            data: {id: id.toString()}
        });
    };

    // Distritos
    var _getDistritos = function () {
        return $http.get(configUrls.baseDistritosUrl + '/listarDistritos.php');
    };

    var _saveDistrito = function (fd) {
        return $http.post(configUrls.baseDistritosUrl + '/adicionarDistrito.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    var _getDistrito = function (id) {
        return $http.get(configUrls.baseDistritosUrl + '/listarDistrito.php?id=' + id);
    };

    var _deleteDistrito = function (id) {
        return $http.delete(configUrls.baseDistritosUrl + '/deletarDistrito.php', {
            data: {id: id.toString()}
        });
    };

    ////////////////////
    ///// Noticias ////
    //////////////////

    var _getNoticias = function () {
        return $http.get(configUrls.baseNoticiasUrl + '/listarNoticias.php');
    };

    var _saveNoticia = function (fd) {
        return $http.post(configUrls.baseNoticiasUrl + '/adicionarNoticia.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    var _getNoticia = function (id) {
        return $http.get(configUrls.baseNoticiasUrl + '/listarNoticia.php?id=' + id);
    };

    var _deleteNoticia = function (id) {
        return $http.delete(configUrls.baseNoticiasUrl + '/deletarNoticia.php', {
            data: {id: id.toString()}
        });
    };

    //////////////////
    ///// Agenda ////
    ////////////////

    var _getAgendas = function () {
        return $http.get(configUrls.baseAgendaUrl + '/listarAgendas.php');
    };

    var _saveAgenda = function (fd) {
        return $http.post(configUrls.baseAgendaUrl + '/adicionarAgenda.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    var _getAgenda = function (id) {
        return $http.get(configUrls.baseAgendaUrl + '/listarAgenda.php?id=' + id);
    };

    var _deleteAgenda = function (id) {
        return $http.delete(configUrls.baseAgendaUrl + '/deletarAgenda.php', {
            data: {id: id.toString()}
        });
    };

    /////////////////////////////////
    ///// Localização / Contato ////
    ///////////////////////////////

    var _getContatos = function () {
        return $http.get(configUrls.baseContatoUrl + '/listarContatos.php');
    };

    var _getContato = function (id) {
        return $http.get(configUrls.baseContatoUrl + '/listarContato.php?id=' + id);
    };

    var _saveContato = function (fd) {
        return $http.post(configUrls.baseContatoUrl + '/salvarContato.php', fd, {
            transformRequest: angular.indentity,
            headers: { 'Content-Type': undefined }
        });
    };

    return {

        gatDadosUsuario:    _getDadosUsuarios,
        getMais:            _getMais,

        //////////////////
        ///// Inicio ////
        ////////////////

        // Slides
        getSlides:          _getSlides,
        getSlide:           _getSlide,
        saveSlide:          _saveSlide,
        deleteSlide:        _deleteSlide,

        // Destaques
        getDestaques:       _getDestaques,
        getDestaque:        _getDestaque,
        saveDestaque:       _saveDestaque,
        deleteDestaque:     _deleteDestaque,

        // Projetos
        getProjetos:        _getProjetos,
        saveProjeto:        _saveProjeto,
        getProjeto:         _getProjeto,
        deleteProjeto:      _deleteProjeto,

        // Galeria de Vídeos
        getVideos:          _getVideos,
        saveVideo:          _saveVideo,
        getVideo:           _getVideo,
        deleteVideo:        _deleteVideo,

        // Eventos
        getEventos:         _getEventos,
        saveEvento:         _saveEvento,
        getEvento:          _getEvento,
        deleteEvento:       _deleteEvento,

        // Agenda Ministerial
        getAgendasMins:     _getAgendasMins,
        saveAgendaMins:     _saveAgendaMins,
        getAgendaMins:      _getAgendaMins,
        deleteAgendaMins:   _deleteAgendaMins,

        // Jornal Koinonia
        getJornais:         _getJornais,
        getJornal:          _getJornal,
        saveJornal:         _saveJornal,

        // Artigos
        getArtigos:         _getArtigos,
        getArtigo:          _getArtigo,
        saveArtigo:         _saveArtigo,
        deleteArtigo:       _deleteArtigo,

        //////////////////
        ///// Igreja ////
        ////////////////

        // Sobre
        getSobres:          _getSobres,
        getSobre:           _getSobre,
        saveSobre:          _saveSobre,

        // Integrantes
        getIntegrantes:     _getIntegrantes,
        saveIntegrante:     _saveIntegrante,
        getIntegrante:      _getIntegrante,
        deleteIntegrante:   _deleteIntegrante,

        // Imagens
        getImagens:         _getImagens,
        saveImagem:         _saveImagem,
        getImagem:          _getImagem,
        deleteImagem:       _deleteImagem,

        /////////////////////////
        ///// Departamentos ////
        ///////////////////////
        getDepartamentos:          _getDepartamentos,
        saveDepartamento:          _saveDepartamento,
        getDepartamento:           _getDepartamento,
        deleteDepartamento:        _deleteDepartamento,
        getGalerias:               _getGalerias,
        deleteImgExistenteGaleria: _deleteImgExistenteGaleria,

        ////////////////////
        ///// Noticias ////
        //////////////////
        getNoticias:    _getNoticias,
        saveNoticia:    _saveNoticia,
        getNoticia:     _getNoticia,
        deleteNoticia:  _deleteNoticia,

        //////////////////
        ///// Agenda ////
        ////////////////
        getAgendas:    _getAgendas,
        saveAgenda:    _saveAgenda,
        getAgenda:     _getAgenda,
        deleteAgenda:  _deleteAgenda,

        ////////////////////////
        ///// Congregações ////
        //////////////////////
        
        // Congregações
        getCongregacoes:    _getCongregacoes,
        saveCongregacao:    _saveCongregacao,
        getCongregacao:     _getCongregacao,
        deleteCongregacao:  _deleteCongregacao,

        // Distritos
        getDistritos:       _getDistritos,
        saveDistrito:       _saveDistrito,
        getDistrito:        _getDistrito,
        deleteDistrito:     _deleteDistrito,

        /////////////////////////////////
        ///// Localização / Contato ////
        ///////////////////////////////

        getContatos:        _getContatos,
        getContato:         _getContato,
        saveContato:        _saveContato
    };
});