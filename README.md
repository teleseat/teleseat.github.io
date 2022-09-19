# eventco-client

## Dev Setup

- ```npm install -g @ionic/cli```
- ```npm install -g serve```

More info at [Ionic Cli Docs](https://ionicframework.com/docs/)

## Build and Run

Run dev server
- ```ionic serve```

Build for production
- ```ionic build```

## Latest documented node version
- node: `12.12.3`
- npm: `6.11.3`

## Chrome security workaround

For local dev with webrtc, go to this:
chrome://flags/#unsafely-treat-insecure-origin-as-secure
and add http://localhost.teleseat.com:8100 in text box, and Relaunch browser

## Troublshoot

If encountering node-sass issues when running server,
- Make sure node
- `npm rebuild node-sass`
