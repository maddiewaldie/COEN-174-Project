#!/usr/bin/env sh

IDS="$(./get_tasks_from_user_id.sh)"
AASTHA_IDS="$(echo "$IDS" | sed '1p;d')"
LOUIE_IDS="$(echo "$IDS" | sed '2p;d')"
MADDIE_IDS="$(echo "$IDS" | sed '3p;d')"
MARK_IDS="$(echo "$IDS" | sed '4p;d')"
TINO_IDS="$(echo "$IDS" | sed '5p;d')"

# Create tasks for each group member
curl -s --header "Content-Type: application/json" --request POST --data '{"type":"toggle_task_complete","params":{"task_id":"'"$(echo "$AASTHA_IDS" | jq .[0].get[0].task_id | tr -d '"')"'"}}' http://localhost:8000/endpoint.php
echo

curl -s --header "Content-Type: application/json" --request POST --data '{"type":"toggle_task_complete","params":{"task_id":"'"$(echo "$LOUIE_IDS" | jq .[0].get[0].task_id | tr -d '"')"'"}}' http://localhost:8000/endpoint.php
echo

curl -s --header "Content-Type: application/json" --request POST --data '{"type":"toggle_task_complete","params":{"task_id":"'"$(echo "$MADDIE_IDS" | jq .[0].get[0].task_id | tr -d '"')"'"}}' http://localhost:8000/endpoint.php
echo
