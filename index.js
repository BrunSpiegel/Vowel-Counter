const text1 = "eu vou para a escola";
const text2 = "o dia esta lindo hoje";
 
const vowels = ['a','e','i','o','u']

function vowelCounter(text) {
  let counter = 0

  for(let i = 0; i < text.length; i++) {
    const isVowel = vowels.includes(text[i])

    if (isVowel) counter++
  }

  console.log(counter)
}

vowelCounter(text1)