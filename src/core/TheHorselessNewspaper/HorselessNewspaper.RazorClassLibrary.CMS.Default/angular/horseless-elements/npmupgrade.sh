#!/usr/bin/bash

set -e
set -x

for package in $(npm -g outdated --parseable --depth=0 | cut -d: -f3)
do
    echo "upgrading $package"
    npm -g install "$package"
done

