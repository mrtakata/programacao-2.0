import * as ts from "typescript";
import * as fs from "fs";

export function caramba() {
    const reader = new FileReader();
    let code: string =  fs.readFileSync("./PresetAI/RandomAI.ts").toString("utf8");
    // let code: string = `({
    //     Run: (data: string): string => {
    //         console.log(data); return Promise.resolve("SUCCESS"); }
    //     })`;
    
    let result = ts.transpile(code);
    let runnable :any = eval(result);
    runnable.Run("RUN!").then((result:string)=>{console.log(result);});
}