#!/usr/bin/env sh

# Create accounts for each group member
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_account","params":{"name":"aastha","password":"a_pass"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_account","params":{"name":"louie","password":"l_pass"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_account","params":{"name":"maddie","password":"m_pass"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_account","params":{"name":"mark","password":"m_pass"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_account","params":{"name":"tino","password":"t_pass"}}' http://localhost:8000/endpoint.php
echo
