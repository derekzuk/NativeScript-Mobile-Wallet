# To run with NativeScript Playground iPhone app:

tns prepare ios <br>
tns build ios <br>
tns preview --bundle

# To update tns cli:
npm cache clean --force <br>
npm uninstall -g nativescript <br>
which tns # // This command will show you if you have installed NativeScript CLI somewhere else - it should return empty result in case the package is not installed anywhere <br>
npm install -g nativescript@latest <br>