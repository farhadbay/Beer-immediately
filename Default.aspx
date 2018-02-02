<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="Scripts/JQUERY/jquery-3.1.1.min.js"></script>
    <script src="Scripts/angular/angular.js"></script>
    <script src="Scripts/angular/angular-route.js"></script>
    <script src="Scripts/app.js"></script>
    <script src="Scripts/directives/SiteLoader.js"></script>
    <script src="Scripts/angular-message/angular-messages.js"></script>
    <script src="Scripts/helper/Input.js"></script>

    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/Services/Ajax.js"></script>
	<meta charset="utf-8" />
</head>
<body data-ng-app="mainApp">
    <div site-loader></div>
    <div class="jumbotron text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-sm-11">
    
                <div data-ng-view style="margin-top: 40px"></div>           
            </div>
        </div>
    </div>

    
</body>
</html>
