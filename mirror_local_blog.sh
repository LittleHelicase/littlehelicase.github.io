#!/bin/bash

find . ! -name mirror_local_blog.sh -print | grep -v ./.git | xargs rm -rf

wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --restrict-file-names=windows \
     --convert-links \
	http://localhost:2368

mv localhost+2368/* .
rm -rf localhost+2368
