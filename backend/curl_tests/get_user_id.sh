#!/usr/bin/env sh

# Get user ids of each account
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"get_user_id","params":{"name":"aastha","password":"a_pass"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"get_user_id","params":{"name":"louie","password":"l_pass"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"get_user_id","params":{"name":"maddie","password":"m_pass"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"get_user_id","params":{"name":"mark","password":"m_pass"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"get_user_id","params":{"name":"tino","password":"t_pass"}}' http://localhost:8000/endpoint.php
echo
