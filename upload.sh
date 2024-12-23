rm -rf dist*
npm run build
tar -zcvf dist.tar.gz dist
rm -rf /Users/kashingliu/develop/AutoFill/dist.tar.gz
mv dist.tar.gz /Users/kashingliu/develop/AutoFill/
cd /Users/kashingliu/develop/AutoFill/
git add dist.tar.gz
git commit -am "1"
git push
