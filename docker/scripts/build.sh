# build server
yarn --cwd server build
cp -r server/build docker/build

# build frontend and copy into server's public folder
yarn --cwd frontend build
cp -r frontend/build docker/build/public
