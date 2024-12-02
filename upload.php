<?php  
$servername = "localhost";  
$username = "tu_usuario";  
$password = "tu_contraseña";  
$dbname = "galeria";  

// Crea conexión  
$conn = new mysqli($servername, $username, $password, $dbname);  

// Verifica la conexión  
if ($conn->connect_error) {  
    die("Conexión fallida: " . $conn->connect_error);  
}  

// Obtener archivos de la base de datos  
$sql = "SELECT * FROM contenidos ORDER BY fecha_subida DESC";  
$result = $conn->query($sql);  

if ($result->num_rows > 0) {  
    while($row = $result->fetch_assoc()) {  
        $filePath = 'uploads/' . $row['nombre_archivo'];  
        if (strpos($row['tipo'], 'image') !== false) {  
            // Si es una imagen  
            echo "<img src='$filePath' alt='" . $row['nombre_archivo'] . "' style='width: 200px; margin: 10px;'>";  
        } elseif (strpos($row['tipo'], 'video') !== false) {  
            // Si es un video  
            echo "<video width='320' height='240' controls>  
                    <source src='$filePath' type='video/mp4'>  
                    Tu navegador no soporta el video.  
                 </video>";  
        }  
    }  
} else {  
    echo "No hay archivos subidos.";  
}  

$conn->close();  
?>