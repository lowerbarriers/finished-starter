####
## @file
## Run tests (assumes the site is running on a localhost server through port 4000).
##
## This script requires that you install some node.js dependencies by running:
##   `npm install`
## from the repo root.
##
## Run this script from the repo root (ex: `.scripts/tests.sh`).
####

npm run jest
node .scripts/lighthouse.test.js

## Ancillary test scripts can be called here.
