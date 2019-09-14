#!/bin/bash

APP=nakamoto
PORT=3006

./slave_build.sh "$APP"
docker stop "$APP"
docker rm "$APP"
./slave_start.sh "$APP" "$PORT"
