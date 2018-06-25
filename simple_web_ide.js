<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/codemirror.css">
  </head>
  <body>
    <div class="container">
      <h1><a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015">ECMAScript 2015</a></h1>
      <p class="lead">
        ECMAScript 2015 is widely supported by most modern browsers.
      </p>

      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <b>HTML</b>
            <textarea id="html-editor" rows="100" >
<table>
  <tr>
    <th>Name</th><th>Age</th>
  </tr>
  <tr>
    <td>Fox</td><td>39</td>
  </tr>
  <tr>
    <td>Ocean</td><td>28</td>
  </tr>
  <tr>
    <td>Sky</td><td>21</td>
  </tr>
</table>
<button id="the-button">Click</button>
            </textarea>
          </div>
          <div class="col-lg-6">
            <b>ECMAScript</b>
            <textarea id="ecmascript-editor" rows="100">
function clear(){
    // Update all cells to -
    $('td').html('-')
}
// Attach a click handler
$('#the-button').click(clear)
            </textarea>
          </div>

        </div>
        <hr>
        <button id="render" type="button" class="btn btn-secondary">Render</button>
        <hr>
        <div id="target">

        </div>
      </div>
    </div>
  </body>
  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/codemirror.js"></script>
  <script src="js/mode/javascript.js"></script>
  <script src="js/mode/xml.js"></script>
  <script src="js/mode/css.js"></script>
  <script src="js/ecmascript.js"></script>

</html>
