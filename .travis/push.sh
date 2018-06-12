#!/bin/sh
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git pull
mkdir -p docs
cp -r ./public ./docs
git add docs/\\*
git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"

git push --quiet origin master:master