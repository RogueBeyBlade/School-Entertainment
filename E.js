<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Castlevania Emulator</title>
    <style>
      body, html {
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
      }
      .container {
        width: 640px;
        height: 480px;
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
      }
      #game {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div id="game"></div>
    </div>

    <script type="text/javascript">
      // Setup variables for EmulatorJS
      EJS_player = "#game"; 
      EJS_core = "nes";
      EJS_gameUrl =
        "https://cdn.glitch.global/f5ede9cc-865a-4cd7-ba70-05cee372195c/Castlevania%20(USA)%20(Rev%201).nes?v=1731044978533";
      EJS_pathtodata =
        "https://cdn.jsdelivr.net/gh/ethanaobrien/emulatorjs@main/data/";

      // Initialize EmulatorJS
      window.onload = function() {
        if (typeof EmulatorJS !== 'undefined') {
          EmulatorJS.load();
        } else {
          console.error("EmulatorJS failed to load.");
        }
      };
    </script>

    <script src="https://cdn.jsdelivr.net/gh/ethanaobrien/emulatorjs@main/data/loader.js"></script>
  </body>
</html>
