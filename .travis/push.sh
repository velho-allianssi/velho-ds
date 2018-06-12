#!/bin/sh
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

echo Pushing generated CLJS artifacts to be hosted by GH Pages

git pull
mkdir -p docs
cp -r ./public ./docs
git add docs
git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"

git push --quiet origin master:master