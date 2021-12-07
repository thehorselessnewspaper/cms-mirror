
# obviously the hardcodedness of this reflects sheer laziness 
param ($server, $database)

Scaffold-DbContext "Server=$($server);Database=$($database);Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Entities