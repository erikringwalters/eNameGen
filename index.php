<!Doctype html>
<head>
<title>eNameGen</title>
<link href="./css/styles.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="icons/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.min.css">
<link rel="shortcut icon" href="img/triangle.png" type="image/x-icon">
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
  <a id="nabla" onClick="selectMenu()" class="dropbtn mod main">∇</a>
  <div id="drop" class="dropdown-content">

    <a onClick="selectSize()" class="dropbtn mod main">Size</a>

    <a onClick="selectRace()" class="dropbtn mod main">Race</a>

    <a onClick="selectGender()" class="dropbtn mod main">Gender</a>

    <a onClick="selectFeedback()" class="dropbtn mod main">Feedback</a>

</div>
</div>

<div class="dropdown">
<div id="size" class="dropdown-content">
  <div  class="mod main"> <!--This third div gives a little inner color selection effect -->
    <a href="" id='small' class="mod main" title="Small">*</a>
    <a href="" id='medium' class="mod main" title="Medium">*</a>
    <a href="" id='large' class="mod main" title="Large">*</a>
  </div>
</div>
</div>

<div class="dropdown">
<div id="race"class="dropdown-content">
  <div  class="mod main"> <!--This third div gives a little inner color selection effect -->
  <a href="" id="human" class="mod main" title="Human">Human</a>
  <a href="" id="elf" class="mod main" title="Elf">Elf</a>
  <a href="" id="orc" class="mod main" title="Orc">Orc</a>
  </div>
</div>
</div>

<div class="dropdown">
<div id="gender" class="dropdown-content">
  <div  class="mod main"> <!--This third div gives a little inner color selection effect -->
  <a href="" id="male" class="mod main" title="Male">Male</a>
  <a href="" id="female" class="mod main" title="Female">Female</a>
  <a href="" id="other" class="mod main" title="Other">Other</a>
  </div>
</div>
</div>

<div class="dropdown">
<div id="feedback" class="dropdown-content">
  <div class="mod main">
    <a href="" id="Like" class="mod main" title="Like generated name">Like</a>

    <a href="" id="Dislike" class="mod main" title="Dislike generated name">Dislike</a>
  </div>
</div>
</div>

 <script type="text/JavaScript" src="js/scripts.js">
</script>

<footer>
  &copy Ring-Walters 2017
<a href="https://github.com/erikringwalters" title="" alt="Erik's GitHub Profile"><i class="fa fa-github"></i></a>
<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

</footer>
</body>
