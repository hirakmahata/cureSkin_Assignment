process.stdin.resume();
process.stdin.setEncoding("utf8");

let input = "";
process.stdin.on("data", (chunk) => (input += chunk));

process.stdin.on("end", () => {
  input = input.trim().split("\n");
  const T = parseInt(input[0]);

  //Reading every test cases
  for (let i = 1; i <= T; i++) {
    let N = parseInt(input[i]);
    let seatType = "";
    let facingSeat = 0;

    // Finding facing seat number
    let rem = N % 12;
    switch (rem) {
      case 0:
        facingSeat = N - 11;
        seatType = "WS";
        break;
      case 1:
        facingSeat = N + 11;
        seatType = "WS";
        break;
      case 2:
        facingSeat = N + 9;
        seatType = "MS";
        break;
      case 3:
        facingSeat = N + 7;
        seatType = "AS";
        break;
      case 4:
        facingSeat = N + 5;
        seatType = "AS";
        break;
      case 5:
        facingSeat = N + 3;
        seatType = "MS";
        break;
      case 6:
        facingSeat = N + 1;
        seatType = "WS";
        break;
      case 7:
        facingSeat = N - 1;
        seatType = "WS";
        break;
      case 8:
        facingSeat = N - 3;
        seatType = "MS";
        break;
      case 9:
        facingSeat = N - 5;
        seatType = "AS";
        break;
      case 10:
        facingSeat = N - 7;
        seatType = "AS";
        break;
      case 11:
        facingSeat = N - 9;
        seatType = "MS";
        break;
    }

    //outputing facing seat with seat type on the console
    console.log(`${facingSeat} ${seatType}`);
  }
});
