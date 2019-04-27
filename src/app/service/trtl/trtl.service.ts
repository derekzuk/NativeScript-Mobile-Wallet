import { Injectable } from '@angular/core';

/* REEEEE ADD TYPES */
// const TurtleCoind = require('turtlecoin-rpc').TurtleCoind;

@Injectable({
  providedIn: 'root'
})
export class TrtlService {
  trtlWalletTotal: string = "448207.348";
  sendToAddress: string;

  constructor() {
    console.log('Hello TrtlProvider Provider');
    // this.testTurtleCoind();
  }

  // testTurtleCoind() {
  //   const daemon = new TurtleCoind({
  //     host: 'daemon.turtle.link', // ip address or hostname of the TurtleCoind host
  //     port: 11898, // what port is the RPC server running on
  //     timeout: 2000, // request timeout
  //     ssl: false // whether we need to connect using SSL/TLS
  //   });

  //   daemon.getBlocks({
  //     height: 500000
  //   }).then((blocks) => {
  //     console.log(blocks);
  //   })
  // }

  getTrtlWalletTotal() {
    return this.trtlWalletTotal;
  }

  setQrScanResult(qrCode: string) {
    this.sendToAddress = qrCode;
  }

  getSendToAddress() {
    console.log("sendToAddress from Provider: " + this.sendToAddress);
    return this.sendToAddress;
  }

}