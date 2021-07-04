// コンソールに1から24までの文字を表示
const number = 24
for (let n = 0; n < number + 1; n++) {
  if (n % 15 === 0) {
    console.log("FizzBuzz")
  } else if (n % 3 === 0) {
    console.log("Fizz")
  } else if (n % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(n)
  }
}
// 数字を増やすにはどうしたらいいでしょう
