<?php
error_reporting(E_ALL);ini_set('display_errors',1);	

$servername = "localhost";
$username = "seamaszhou";
$password = "ymh960516";
$dbname = "guest";




$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // prepare sql and bind parameters
$stmt = $conn->prepare("INSERT INTO guest (guestName,guestEmail,guestContent) 
VALUES (:guestName, :guestEmail, :guestContent)");
    
$stmt->bindParam(':guestName', $guestName);
$stmt->bindParam(':guestEmail', $guestEmail);
$stmt->bindParam(':guestContent', $guestContent);
	
    // insert a row
if (isset($_POST['guestName']) && isset($_POST['guestContent']) && isset($_POST['guestEmail'])) {
$guestName = $_POST['guestName'];
$guestContent = $_POST['guestContent'];
$guestEmail = $_POST['guestEmail'];
$stmt->execute();
}

 

?>



<!DOCTYPE HTML>
<html>
<head>
<title>Contact Us</title>
<link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet">
<link href="css/style.css" rel="stylesheet" type="text/css" media="all"/>
<script src="js/javascript.js"></script>

</head>
<body>

<div class="banner-1">
   <div class="container">
	  
                  <div class="top-navg">
		                  <div class='logo'><img src="images/sign.png" height="90" width="150"></div>
			 <nav class="cl-effect-13">				
				<ul class="res">
					<li><a href="index.html">Home</a></li>
					<li><a  href="main.html">See & Go</a></li>
					 <li><a href="library.html">All Lib</a></li>
					<li><a class="active" href="contact.php">Contact</a></li>
				</ul>
			</nav>
					
	   </div>
	    
      </div>
</div> 
  <div class="contactsheet">
	  
	    	
<header>Contact Us</header>


		
	<form id="form" name="form" method="post" action="contact.php" class="form-horizontal">
        
            
            
            <input type="text" class="form-control" placeholder="Your Name" name="guestName" id="guestName" />
            
        

            
        
            <input type="text" class="form-control" placeholder="Your Email" name="guestEmail" id="guestEmail" />
       
      
			
     
            <textarea name="guestContent" class="form-control" id="guestContent" rows="5"></textarea>
        
			
            <input type="submit" name="button" id="submit" value="Send to Us" class="btn"/>
        	
    </form>
		
		 


</div>

 
</body>
</html>

