<?php
$host = "localhost";
$user = "root";
$pass = "root";
$banco = "db_scl";
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$estado =$_POST['estado'];
$email = $_POST['email'];
$cidade = $_POST['cidade'];
$senha = $_POST['senha'];
$strcon = mysqli_connect('localhost','root','root','db_scl');
if (!$strcon) {
    die('Não foi possível conectar ao MySQL');
}


$sql = "INSERT INTO tbl_usuario(nome, sobrenome, estado, cidade, email, senha)
VALUES ('$nome','$sobrenome','$estado', '$cidade', '$email', '$senha')";
// Executando a declaração no banco de dados:
$resultado = mysqli_query($strcon,$sql) or die("Erro ao executar a inserção dos dados");
echo ("<script>
        alert('Cadastro realizado com sucesso!');
        window.location.href='../login.html';
    </script>");
mysqli_close($strcon);

?>
</body>
</html>

