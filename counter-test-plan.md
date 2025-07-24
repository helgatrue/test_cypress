# Test cases for counter app

This document outlines positive checks and edge cases for the Counter App.

---

## Positive checks

### 1. Increment from 0 to 1

**Steps**:
1. Open the counter app.
2. Ensure the counter initially displays `0`.
3. Click the **Increment** button once.

**Expected Result**:  
The counter displays `1`.

---

### 2. Decrement from 1 to 0

**Steps**:
1. Open the counter app.
2. Ensure the counter initially displays `0`.
3. Click the **Increment** button once.
4. Ensure the counter initially displays `1`.
5. Click the **Decrement** button once.

**Expected Result**:  
The counter displays `0`.

---

### 3. Counter must not go below 0
**Steps**:
1. Open the counter app.
2. Click the **Increment** button once to set the counter to `1`.
3. Click the **Decrement** button once.

**Expected Result**:  
The counter decreases to `0`.

---

## Edge cases

### 4. Counter value must remain unchanged

**Steps**:
1. Open the counter app.
2. Ensure the counter initially displays `0`.
3. Click the **Decrement** button once.

**Expected Result**:  
The counter remains at `0`. It does not go below zero.

---

### 5. Rapid clicks should increment correctly

**Steps**:
1. Open the counter app.
2. Quickly click the **Increment** button 5 times.

**Expected Result**:  
The counter displays `5`.

---

### 6. Counter should always show only non-negative integers

**Steps**:
1. Open the counter app.
2. Click the **Increment** and **Decrement** buttons multiple times in any order.
3. Observe the counter value after each interaction.

**Expected Result**:  
The counter always displays a valid non-negative integer (e.g., `0`, `1`, `2`, etc.).  
It never shows negative numbers or non-numeric text.

---