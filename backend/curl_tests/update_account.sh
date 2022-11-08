#!/usr/bin/env sh

curl --header "Content-Type: application/json" --request POST --data '{"type":"update_account","id":3,"password":"xyz"}' http://localhost:8000/endpoint.php
