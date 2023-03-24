# web2.0_auth_with_firebase

#if this error
```
Error: EACCES: permission denied, mkdir '/usr/lib/node_modules/electron/.electron'
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! electron@5.0.2 postinstall: `node install.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the electron@5.0.2 postinstall script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```
## try this command 

```
There seems to be an issue with permissions on your machine (/usr/lib directory requires root access). What I suggest you to try is to change the default directory where NPM is installing packages globally. Then you can try to run the installation without root access.

Try this:

On the command line, in your home directory, create a directory for global installations:

mkdir ~/.npm-global

Configure npm to use the new directory path:

npm config set prefix '~/.npm-global'

In your preferred text editor, open or create a ~/.profile file and add this line:

export PATH=~/.npm-global/bin:$PATH

On the command line, update your system variables:

source ~/.profile

To test your new configuration, install a package globally without using sudo:

npm install -g electron
```

## -bash: firebase: command not found

### Run this command

`` alias firebase="`npm config get prefix`/bin/firebase" ``


