#!/usr/bin/env bash

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git remote add origin https://${GH_TOKEN}@github.com/velho-allianssi/velho-ds.git > /dev/null 2>&1

mkdir -p docs
cp -r ./public ./docs
git add docs
git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"

git push origin master