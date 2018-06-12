#!/usr/bin/env bash

echo Test! 
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git pull
mkdir -p docs
cp -r ./public ./docs
git add docs
git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"

git remote add origin-pages https://${GH_TOKEN}@github.com/velho-allianssi/velho-ds.git > /dev/null 2>&1
git push --quiet --set-upstream origin-pages master