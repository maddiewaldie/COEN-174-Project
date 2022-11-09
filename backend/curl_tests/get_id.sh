#!/usr/bin/env sh

# Test getting the user id of each user
curl --header "Content-Type: application/json" --request POST --data '{"type":"get_id","name":"aastha","password":"a_pass"}' http://localhost:8000/endpoint.php
curl --header "Content-Type: application/json" --request POST --data '{"type":"get_id","name":"louie","password":"l_pass"}' http://localhost:8000/endpoint.php
curl --header "Content-Type: application/json" --request POST --data '{"type":"get_id","name":"maddie","password":"m_pass"}' http://localhost:8000/endpoint.php
curl --header "Content-Type: application/json" --request POST --data '{"type":"get_id","name":"mark","password":"m_pass"}' http://localhost:8000/endpoint.php
curl --header "Content-Type: application/json" --request POST --data '{"type":"get_id","name":"tino","password":"t_pass"}' http://localhost:8000/endpoint.php
