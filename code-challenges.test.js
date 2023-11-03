// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// // b) Create the function that makes the test pass.

const shuffleArray = (arr) => {
    const removedItem = arr.shift()
  
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  
    return [removedItem, ...arr]
  }
  
  
  describe("removeAndShuffleArray", () => {
    it("removes first item of the array and shuffles the rest of the array", () => {
      expect(shuffleArray(colors1)).toEqual(["blue", "green", "yellow", "pink"]);
      expect(shuffleArray(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
    })
  })
  

// Pseudo code:
// Input: colors1, 2
// Output: "blue", "green", "yellow", "pink", saffron", "aquamarine", "periwinkle", "indigo", "ochre"
// use .shift to remove the first item in the array
// use math.floor and math.random to shuffle the items in the array.
// got stuck and refered back to notes and tried using chatgpt and still could not get it to pass the test. 

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

const calculate = (votes) => {
    return votes.upVotes - votes.downVotes
}

describe("calculate", () => {
    it("subtracts the downVotes from the upVotes", () => {
        expect(calculate(votes1)).toEqual(11)
        expect(calculate(votes2)).toEqual(-31)
    })
})
// b) Create the function that makes the test pass.

// Pseudo code:
// Input: votes1, 2
// Output: 11, -31
// Create a argument that calculates the votes and subtracts the downVotes from the upVotes to get the final result.