#!/usr/bin/env bash
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

# git remote add ds-origin https://${GH_TOKEN}@github.com/velho-allianssi/velho-ds.git > /dev/null 2>&1
git remote set-url origin https://${GH_TOKEN}@github.com/velho-allianssi/velho-ds.git

mkdir -p docs
cp -r ./public ./docs
git add docs
git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"

git push

