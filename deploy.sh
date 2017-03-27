#!/bin/bash
rm -rf docs/
npm run build
mv dist/ docs/
sed -ie 's:src=/:src=:g' docs/index.html
sed -ie 's:href=/:href=:g' docs/index.html

git add .
git commit -am "deployed changes to github pages"
git push