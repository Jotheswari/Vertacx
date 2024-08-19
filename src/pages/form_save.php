<?php

    $formData = [
        "Interested" => $_POST['interested'],
        "WeAre" => $_POST['weAre'],
        "Stage" => $_POST['stage'],
        "Name" => $_POST['name'],
        "Email" => $_POST['email'],
        "Phone" => $_POST['phone']
    ];
    print_r($formData);
    // $accessToken = '<Your_Access_Token>'; // Store this securely
    // $url = 'https://www.zohoapis.com/crm/v2/Leads';

    $options = [
        'http' => [
            'header'  => "Content-Type: application/json\r\n" .
                        "Authorization: Zoho-oauthtoken $accessToken\r\n",
            'method'  => 'POST',
            'content' => json_encode(['data' => [$formData]]),
        ],
    ];

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        // Handle error
    }
    echo $result;

?>