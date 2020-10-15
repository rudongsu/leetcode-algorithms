/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    let profit = 0;
    for(let buy =0; buy<len-1; buy++){
    
        let diff = prices[buy+1] - prices[buy];
        if(diff > 0){
                profit += diff;
            }
            
    }

    
    return profit;
};
// @lc code=end

