# To run with NativeScript Playground iPhone app:

tns prepare ios<br>
tns build ios<br>
<!-- tns preview --bundle -->

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