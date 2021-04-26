const double = (arr) => arr.map((val) => val * 2);

const SquareAndFindFriends = (nums) => nums.map((num) => num ** 2).filter(square => square % 2 === 0);