
/**
 * 插入排序是一种简单直观的排序算法。
 * 插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序）
 * 因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
 * 具体算法描述如下：
 *    1.从第一个元素开始，该元素可以认为已经被排序
 *    2.取出下一个元素，在已经排序的元素序列中从后向前扫描
 *    3.如果该元素（已排序）大于新元素，将该元素移到下一位置
 *    4.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
 *    5.将新元素插入到该位置后
 *    6.重复步骤2~5
 */
export class InsertionSort{
    private list: Array<number> = [];

    constructor(list : Array<number>){
        this.list = list;
    }

    public sort(){
        if(this.list == null){
            return [];
        }
        if(this.list.length<=1){
            return this.list;
        }
        var tmp : number;
        for(let i = 1; i< this.list.length ;i++){
            tmp = this.list[i];
            let j = i-1;
            while(j>=0 && this.list[j] >tmp){
                this.list[j+1]= this.list[j];
                j--;
            }
            this.list[j+1] = tmp;
        }
        return this.list;
    }
    
}


var list = new InsertionSort([2,4, 1, 6, 2, 8,3]).sort();
console.log(list);