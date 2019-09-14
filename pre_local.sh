#!/bin/bash

cp -r ./.scripts root@123.123.123.123:/root/
# For subsequent projects, only new .env is needeed
cp ./.env root@123.123.123.123:/root/.scripts
ssh root@123.123.123.123 "chmod +x /root/.scripts/pre_remote.sh"
# Verify permissions (optional):
ssh root@123.123.123.123 "ls -la /root/.scripts"
# Install remote repo:
ssh root@123.123.123.123 "bash /root/.scripts/pre_remote.sh"
# Add reote to local
git remote add production ssh://root@123.123.123.123/opt/nakamoto.git
# Check:
git remote -v
