<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Castlevania</title>
    <style>
      /* Centering styles for the container */
      body,
      html {
        height: 100%; /* Make sure the body takes up the full height */
        margin: 0; /* Remove default margins */
        display: flex;
        justify-content: center; /* Horizontally center */
        align-items: center; /* Vertically center */
        background-color: #f0f0f0; /* Optional, for visual appeal */
      }

      .container {
        width: 640px;
        height: 480px;
        max-width: 100%; /* Ensure it’s responsive */
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff; /* Optional */
        border: 0px solid #000; /* Optional, for visibility */
      }

      #game {
        width: 100%; /* Make #game take up the full width */
        height: 100%; /* Make #game take up the full height */
      }
    </style>
  </head>
  <body>
    <!-- Outer div container that will be centered -->
    <div class="container">
      <div id="game"></div>
    </div>

    <script type="text/javascript">
      EJS_player = "#game";
      EJS_core = "nes";
      EJS_gameUrl =
        "https://cdn.glitch.global/f5ede9cc-865a-4cd7-ba70-05cee372195c/Castlevania%20(USA)%20(Rev%201).nes?v=1731044978533";
      EJS_pathtodata =
        "https://cdn.jsdelivr.net/gh/ethanaobrien/emulatorjs@main/data/";
    </script>
    <script src="https://cdn.jsdelivr.net/gh/ethanaobrien/emulatorjs@main/data/loader.js"></script>
  </body>
</html>
