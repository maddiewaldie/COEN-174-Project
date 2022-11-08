#!/usr/bin/env sh

curl --header "Content-Type: application/json" --request POST --data '{"type":"get_id","name":"mark","password":"xyz"}' http://localhost:8000/endpoint.php
