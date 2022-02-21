$theLibraryBuildPath = './projects/horseless-tags'

pushd $theLibraryBuildPath
  npm version patch -m "upgrade due to new build"
popd

ng build @wizardcontroller/horseless-tags
npm publish .\dist\wizardcontroller\horseless-tags
