<?php
  $destino = "itt.alejandro.flores@hotmail.com";
  $nombre = $_POST["nombre"];
  $asunto = "servicio tecnico";
  $contenido = "Nombre: " . $nombre;
    mail($destino, $asunto, $contenido);
 ?>