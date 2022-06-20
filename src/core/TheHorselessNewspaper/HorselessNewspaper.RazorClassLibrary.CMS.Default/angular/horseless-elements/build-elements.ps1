ng build --project horseless-elements --output-hashing=none
./pack-elements
mkdir ../../wwwroot/js/horseless-elements/horseless-tags-library
cp projects/wizardcontroller/horseless-tags-library/package.json dist/horseless-elements
cp dist/horseless-elements/elements.js ../../wwwroot/js/horseless-elements/horseless-tags-library
cp dist/horseless-elements/styles.css ../../wwwroot/js/horseless-elements/horseless-tags-library
