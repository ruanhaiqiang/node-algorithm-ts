/**
 * 重复地走访过要排序的元素，依次比较相邻两个元素，
 * 如果他们的顺序错误就把他们调换过来，直到没有元素再需要交换，排序完成。
 * 这个算法的名字由来是因为越小(或越大)的元素会经由交换慢慢“浮”到数列的顶端。
 */
export class BubbleSort{

    private list: Array<number> = [];

    constructor(list : Array<number>){
        this.list = list;
    }
    /**
     * 冒泡排序算法的运作如下：
        比较相邻的元素，如果前一个比后一个大，就把它们两个调换位置。
        对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
        针对所有的元素重复以上的步骤，除了最后一个。
        持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
     */
    public sort(){
        if(this.list == null){
            return [];
        }
        if(this.list.length<=1){
            return this.list;
        }
        var tmp :number ;
        
        for(let i = this.list.length-1 ;i >0 ;i--){
            for(let j = 0 ; j<i ; j++){
                if(this.list[j] > this.list[j+1]){
                    tmp = this.list[j+1];
                    this.list[j+1] = this.list[j];
                    this.list[j] = tmp;
                }
            }
        }
         return this.list;
    }
}

var list = new BubbleSort([2,4, 1, 6, 2, 8,3]).sort();
console.log(list);