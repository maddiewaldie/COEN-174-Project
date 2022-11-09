#!/usr/bin/env sh

IDS="$(./get_user_id.sh)"
AASTHA_ID="$(echo "$IDS" | sed '1p;d' | jq .[0][0] | tr -d '"')"
LOUIE_ID="$(echo "$IDS" | sed '2p;d' | jq .[0][0] | tr -d '"')"
MADDIE_ID="$(echo "$IDS" | sed '3p;d' | jq .[0][0] | tr -d '"')"
MARK_ID="$(echo "$IDS" | sed '4p;d' | jq .[0][0] | tr -d '"')"
TINO_ID="$(echo "$IDS" | sed '5p;d' | jq .[0][0] | tr -d '"')"

# Delete each account
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"delete_account","params":{"id":"'"$AASTHA_ID"'"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"delete_account","params":{"id":"'"$LOUIE_ID"'"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"delete_account","params":{"id":"'"$MADDIE_ID"'"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"delete_account","params":{"id":"'"$MARK_ID"'"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"delete_account","params":{"id":"'"$TINO_ID"'"}}' http://localhost:8000/endpoint.php
echo
