mkdir docker/build

# build server
yarn --cwd server build
cp -r server/build docker/build/src

# build frontend and copy into server's public folder
yarn --cwd frontend build
cp -r frontend/build docker/build/public

# copy Dockerfile into build folder
cp -r docker/Dockerfile docker/build/Dockerfile
