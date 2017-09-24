<!Doctype html>
<head>
<title>eNameGen</title>
<link href="./css/styles.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <?phpsetDefaults();?>
<h1 class="main">eNameGen</h1>
<div>

<a id='delta' onclick='functions.php?' class='delta mod main'>
Δ
</a>
  <input type="text" />

<div class="dropdown">
  <a onclick="selectMenu()" class="dropbtn mod main">***</a>
  <div id="drop" class="dropdown-content">
    <a onClick="selectSize()" class="dropbtn mod main">Size</a>
    <div id="size" class="dropbtn mod main">
      <a href="" id='small' class="dropbtn mod main">Small</a>
      <a href="" id='medium' class="dropbtn mod main">Medium</a>
      <a href="" id='large' class="dropbtn mod main">Large</a>
    </div>
    <a href="#race" class="dropbtn mod main">Race</a>
    <div id='race'>

    </div>
    <a href="#gender" id="gender" class="dropbtn mod main">Gender</a>
    <a href="#feedback" id="feedback" class="dropbtn mod main">Feedback</a>
  </div>
</div>
</div>
 <script type="text/JavaScript" src="js/scripts.js">
</script>

<footer>
  &copy Ring-Walters 2017
</footer>
</body>
