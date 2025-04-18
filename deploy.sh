#!/bin/bash

# Github token
TOKEN="<<token>>"

# Github repo details
REPO_OWNER="makeitrun"
REPO_NAME="evershop"
BRANCH="release/1.2025.0"
#BRANCH="master"

# Check if tar is installed, and install if not
echo "Checking if tar is installed..."
if ! command -v tar &> /dev/null
then
    echo "tar is not installed, installing now..."
    sudo apt-get install tar -y
fi

# Set variables
CURRENT_BUILD="current"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
NEW_BUILD="build_$TIMESTAMP"

# Download source from GitHub archive
echo "Downloading source from GitHub..."
wget --header="Authorization: token $TOKEN" -O $NEW_BUILD.tar.gz https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/tarball


# Unzip source to new build directory
echo "Extracting source to $NEW_BUILD..."
mkdir $NEW_BUILD
tar -xf $NEW_BUILD.tar.gz -C $NEW_BUILD --strip-components 1

# Install npm dependencies
echo "Installing npm dependencies..."
cd $NEW_BUILD && npm install --unsafe-perm

# Build the app
echo "Building the app..."
#npm run build
npm run build -- --skip-minify

cd ..

# Rename current build folder to previous build folder
if [ -d "previous-build" ]; then
  rm -rf previous-build
fi

echo "Rename the current build to previous-build"
mv $CURRENT_BUILD previous-build

# Rename new build folder to current build folder
mv $NEW_BUILD $CURRENT_BUILD

# Copy media and config folder from previous build to current build
if [ -d "previous-build" ]; then
  cp -R previous-build/media $CURRENT_BUILD/media
  cp -R previous-build/config $CURRENT_BUILD/config
fi

# Set permissions for media folder
chmod 777 $CURRENT_BUILD/media

cd $CURRENT_BUILD

# Start app with pm2
pm2 stop all
pm2 start npm -- start