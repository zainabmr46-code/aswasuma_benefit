<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Successful</title>
</head>
<body>
    <h2>Hello {{$user->name}},</h2>

    <p>
        You have successfully logged into the Aswesuma Benefits Management System.
    </p>

    <p>
        <strong>
            Login Time: 
        </strong>
        {{now()}}
    </p>
    <p>
        If this wasn't you, please change your password immediately
    </p>

    <br>
    <p>Regards,</p>
    <p><strong>
        Aswesuma Benefits System
    </strong></p>
</body>
</html>