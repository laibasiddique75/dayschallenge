
// Q no 49
function hobbies (...hobbies:string[]){
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}`);
    })


}
hobbies("coding","reading","chatting");

// Q no 50
let myIdealDay = ` My ideal day would involve:\n  1.Waking up early and going for class. \n 2. Spending a 2 hours coding on a project.\n  3. Ending a day by some coding challenges. `;
console.log(myIdealDay);

// Q no 51

function calculateArea (width:number, height:number): number{
return width * height;
}
 let calculateAreaArrow = (width:number,height:number): number => width * height;
 console.log(calculateAreaArrow (7,0));
 













