<?php

	if (isset($_POST['contact-submit'])) {
		$name = $_POST['contact-name'];
	    $email = $_POST['contact-email'];
	    $body = $_POST['contact-message'];
	    $from = $name; 
	    $subject = 'Contact Question';
	    $human = $_POST['contact-human'];

	    // send message
	   	$result = mail('contact@betament.co', $subject . ' ' . $name, $body, 'From: ' . $email);
	}
?>

<!DOCTYPE html>
<html>
	<head>
		 <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Thank you!</title>
   		<link href="assets/css/bootstrap.css" rel="stylesheet">
        <link href="assets/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="assets/css/thanks.css">
   		<link rel="shortcut icon" href="assets/img/favicon.ico">
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div id="header">
					<h1 class="col-sm-12 col-lg-4 col-lg-offset-4">Thank you!</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-2 col-lg-offset-5">
					<p><i class="fa fa-envelope-o"></i></p>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 col-lg-offset-4">
					<p>Your message has been received!  We will be in touch with you soon.</p>
				</div>
			</div>
		</div>
	</body>
</html>