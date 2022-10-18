export class Log {
    static success(msg: string | number | object) {
        msg = Helper.parseIfObject(msg)
        console.log(`%c ${msg}`, `color: white; background: green`);
    }

    static warning(msg: string | number | object) {
        msg = Helper.parseIfObject(msg)
        console.log(`%c ${msg}`, `color: black; background: yellow`);
    }

    static error(msg: string | number | object) {
        msg = Helper.parseIfObject(msg)
        console.log(`%c ${msg}`, `color: white; background: red`);
    }

    // for open source contribution: make generic to support all css styles mentioned here- https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output
    // difficulty: easy
    static colourful(msg: string | number | object, textColor: string = 'white', backgroundColor: string = 'transparent') {
        msg = Helper.parseIfObject(msg)
        console.log(`%c ${msg}`, `color: ${textColor}; background: ${backgroundColor}`);
    }

    static onlyAfterMe(msg: string | number | object, textColor: string = 'white', backgroundColor: string = 'transparent') {
        console.clear();
        msg = Helper.parseIfObject(msg)
        Log.colourful(msg, textColor, backgroundColor);
    }

    static onlyBeforeMe(msg: string | number | object, textColor: string = 'white', backgroundColor: string = 'transparent') {
        msg = Helper.parseIfObject(msg)
        Log.colourful(msg, textColor, backgroundColor);
        console.log = function() {};
    }

    static onlyMe(msg: string | number | object, textColor: string = 'white', backgroundColor: string = 'transparent') {
        console.clear();
        msg = Helper.parseIfObject(msg)
        Log.colourful(msg, textColor, backgroundColor);
        console.log = function() {};
    }

    static onlyUs() {
        // for open source contribution: should show all and only console logs of this type
        // diffficulty: hard
    }

    static multiVar() {
        // for open source contribution: implement colourful() to handle more than one variable being passed to it
        // difficulty: medium
    }

    static logIfFailed() {
        // for open source contribution: implement console.assertion() using colourful()
        // diffficulty: easy
    }

    static countMe() {
        // for open source contribution: implement console.count() using colourful()
        // diffficulty: easy
    }

    static countMeReset() {
        // for open source contribution: implement console.countReset() using colourful()
        // diffficulty: easy
    }

    static groupStart() {
        // for open source contribution: implement console.group() using colourful()
        // diffficulty: easy
    }

    static groupEnd() {
        // for open source contribution: implement console.groupEnd() using colourful()
        // diffficulty: medium
    }

    static tabulate() {
        // for open source contribution: implement console.table() using colourful()
        // diffficulty: easy
    }

    static timerStart() {
        // for open source contribution: implement console.time() using colourful()
        // diffficulty: easy
    }

    static timerLog() {
        // for open source contribution: implement console.timeLog() using colourful()
        // diffficulty: medium
    }

    static timerEnd() {
        // for open source contribution: implement console.timeEnd() using colourful()
        // diffficulty: medium
    }
}


// for opens source contribution: declare a module and import from there
// difficulty: easy
class Helper {
    static parseIfObject = (val: string | number | object) => {
        if (typeof val === 'object') {
            return JSON.stringify(val) as string;
        } else {
            return val as string | number;
        }
    }
}



/*
 // for opens source contribution: add funtion definitions
 // difficulty: easy
 
 // for opens source contribution: add more functionality
 // difficulty: easy/medium/hard
*/
