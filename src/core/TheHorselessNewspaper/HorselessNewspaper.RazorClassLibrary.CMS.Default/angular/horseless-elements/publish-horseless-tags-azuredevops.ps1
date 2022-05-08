# publish @wizardcontroller/horseless-tags-library
# ensures angular patterns for horseless cms development
# supports <TenantEditor/> <TenantChooser/> semantics
# by the consuming application

$theLibraryBuildPath = './projects/wizardcontroller/horseless-tags-library'

pushd $theLibraryBuildPath
 # expect a subsequent pipeline step
 # that commits the patched version
 # to the build target branch
 npm version patch -m "upgrade due to new build"
popd

ng build @wizardcontroller/horseless-tags-library
# run publish from the pipeline
# with the associated ease of auth
