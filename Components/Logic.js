import React from "react";
import { Text, View } from "react-native";

export default Logic = () => {
  const TeamCount = 15;

  let SampleOutput = 0;
  let SampleOutputList = [
    7, 2, 5, 1, 4, 8, 3, 6, 11, 10, 12, 9, 13, 15, 14, 15, 9, 10, 6, 8, 1, 2,
  ];

  const permutations = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [2, 13, 14, 15, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1],
    [3, 14, 15, 1, 2, 13, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [4, 15, 1, 2, 13, 14, 3, 12, 5, 6, 7, 8, 9, 10, 11],
    [5, 3, 2, 13, 14, 15, 11, 7, 10, 4, 12, 1, 6, 8, 9],
    [6, 4, 13, 14, 15, 11, 12, 10, 8, 3, 1, 2, 5, 9, 7],
    [7, 5, 4, 3, 11, 12, 13, 14, 15, 9, 10, 6, 8, 1, 2],
    [8, 6, 5, 12, 7, 10, 14, 9, 11, 1, 2, 3, 4, 15, 13],
    [9, 7, 6, 5, 10, 8, 15, 11, 1, 2, 3, 4, 12, 13, 14],
    [10, 8, 7, 6, 4, 3, 9, 1, 2, 13, 14, 11, 15, 12, 5],
    [11, 9, 8, 7, 12, 5, 10, 2, 3, 14, 13, 15, 4, 6, 1],
    [12, 10, 9, 8, 1, 2, 6, 3, 4, 11, 15, 13, 14, 7, 5],
    [13, 11, 10, 9, 6, 5, 8, 4, 12, 15, 7, 14, 1, 2, 3],
    [14, 12, 11, 10, 8, 9, 1, 15, 13, 7, 5, 3, 2, 4, 6],
    [15, 1, 12, 11, 9, 7, 2, 13, 14, 5, 6, 4, 3, 8, 10],
  ];

  function generateSampleOutput() {
    let cpy = SampleOutput;
    SampleOutput += 1;
    return SampleOutputList[cpy];
  }
  class GameFlow {
    constructor(initID) {
      this.startID = initID;
      this.progressCount = 1;
      console.log("GameFlow Object Created.");
    }
  }

  class GamePlayerTeam extends GameFlow {
    // team related functionalities
    clueList = new Array(TeamCount);

    constructor(initID) {
      super(initID);
      console.log("GamePlayerTeam Object Created.");

      // filling up clue list with passed ID.
      for (let i = 0; i < TeamCount; i++) {
        this.clueList[i] = permutations[this.startID - 1][i];
      }
    }

    getProgressCount() {
      return this.progressCount;
    }

    // friend class Scanner;
    // friend bool validateNextClue(Scanner &, GamePlayerTeam &);
  }

  // Make validateNextClue a public function of GamePlayerTeam
  GamePlayerTeam.validateNextClue = validateNextClue;

  /////////////////////////////////////
  class Scanner {
    // scanner related functionalities
    constructor() {
      this.scannedOutput = 0;
      this.previousOutput = 0;
      this.className = "Scanner";
      console.log(this.className + " Object Created");
    }

    // method to scan input values
    scanQR() {
      // dummy method used to scan qr codes

      console.log("Scanning the QR");

      if (this.previousOutput == 0) {
        this.scannedOutput = generateSampleOutput();
      } else {
        this.previousOutput = this.scannedOutput;
        this.scannedOutput = generateSampleOutput();
      }
    }

    getScannedOutput() {
      return this.scannedOutput;
    }
  }

  // Make validateNextClue a public function of Scanner
  Scanner.validateNextClue = validateNextClue;

  /////////////////////////////////////
  function validateNextClue(s_obj, t_obj) {
    s_obj.scanQR();
    let res = s_obj.getScannedOutput();
    console.log("Next Scanned QR value in validate method: " + res);
    console.log("Validating next clue: ");
    if (res == t_obj.clueList[t_obj.progressCount]) {
      t_obj.progressCount += 1;
      console.log("True");
      return true;
    } else {
      console.log("False");
      return false;
    }
  }
  /////////////////////////
  function teamIDFinder(defaultScanner) {
    defaultScanner.scanQR();
    console.log("Finding initial team ID...");
    console.log("Initial ID: " + defaultScanner.getScannedOutput());
    return defaultScanner.getScannedOutput();
  }
  //////////////////////
  function main() {
    // declarations
    let defaultScanner = new Scanner();
    let defaultTeam = new GamePlayerTeam(teamIDFinder(defaultScanner));
    let res;

    while (defaultTeam.getProgressCount() < 15 && 1) {
      // here, 1 is for time, which is valid.
      console.log("ProgressCount: " + defaultTeam.getProgressCount());
      do {
        // defaultScanner.scanQR();
        res = validateNextClue(defaultScanner, defaultTeam);
        console.log("Result of Validation: " + (res ? "True" : "False"));
      } while (!res);
      // display clue
    }
  }
  main();
};
