<?php
  $destino = "itt.alejandro.flores@hotmail.com";
  $nombre = $_POST["nombre"];
  $asunto = "Paquete basico";
  $contenido = "Nombre: " . $nombre;
    mail($destino, $asunto, $contenido);
 ?>
