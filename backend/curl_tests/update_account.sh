#!/usr/bin/env sh

IDS="$(./get_user_id.sh)"
AASTHA_ID="$(echo "$IDS" | sed '1p;d' | jq .[0][0] | tr -d '"')"
LOUIE_ID="$(echo "$IDS" | sed '2p;d' | jq .[0][0] | tr -d '"')"
MADDIE_ID="$(echo "$IDS" | sed '3p;d' | jq .[0][0] | tr -d '"')"
MARK_ID="$(echo "$IDS" | sed '4p;d' | jq .[0][0] | tr -d '"')"
TINO_ID="$(echo "$IDS" | sed '5p;d' | jq .[0][0] | tr -d '"')"

# Create accounts for each group member
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"update_account","params":{"id":"'"$AASTHA_ID"'","name":"aastha_changed"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"update_account","params":{"id":"'"$LOUIE_ID"'","password":"l_pass_changed"}}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"update_account","params":{"id":"'"$MADDIE_ID"'","name":"maddie_changed","password":"m_pass_changed"}}' http://localhost:8000/endpoint.php
echo
