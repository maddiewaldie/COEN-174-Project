#!/usr/bin/env sh

IDS="$(./get_user_id.sh)"
AASTHA_ID="$(echo "$IDS" | sed '1p;d' | jq .[0][0] | tr -d '"')"
LOUIE_ID="$(echo "$IDS" | sed '2p;d' | jq .[0][0] | tr -d '"')"
MADDIE_ID="$(echo "$IDS" | sed '3p;d' | jq .[0][0] | tr -d '"')"
MARK_ID="$(echo "$IDS" | sed '4p;d' | jq .[0][0] | tr -d '"')"
TINO_ID="$(echo "$IDS" | sed '5p;d' | jq .[0][0] | tr -d '"')"

# Create tasks for each group member
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","account_id":"'"$AASTHA_ID"'","tasks_name":"task_1","category":"test","deadline":"2022-12-01","priority":1}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","account_id":"'"$AASTHA_ID"'","tasks_name":"task_2","category":"test","deadline":"2022-12-02","priority":2}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","account_id":"'"$AASTHA_ID"'","tasks_name":"task_3","category":"test","deadline":"2022-12-03","priority":3}' http://localhost:8000/endpoint.php
echo

curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","account_id":"'"$LOUIE_ID"'","tasks_name":"task_1","category":"test","deadline":"2022-12-01","priority":1}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","account_id":"'"$LOUIE_ID"'","tasks_name":"task_2","category":"test","deadline":"2022-12-02","priority":2}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","account_id":"'"$LOUIE_ID"'","tasks_name":"task_3","category":"test","deadline":"2022-12-03","priority":3}' http://localhost:8000/endpoint.php
echo

curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","account_id":"'"$MADDIE_ID"'","tasks_name":"task_1","category":"test","deadline":"2022-12-01","priority":1}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","account_id":"'"$MADDIE_ID"'","tasks_name":"task_2","category":"test","deadline":"2022-12-02","priority":2}' http://localhost:8000/endpoint.php
echo
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"create_task","account_id":"'"$MADDIE_ID"'","tasks_name":"task_3","category":"test","deadline":"2022-12-03","priority":3}' http://localhost:8000/endpoint.php
echo
