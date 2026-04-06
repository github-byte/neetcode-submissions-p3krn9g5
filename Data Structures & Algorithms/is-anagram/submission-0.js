class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        s = s.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("")
        t = t.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("")
        console.log(s, t)
        return s == t
    }
}
