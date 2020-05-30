<?php


$destino = "pirela.jonathan@gmail.com";
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$asunto = $_POST['asunto'];
$text = $_POST['texto'];

$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nAsunto: " . $asunto . "\nMensaje: ". $text;

mail($destino,"Contacto", $contenido);
     echo "<script>
                alert('Mensaje enviado');
                window.location= 'index.php'
    </script>";
?>