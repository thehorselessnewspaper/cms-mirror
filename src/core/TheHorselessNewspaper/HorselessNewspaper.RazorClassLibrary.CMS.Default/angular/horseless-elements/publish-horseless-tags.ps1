$theLibraryBuildPath = './projects/wizardcontroller/horseless-tags-library'

pushd $theLibraryBuildPath
  npm version patch -m "upgrade due to new build"
popd

ng build @wizardcontroller/horseless-tags-library
npm publish .\dist\wizardcontroller\horseless-tags-library
