#!/usr/bin/env bash
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git remote rm origin
git remote add origin https://${GH_TOKEN}@github.com/velho-allianssi/velho-ds.git
git checkout master

cp -R public docs/
mkdir -p docs/js
cp target/js/app.js docs/js/app.js
git add docs
git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"

git push origin master