#!/bin/bash

# Build the project
npm run build

# Ensure the _redirects file is in the build output
cp public/_redirects dist/

# Success message
echo "Build completed successfully!" 