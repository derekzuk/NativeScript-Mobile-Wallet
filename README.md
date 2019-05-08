# To run with NativeScript Playground iPhone app:

tns prepare ios<br>
tns build ios --for-device --log trace --bundle > out.txt<br>
<!-- try "tns build ios --for-device" and also with --release -->
<!-- tns build ios --for-device --release --bundle webpack --env.uglify -->
<!-- tns preview --bundle -->
run in xcode, using real phone

# tns preview doesn't work anymore:
We have to build the application in xcode: <br>
Open the /platforms/ios/NativeScriptMobileWallet.xcodeproj file in xcode and build from there

# sometimes you have to clean up
tns platform remove ios <br>
tns platform add ios

# To update tns cli:
npm cache clean --force <br>
npm uninstall -g nativescript <br>
which tns # // This command will show you if you have installed NativeScript CLI somewhere else - it should return empty result in case the package is not installed anywhere <br>
npm install -g nativescript@latest <br>

# Fixing various errors:
If you get "Cannot find type definition file for 'node'", try reimporting: <br>
npm i -D @types/node
<br><br>
Various errors:<br>
delete platforms/ios and start over?