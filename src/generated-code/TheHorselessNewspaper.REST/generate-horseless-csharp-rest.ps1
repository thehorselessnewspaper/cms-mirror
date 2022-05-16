# as per https://openapi-generator.tech/docs/usage
write-host 'building horseless rest api c# client'
$specfile = './swagger-spec.json'

# handle credential provider timeouts
# as per https://www.primordialcode.com/blog/post/nuget-credentialprovider-timeout
$env:NUGET_PLUGIN_HANDSHAKE_TIMEOUT_IN_SECONDS=30
$env:NUGET_PLUGIN_REQUEST_TIMEOUT_IN_SECONDS=30
if(Test-Path -Path $specFile -PathType Leaf)
{
    write-host 'using open apitools generator cli docker image'
    docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate `
        -i '/local/swagger-spec.json' `
        -g csharp-netcore -o /local/csharp-netcore `
        --artifact-id "TheHorselessNewspaper.CSharp.Rest" `
        --package-name "TheHorselessNewspaper.CSharp.Rest" `
        --skip-validate-spec `
        --additional-properties="netCoreProjectFile=true,optionalAssemblyInfo=true,packageName=TheHorselessNewspaper.CSharp.Rest,targetFramework=net6.0,library=generichost"
        #     --remove-operation-id-prefix `

    write-host 'done generating the client source code. now building'
    push-location csharp-netcore/src

        # as per this clever hack https://stackoverflow.com/questions/39934405/can-i-build-multiple-projects-with-dotnet-build/51904395
        dotnet build -c production  TheHorselessNewspaper.CSharp.Rest\TheHorselessNewspaper.CSharp.Rest.csproj
        write-host 'horseless rest api c# client build complete'
    pop-location


}
else {
    Write-Host "spec file not provided"
}