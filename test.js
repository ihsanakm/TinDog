function getTotalPrice(items, curWeight, curSize, curIndex) {
    if (curIndex === 0 || curWeight <= 0 || curSize <= 0) {
      return 0;
    }
  
    if (items[curIndex - 1].weight > curWeight || items[curIndex - 1].size > curSize) {
      return getTotalPrice(items, curWeight, curSize, curIndex - 1);
    }
  
    const includeItemPrice = items[curIndex - 1].price + getTotalPrice(items, curWeight - items[curIndex - 1].weight, curSize - items[curIndex - 1].size, curIndex - 1);
    const excludeItemPrice = getTotalPrice(items, curWeight, curSize, curIndex - 1);
    return Math.max(includeItemPrice, excludeItemPrice);
  }
  
  const itemList = [
    { weight: 10, price: 20, size: 30 },
    { weight: 15, price: 25, size: 35 },
    { weight: 20, price: 30, size: 40 },
    { weight: 25, price: 35, size: 40 }
  ];
  
  console.log("Test 01:");
  console.log("Expected Output: Total price: 35");
  console.log("Actual Output:", getTotalPrice(itemList, 50, 50, itemList.length));
  
  console.log("\nTest 02:");
  console.log("Expected Output: Total price: 50");
  console.log("Actual Output:", getTotalPrice(itemList, 30, 100, itemList.length));


  function calculateTotalBarLengthReq(gateWidth, gateHeight, rowHeightPercentage, barThickness) {
    const numRows = Math.floor(gateHeight / (gateHeight * (rowHeightPercentage / 100)));
  
    const emptyRowHeight = (gateHeight - numRows * barThickness) / (numRows + 1);
    const circleRowHeight = barThickness;
  
    if (emptyRowHeight < circleRowHeight || numRows % 2 === 0) {
      console.log("Cannot generate a symmetrical design for the given inputs.");
      return false;
    }
  
    const totalLength = (numRows + 1) * emptyRowHeight + numRows * circleRowHeight;
  
    return totalLength * gateWidth;
  }
  
  const ironBarThickness = 10;
  const totalBarLength = calculateTotalBarLengthReq(500, 500, 20, ironBarThickness);
  
  if (totalBarLength !== false) {
    console.log("Total length of iron bars required:", totalBarLength, "cm");
  }
  



  const foodItems = [
    { name: "A", calories: 239 },
    { name: "B", calories: 130 },
    { name: "C", calories: 155 },
    { name: "D", calories: 200 },
    { name: "E", calories: 20 },
    { name: "F", calories: 500 },
    { name: "G", calories: 100 },
    { name: "H", calories: 50 },
    { name: "I", calories: 10 },
  ];
  
  function calculateMealPlan(mealsPerDay, totalCaloriesPerDay, calorieOverflowLimit) {
    const mealPlan = [];
    const usedFoodItems = new Set();
  
    function generateUniqueMeal(index, remainingCalories) {
      if (index === mealsPerDay) {
        return mealPlan;
      }
  
      for (const foodItem of foodItems) {
        if (!usedFoodItems.has(foodItem.name)) {
          if (remainingCalories - foodItem.calories >= 0) {
            usedFoodItems.add(foodItem.name);
            mealPlan.push(foodItem.name);
  
            const newRemainingCalories = remainingCalories - foodItem.calories;
            const result = generateUniqueMeal(index + 1, newRemainingCalories);
  
            if (result) {
              return result;
            }
  
            usedFoodItems.delete(foodItem.name);
            mealPlan.pop();
          }
        }
      }
  
      return null;
    }
  
    const result = generateUniqueMeal(0, totalCaloriesPerDay);
  
    if (result) {
      console.log("Meal plan:");
      for (let i = 0; i < result.length; i++) {
        console.log("Meal", i + 1, ":", result[i]);
      }
    } else {
      console.log("A meal plan cannot be generated for the given inputs.");
      return false;
    }
  }
  
  calculateMealPlan(3, 600, 100);
  


  function getShoeSize(footLength, footWidth, gender) {
    const ukShoeSizes = {
      female: [
        { size: 3, length: 21.6, width: 8.2 },
        { size: 4, length: 22.2, width: 8.4 },
        { size: 5, length: 22.9, width: 8.6 },
      ],
      male: [
        { size: 6, length: 24.5, width: 8.8 },
        { size: 7, length: 25.1, width: 9.0 },
        { size: 8, length: 25.4, width: 9.2 },
      ],
    };
  
    const sizes = ukShoeSizes[gender];
    let bestSize = null;
    let minDiff = Infinity;
  
    for (const sizeData of sizes) {
      const lengthDiff = Math.abs(footLength - sizeData.length);
      const widthDiff = Math.abs(footWidth - sizeData.width);
      const totalDiff = lengthDiff + widthDiff;
  
      if (totalDiff < minDiff) {
        minDiff = totalDiff;
        bestSize = sizeData.size;
      }
    }
  
    return bestSize;
  }
  
  const footLength = 20.8;
  const footWidth = 8;
  const gender = "female";
  
  const bestSize = getShoeSize(footLength, footWidth, gender);
  console.log("Best matching UK shoe size:", bestSize);
  


    s = s.toLowerCase();

    const letterPresent = new Array(26).fill(false);
  
    for (let i = 0; i < s.length; i++) {
      const charCode = s.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) { 
        const index = charCode - 97; 
        letterPresent[index] = true;
      }
    }
  
    const allLettersPresent = letterPresent.every((present) => present);
  
    return allLettersPresent ? "pangram" : "not pangram";




    function caesarCipher(s, k) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const rotatedAlphabet = alphabet.slice(k) + alphabet.slice(0, k);
      
        let encryptedString = "";
      
        for (let i = 0; i < s.length; i++) {
          const char = s[i];
          const isUpperCase = char === char.toUpperCase();
          const charLower = char.toLowerCase();
      
          if (alphabet.includes(charLower)) {
            const index = alphabet.indexOf(charLower);
            const rotatedChar = rotatedAlphabet[index];
            encryptedString += isUpperCase ? rotatedChar.toUpperCase() : rotatedChar;
          } else {
            encryptedString += char;
          }
        }
      
        return encryptedString;
      }
      
      console.log(caesarCipher("There is s-a-starman-waiting-in-the-sky", 3)); // Output: "Wkhuh lv v-d-vwdupdq-zdlwlqj-lq-wkh-vnb"
      console.log(caesarCipher("middle-Outz", 2)); // Output: "okffng-Qwvb"
      

      const minLength = 6;
  const numbers = "0123456789";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChars = "!@#$%^&*()-+";

  let missingChars = 0;

  if (!password.match(/[0-9]/)) missingChars++;
  if (!password.match(/[a-z]/)) missingChars++;
  if (!password.match(/[A-Z]/)) missingChars++;
  if (!password.match(/[!@#$%^&*()\-\+]/)) missingChars++;

  const missingLength = Math.max(minLength - password.length, 0);

  return Math.max(missingChars, missingLength);



  function equalizeArray(arr) {
    const frequencyMap = new Map();
    for (const num of arr) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    let maxFrequency = 0;
    for (const frequency of frequencyMap.values()) {
      maxFrequency = Math.max(maxFrequency, frequency);
    }
  
    const minDeletions = arr.length - maxFrequency;
    return minDeletions;
  }
  
  console.log(equalizeArray([3, 3, 2, 1, 3])); // Output: 2
  console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3])); // Output: 4
  
  function stones(n, a, b) {
    const resultSet = new Set();
  
    for (let i = 0; i < n; i++) {
      const stoneValue = i * a + (n - 1 - i) * b;
      resultSet.add(stoneValue);
    }
  
    const resultArray = Array.from(resultSet).sort((a, b) => a - b);
  
    return resultArray;
  }
  
  console.log(stones(4, 10, 100)); // Output: [30, 120, 210, 300]
  console.log(stones(3, 1, 2)); // Output: [2, 3, 4]
  

  function icecreamParlor(m, arr) {
    const indicesMap = {};
  
    for (let i = 0; i < arr.length; i++) {
      const cost = arr[i];
      const remaining = m - cost;
  
      if (remaining in indicesMap) {
        return [indicesMap[remaining] + 1, i + 1];
      }
  
      indicesMap[cost] = i;
    }
  
    return null;
  }
  
  console.log(icecreamParlor(4, [6, 3, 5, 1, 2])); // Output: [2, 4]
  console.log(icecreamParlor(4, [1, 4, 5, 3, 2])); // Output: [1, 4]
  

  function icecreamParlor(m, arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    let left = 0;
    let right = sortedArr.length - 1;
  
    while (left < right) {
      const sum = sortedArr[left] + sortedArr[right];
  
      if (sum === m) {
        const index1 = arr.indexOf(sortedArr[left]);
        const index2 = arr.indexOf(sortedArr[right], index1 + 1);
        return [Math.min(index1, index2) + 1, Math.max(index1, index2) + 1];
      } else if (sum < m) {
        left++;
      } else {
        right--;
      }
    }
  
    return null;
  }
  
  console.log(icecreamParlor(4, [6, 3, 5, 1, 2])); // Output: [2, 4]
  console.log(icecreamParlor(4, [1, 4, 5, 3, 2])); // Output: [1, 4]
  

  function icecreamParlor(m, arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    let left = 0;
    let right = sortedArr.length - 1;
  
    while (left < right) {
      const sum = sortedArr[left] + sortedArr[right];
  
      if (sum === m) {
        const index1 = arr.indexOf(sortedArr[left]);
        const index2 = arr.indexOf(sortedArr[right], index1 + 1);
        return [Math.min(index1, index2) + 1, Math.max(index1, index2) + 1];
      } else if (sum < m) {
        left++;
      } else {
        right--;
      }
    }
  
    return null;
  }
  
  console.log(icecreamParlor(4, [6, 3, 5, 1, 2])); // Output: [2, 4]
  console.log(icecreamParlor(4, [1, 4, 5, 3, 2])); // Output: [1, 4]
  


  function icecreamParlor(m, arr) {
    const map = new Map();
  
    for (let i = 0; i < arr.length; i++) {
      const cost = arr[i];
      const remaining = m - cost;
  
      if (map.has(remaining)) {
        return { firstIndex: map.get(remaining) + 1, secondIndex: i + 1 };
      }
  
      map.set(cost, i);
    }
  
    return null;
  }
  
  console.log(icecreamParlor(4, [6, 3, 5, 1, 2])); // Output: { firstIndex: 2, secondIndex: 4 }
  console.log(icecreamParlor(4, [1, 4, 5, 3, 2])); // Output: { firstIndex: 1, secondIndex: 4 }
  


  function nonDivisibleSubset(k, s) {
    const remainders = new Array(k).fill(0);
  
    for (const num of s) {
      const remainder = num % k;
      remainders[remainder]++;
    }
  
    let maxSize = Math.min(remainders[0], 1);
  
    for (let i = 1; i <= k / 2; i++) {
      if (i !== k - i) {
        maxSize += Math.max(remainders[i], remainders[k - i]);
      } else {
        maxSize++;
      }
    }
  
    if (k % 2 === 0) {
      maxSize += Math.min(remainders[k / 2], 1);
    }
  
    return maxSize;
  }
  
  console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22])); // Output: 3
  console.log(nonDivisibleSubset(5, [2, 7, 12, 17, 22])); // Output: 5
  

  function nonDivisibleSubset(k, s) {
    const remainders = new Array(k).fill(0);
  
    for (const num of s) {
      const remainder = num % k;
      remainders[remainder]++;
    }
  
    let maxSize = Math.min(remainders[0], 1);
  
    if (k % 2 === 0) {
      maxSize++;
    }
  
    for (let i = 1; i <= k / 2; i++) {
      if (i !== k - i) {
        maxSize += Math.max(remainders[i], remainders[k - i]);
      }
    }
  
    return maxSize;
  }
  
  console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22])); // Output: 3
  console.log(nonDivisibleSubset(5, [2, 7, 12, 17, 22])); // Output: 5
  
  function getMoneySpent(keyboards, drives, b) {
    let maxTotalPrice = -1;
  
    for (const keyboard of keyboards) {
      for (const drive of drives) {
        const totalPrice = keyboard + drive;
  
        if (totalPrice <= b && totalPrice > maxTotalPrice) {
          maxTotalPrice = totalPrice;
        }
      }
    }
  
    return maxTotalPrice;
  }
  
  console.log(getMoneySpent([3, 1], [5, 2, 8], 10)); // Output: 9
  console.log(getMoneySpent([4], [5], 5)); // Output: -1
  

  function gradingStudents(grades) {
    const roundedGrades = [];
  
    for (const grade of grades) {
      if (grade < 38) {
        roundedGrades.push(grade);
      } else {
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
  
        if (nextMultipleOf5 - grade < 3) {
          roundedGrades.push(nextMultipleOf5);
        } else {
          roundedGrades.push(grade);
        }
      }
    }
  
    return roundedGrades;
  }
  
  console.log(gradingStudents([75, 67, 40, 37, 33])); // Output: [75, 67, 40, 37, 33]
  console.log(gradingStudents([29, 50, 54, 99, 91])); // Output: [29, 50, 55, 100, 91]
  

  function pickingNumbers(a) {
    const frequency = new Array(100).fill(0);
    for (const num of a) {
      frequency[num]++;
    }
  
    let maxLength = 0;
  
    for (let i = 1; i < frequency.length; i++) {
      const currentLength = frequency[i] + frequency[i - 1];
      maxLength = Math.max(maxLength, currentLength);
    }
  
    return maxLength;
  }
  
  console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // Output: 5
  console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // Output: 3
  

  function pickingNumbers(a) {
    const frequency = new Array(100).fill(0);
    for (const num of a) {
      frequency[num]++;
    }
  
    let maxLength = 0;
  
    for (let i = 1; i < frequency.length; i++) {
      const currentLength = frequency[i] + frequency[i - 1];
      maxLength = Math.max(maxLength, currentLength);
    }
  
    return maxLength;
  }
  
  console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // Output: 5
  console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // Output: 3
  

  function drowPattern(x) {
    if (x % 2 === 0) {
      throw new Error("Input should be an odd number.");
    }
  
    const grid = new Array(x).fill().map(() => new Array(x).fill("o"));
  
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < x; j++) {
        if (i === j || i + j === x - 1) {
          grid[i][j] = "x";
        }
      }
    }
  
    return grid;
  }
  
  console.log(drowPattern(5));
  

  function drowPattern(x) {
    if (x % 2 === 0) {
      throw new Error("Input should be an odd number.");
    }
  
    const grid = new Array(x).fill().map(() => new Array(x).fill("o"));
  
    for (let i = 0; i < x; i++) {
      grid[i][i] = "x"; 
      grid[i][x - 1 - i] = "x"; 
    }
  
    return grid;
  }
  
  console.log(drowPattern(5));


  function getPermutations(sentence, word) {
    const words = sentence.toUpperCase().split(" ");
  
    const filteredWords = words.filter((w) => w === word);
  
    function generatePermutations(arr, n, result) {
      if (n === 1) {
        result.push([...arr]);
        return;
      }
  
      for (let i = 0; i < n; i++) {
        generatePermutations(arr, n - 1, result);
  
        if (n % 2 === 0) {
          [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
        } else {
          [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
        }
      }
    }
  
    const permutations = [];
    generatePermutations(filteredWords, filteredWords.length, permutations);
  
    return { word: filteredWords, permutations };
  }
  
  console.log(getPermutations("THIS IS AN ISSUE FROM GIHAN", "IS"));
  
  
  function getPermutations(sentence, word) {
    const words = sentence.toUpperCase().split(" ");
  
    const filteredWords = words.filter((w) => w === word);
  
    function generatePermutations(arr, n, result) {
      if (n === 1) {
        result.push([...arr]);
        return;
      }
  
      for (let i = 0; i < n; i++) {
        generatePermutations(arr, n - 1, result);
  
        if (n % 2 === 0) {
          [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
        } else {
          [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
        }
      }
    }
  
    const permutations = [];
    generatePermutations(filteredWords, filteredWords.length, permutations);
  
    return { word: filteredWords, permutations };
  }
  
  console.log(getPermutations("THIS IS AN ISSUE FROM GIHAN", "IS"));
  

  function getNthPosition(a, b, n) {
    let fa = a;
    let fb = b;
  
    function getNextTerm() {
      const nextTerm = fa + fb;
      fa = fb;
      fb = nextTerm;
      return nextTerm;
    }
  
    while (fa.length < n) {
      getNextTerm();
    }
  
    return fa[n - 1];
  }
  
  console.log(getNthPosition("1415", "8979", 10)); // Output: "9"
  console.log(getNthPosition("abc", "435d", 100)); // Output: "b"
  

  function makeAlphabetSentenceSort(str) {
    const words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      const sortedWord = words[i].split('').sort().join('');
      words[i] = sortedWord;
    }
  
    words.sort((a, b) => a.length - b.length);
  
    const sortedSentence = words.join(' ');
  
    return sortedSentence;
  }
  
  console.log(makeAlphabetSentenceSort("she lives with him in a small apartment"));
  // Output: "a in ehs him hitw eilsv allms aaemnprtt"
  

  function isPrimeFactorLargerThanFive(number) {
    for (let i = 7; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(isPrimeFactorLargerThanFive(10)); // Output: true
  console.log(isPrimeFactorLargerThanFive(13)); // Output: false
  

  function isPrimeFactorLargerThanFive(number) {
    for (let i = 7; i <= number; i++) {
      if (number % i === 0 && isPrime(i) && i > 5) {
        return false;
      }
    }
  
    return true;
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  console.log(isPrimeFactorLargerThanFive(10)); // Output: true
  console.log(isPrimeFactorLargerThanFive(13)); // Output: false
  


  function calculateTotalBarLengthReq(gateWidth, gateHeight, rowHeightPercentage, barThickness) {
    const numRows = Math.floor((gateHeight * rowHeightPercentage) / 100);
  
    const numBarsPerRow = Math.ceil(numRows / 2);
  
    const rowLength = gateWidth + barThickness;
  
    const totalLength = numBarsPerRow * rowLength;
  
    return `Total bar length requirement = ${totalLength.toFixed(2)}cm.`;
  }
  
  const ironBarThickness = 10;
  console.log(calculateTotalBarLengthReq(500, 500, 20, ironBarThickness));
  console.log(calculateTotalBarLengthReq(100, 100, 20, ironBarThickness));
  

  function calculateTotalBarLengthReq(gateWidth, gateHeight, rowHeightPercentage, barThickness) {
    const numRows = Math.floor((gateHeight * rowHeightPercentage) / 100);
  
    const rowHeight = gateHeight / numRows;
  
    const numBarsPerRow = Math.ceil(numRows / 2);
  
    const rowLength = gateWidth + barThickness;
  
    const totalLength = numBarsPerRow * rowLength;
  
    return `Total bar length requirement = ${totalLength.toFixed(2)}cm.`;
  }
  
  const ironBarThickness = 10;
  console.log(calculateTotalBarLengthReq(500, 500, 20, ironBarThickness));
  console.log(calculateTotalBarLengthReq(100, 100, 20, ironBarThickness));
  

  const foodItems = [
    { name: "Food Item A",       calories: 239 },
    { name: "Food Item B", calories: 130 },
    { name: "Food Item C", calories: 155 },
    { name: "Food Item D", calories: 200 },
    { name: "Food Item E", calories: 20 },
    { name: "Food Item F", calories: 500 },
    { name: "Food Item G", calories: 100 },
    { name: "Food Item H", calories: 50 },
    { name: "Food Item I", calories: 10 },
  ];
  
  function calculateMealPlan(mealsPerDay, totalCaloriesPerDay, calorieOverflowLimit) {
    const result = [];
    const mealCalories = [];
  
    function generateMeals(meal, mealIndex) {
      if (mealIndex === mealsPerDay) {
        const totalCalories = meal.reduce((total, food) => total + food.calories, 0);
        if (totalCalories <= totalCaloriesPerDay) {
          mealCalories.push(totalCalories);
          result.push(meal.map((food) => food.name).join(", "));
        }
        return;
      }
  
      for (const food of foodItems) {
        if (!meal.includes(food)) {
          generateMeals([...meal, food], mealIndex + 1);
        }
      }
    }
  
    generateMeals([], 0);
  
    if (result.length === 0) {
      return "Unable to generate a meal plan.";
    }
  
    if (Math.max(...mealCalories) - Math.min(...mealCalories) > calorieOverflowLimit) {
      return "Unable to generate a meal plan.";
    }
  
    return result.join("\n");
  }
  
  console.log(calculateMealPlan(1, 600, 20));
  console.log(calculateMealPlan(1, 1500, 100));
  console.log(calculateMealPlan(2, 600, 20));
  