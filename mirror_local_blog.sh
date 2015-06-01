#!/bin/bash

find . ! -name mirror_local_blog.sh -print | grep -v ./.git | xargs rm -rf

wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --convert-links \
     --adjust-extension \
	http://localhost:2368

mv localhost:2368/* .
rm -rf localhost:2368
