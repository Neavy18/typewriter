const sentence = "hello there from lighthouse labs";

let timer = 50;

for (const char of sentence) {
timer += 50
setTimeout(() => {process.stdout.write(char)}, timer)
}; 

setTimeout(() => {process.stdout.write('\n')}, timer)