<!DOCTYPE html>
<html lang="en" ng-app="ADCanoas">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Área administrativa do portal ADCanoas</title>

        <link rel="icon" href="../../img/favicon.ico">

        <!-- Bootstrap Core CSS -->
        <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

        <!-- MetisMenu CSS -->
        <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <?php if(!isset($_GET['token'])){ header("Location: ../"); } ?>
    <body ng-controller="EsqueciController">
        <div class="container">
            <div class="row">
                <input id="token_inpt" type="hidden" value="<?php echo $_GET['token']; ?>"></input>
                <div class="col-md-4 col-md-offset-4">
                    <div class="row logo-topo-login fade-in">
                        <img src="../img/logopontomix.png" alt="Logo PontoMix" class="img-responsive">
                    </div>
                    <div class="login-panel panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">Nova senha</h3>
                        </div>
                        <div class="panel-body">
                            <form role="form" name="loginForm">
                                <fieldset>
                                    <div class="form-group">
                                        <input class="form-control" ng-model="loginInfo.password" ng-required="true" placeholder="Nova Senha" name="password" type="password">
                                    </div>
                                    <button class="btn btn-lg btn-success btn-block" ng-click="novaSenha(loginInfo)" ng-disabled="loginForm.$invalid">Cadastrar</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- jQuery -->
        <script src="../bower_components/jquery/dist/jquery.min.js"></script>

        <!-- Bootstrap Core JavaScript -->
        <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

        <!-- Metis Menu Plugin JavaScript -->
        <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

        <!-- Custom Theme JavaScript -->
        <script src="../dist/js/sb-admin-2.js"></script>

        <!-- AngularJS -->
        <script src="../js/AngularJS/angular.min.js"></script>
        
        <!-- Angular Route -->
        <script src="../js/AngularJS/angular-route.min.js"></script>

        <!-- Modulo -->
        <script src="../js/app.js"></script>

        <!-- Controllers -->
        <script src="../js/controllers/loginController.js"></script>
        <script src="../js/controllers/mainController.js"></script>
        <script src="../js/controllers/esqueciCtrl.js"></script>

        <!-- Services -->
        <script src="../js/services/authenticate-service.js"></script>
    </body>
</html>