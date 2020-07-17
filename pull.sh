#!/bin/bash
URL=https://projects.fivethirtyeight.com/polls-page/president_polls.csv
curl $URL -o polls.csv~
if ! cmp polls.csv polls.csv~ >/dev/null 2>&1
then
    mv polls.csv~ polls.csv
    echo 'Ch- ch- ch- changes!'
else
    rm polls.csv~
    echo 'No changes'
fi
