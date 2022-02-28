# as per https://openapi-generator.tech/docs/usage

$specfile = './swagger-spec.json'

if(Test-Path -Path $specFile -PathType Leaf)
{
 java jar ./openapi-generator-cli generate `
    -i $specFile `
    -g csharp-netcore -o /local/csharp-netcore `
    --artifact-id "TheHorselessNewspaper.CSharp.Rest" `
    --package-name "TheHorselessNewspaper.CSharp.Rest" `
    --skip-validate-spec `
    --additional-properties="netCoreProjectFile=true,optionalAssemblyInfo=true,packageName=TheHorselessNewspaper.CSharp.Rest,targetFramework=net6.0"

    push-location csharp-netcore\src

        # as per this clever hack https://stackoverflow.com/questions/39934405/can-i-build-multiple-projects-with-dotnet-build/51904395
        Get-ChildItem -exclude ".vscode" | %{Write-Host -ForegroundColor DarkMagenta "Building $_..."; dotnet build $_;}
        
    pop-location
}
else {
    Write-Host "spec file not provided"
}