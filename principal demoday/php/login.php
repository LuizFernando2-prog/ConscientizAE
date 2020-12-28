<?php 
//método é post - $_POST
$email=$_POST['email'];   //silvia@gmail.com   077.888.098-09
$senha=$_POST['senha'];  //123

//conexão
include('conexao.php');

//leitura
$sql="SELECT * FROM tbl_usuario WHERE (email='$email' AND senha='$senha')";

//executar
$resultado=mysqli_query($conn,$sql);
$linha=mysqli_fetch_array($resultado);

//fechando a conexão
mysqli_close($conn);

if ($linha) {      //foi encontrado um usuário
    //variáveis de sessão
    //startar
    session_start();

    //variável superglobal $_SESSION
    $_SESSION['nome']=$linha['nome'];
    $_SESSION['email']=$linha['email'];

    echo ("<script>
        alert('Login efetuado com sucesso!');
        window.location.href='../index2.html';
    </script>");
}
else {
    echo("<script>
        alert('Usuário NÃO encontrado, verifique as informações ou cadastre-se!');
        window.location.href='../login.html';
    </script>");

}


?>