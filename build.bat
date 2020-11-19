dotnet build

cd src/ui/ng-alain
npm install && npm run-script build && del ..\..\longquan.gongan.Web\wwwroot\* /q && copy dist\* ..\..\longquan.gongan.Web\wwwroot\ && cd ..\..\longquan.gongan.Web && dotnet build -c Release && dotnet publish -c Release && cd ..\..\ && docker build -t longquan.gongan.web .
