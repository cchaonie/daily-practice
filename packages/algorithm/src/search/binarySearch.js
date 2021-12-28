function binarySearch(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (right >= left) {
        let mid = (left + right) >> 1;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
