#!/usr/bin/env bash

cat public/css/{github2.css,post.css,pygments.css} > tmp.css
npx lessc -x tmp.css > _includes/all.css
rm tmp.css

