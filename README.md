# Firefox user.js

- user.js is the file that firefox useds to set configuration flags which can be generally accessed through typing about:config in the url bar
- It is an automated way to set the flags recomended by https://privacytools.io, they have great documentation explaining the flags and their uses, please check them out.
- This configuration has minimal impact ie. it doesnt break sites
- There is however one caveat the wildwine DRM is disabled, this will stop sites like netflix from working, you will need to change the wildwine config in the user.js for it to work.

## How to use user.js on Firefox

- Download user.js
- open firefox and create a new profile by typing in about:profiles inthe url bar and open the directory from that page(the file location depends upon the OS)
- paste the user.js into the directory and restart Firefox
- visit about:profiles and delete the old profile and set the new profile as default(not required but recomended as this configurations will only effect this new profile)

## More secure user.js configuration
- https://github.com/arkenfox/user.js it is a ongoing project which is far more hardned and secure.(this will break sites)
