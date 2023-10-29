# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.


# Removed the p from the inputs below this line I could'nt find any other way to get the code to work.
 reposts1 = 7
# Expected output: '7 is odd'
 reposts2 = 42
# Expected output: '42 is even'
 reposts3 = 221
# Expected output: '221 is odd'

def is_even_or_odd num
    if num % 2 == 0
        "#{num} is even"
    else
        "#{num} is odd"
    end
end

p is_even_or_odd(reposts1)
p is_even_or_odd(reposts2)
p is_even_or_odd(reposts3)

# Pseudo code: 

# Input: repost1,2,3
# Output: is odd, or is even
# Define: is_odd_or_even with paramater num
# Conditional: to determine weather the input is odd or even

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels vowels
    vowels.delete 'eiouAEIOU'
end

p remove_vowels(beatles_album1)
p remove_vowels(beatles_album2)
p remove_vowels(beatles_album3)

# Pseudo code:
# Input: beatles_album1, 2, 3
# Output: returned string with all vowels with removed
# Define: remove_vowels with paramater vowels
# Conditional: to remove all vowels with .delete from the string

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome word
    word = word.downcase
    if word.reverse == word
        "#{word} is a palindrome"
    else
        "#{word} is not a palindrome"
    end
end

p palindrome(palindrome_test_case1)
p palindrome(palindrome_test_case2)
p palindrome(palindrome_test_case3)

# Pseudo code:
# Input: palindrome_test_case1,2,3
# Output: is or is not a palindrome
# Define: palindrome with parameter word
# .downcase: for case sensitivity, 
# Conditional: to determine if the word reversed is or is not a palindrome
# I did not have .downcase in the code the first time and the output for all 3 were not a palindrom, so I assumed it was case sensitive and added the .downcase. 