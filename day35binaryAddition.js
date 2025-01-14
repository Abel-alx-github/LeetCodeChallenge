
// Given two binary strings a and b, return their
//  sum as a binary string.
c = 0
    1
    128
res 022
//  150 0..9

c = 0
   "11"
   "01"
       
re  "100"


// 20 / 2 = 10 remainder 0




// Example 1:
// a = "11" 1 * 2**1 + 1 * 2**0 = 3 
// b = "1" 1 * 2**0 = 1
// output = "100" 1 * 2**2 + 0 * 2**1 + 0 * 2**0 = 4















function addBinary(bit1, bit2){
    let res = ""
    let i = bit1.length - 1
    let j = bit2.length - 1
    let carry = 0;

    while(i >= 0 || j >= 0) {
        let bita = i >= 0 ? parseInt(bit1[i]) : 0
        let bitb = j >= 0 ? parseInt(bit2[j]) : 0

        let total = bita + bitb + carry;
        res = String(total % 2) + res
        carry = Math.floor(total / 2)
        i--;
        j--;
    }
    if(carry) {
        res = "1" + res
    }
    console.log(res)
}

addBinary("11", "1") // 100