$wwwRoot =  ../../../TheHorselessNewspaper/HorselessNewspaper.RazorClassLibrary.CMS.Default/wwwroot/js/horseless-elements/horseless-tags-library/

ng build --project horseless-elements --output-hashing=none
./pack-elements
mkdir $wwwRoot
cp projects/wizardcontroller/horseless-tags-library/package.json dist/horseless-elements
cp dist/horseless-elements/elements.js $wwwRoot
cp dist/horseless-elements/styles.css $wwwRoot
