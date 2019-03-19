<?php
  $destino = "itt.alejandro.flores@hotmail.com";
  $nombre = $_POST["nombre"];
  $asunto = "Rediseno web";
  $contenido = "Nombre: " . $nombre;
    mail($destino, $asunto, $contenido);
 ?>