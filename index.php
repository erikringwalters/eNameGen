<!Doctype html>
<head>
<title>eNameGen</title>
<link href="./css/styles.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <?phpsetDefaults();?>
<h1>eNameGen</h1>
<div>

<a id='delta' onclick='displayName($size,$race,$sex)' class='delta mod'>
Δ
</a>
  <input type="text" />

<div class="dropdown">
  <a onclick="selectFromMenu()" class="dropbtn mod">***</a>
  <div id="drop" class="dropdown-content">
    <a href="">Size</a>
    <a href="">Race</a>
    <a href="">Gender</a>
    <a href="">Feedback</a>
  </div>
</div>
</div>
 <script type="text/JavaScript" src="js/scripts.js">
</script>

<footer>
  &copy Ring-Walters 2017
</footer>
</body>
