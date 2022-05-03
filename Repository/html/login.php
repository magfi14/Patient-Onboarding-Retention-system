<?php

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $role = $_POST['role'];

    echo '<b>Your name: </b>' . $firstname . ' ' . $lastname . '<br>';
    echo '<b>Your username: </b>' . $username . '<br>';
    echo '<b>Your password: </b>' . $password . '<br>';
    echo '<b>Your role: </b>' . $role . '<br>';

?>