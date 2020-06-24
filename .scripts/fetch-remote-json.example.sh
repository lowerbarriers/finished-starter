####
## @file
## Example of using wget or curl to statically grab some JSON to make it available in _data for SSG rendering.
##
## This example requires wget to be present in your shell
##
## Once the data have been fetched, the example data will be available at {{ site.data.hawaii-2012-nonresident-weddings }}
##
## Run this script from the repo root (ex: `.scripts/fetch-remote-json.example.sh`).
####

wget -O _data/hawaii-2012-nonresident-weddings.json https://data.hawaii.gov/api/views/nu5e-s79u/rows.json?accessType=DOWNLOAD
