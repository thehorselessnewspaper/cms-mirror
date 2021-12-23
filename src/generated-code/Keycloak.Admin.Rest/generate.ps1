# as per https://openapi-generator.tech/docs/usage

docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate `
    -i https://raw.githubusercontent.com/ccouzens/keycloak-openapi/main/keycloak/16.0.yml `
    -g csharp-netcore -o /local/csharp-netcore `
    --artifact-id "Horseless.Keycloak.Admin.Rest" `
    --package-name "Horseless.Keycloak.Admin.Rest" `
    --additional-properties="netCoreProjectFile=true,optionalAssemblyInfo=true,packageName=Horseless.Keycloak.Admin.Rest,targetFramework=net6.0"

    push-location csharp-netcore\src

        # as per this clever hack https://stackoverflow.com/questions/39934405/can-i-build-multiple-projects-with-dotnet-build/51904395
        Get-ChildItem -exclude ".vscode" | %{Write-Host -ForegroundColor DarkMagenta "Building $_..."; dotnet build $_;}
        
    pop-location