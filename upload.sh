rm -rf dist*
npm run build
tar -zcvf dist.tar.gz dist
rm -rf /Users/kashingliu/Documents/develop/ReportAssistant/dist.tar.gz
mv dist.tar.gz /Users/kashingliu/Documents/develop/ReportAssistant/
cd /Users/kashingliu/Documents/develop/ReportAssistant/
git add dist.tar.gz
git commit -am "add dist"
git push
