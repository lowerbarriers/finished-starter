#!/bin/bash
FILES=/Users/ao5357/Desktop/repos/ao5357.github.com/_posts/*
for f in $FILES
do
  echo "Processing $f file..."
  # take action on each file. $f store current file name
  /Users/ao5357/Desktop/repos/ao5357.github.com/html2text.py $f > $f.md
done