function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [];
  
  for (const num of set1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }
  
  return result;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const result = intersection(nums1, nums2);
console.log(result); // Output: [2]
