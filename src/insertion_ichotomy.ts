
/**
 * 对于插入排序，如果比较操作的代价比交换操作大的话，可以采用二分查找法来减少比较操作的次数
 * 当n较大时，二分插入排序的比较次数比直接插入排序的最差情况好得多，但比直接插入排序的最好情况要差，
 * 所当以元素初始序列已经接近升序时，直接插入排序比二分插入排序比较次数少。
 * 二分插入排序元素移动次数与直接插入排序相同，依赖于元素初始序列。
 * 
 */
export class InsertionSortDichotomy{

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
        for(let i = 0;i<this.list.length; i++){
            tmp = this.list[i];
            let start = 0 , end = i-1, mid = 0;
            while(start <= end){
                mid = (start+end)/2;
                if(this.list[mid]>tmp){
                    end = mid -1;
                }else{
                    start = mid+1;
                }
            }
            for(let j = i-1 ; j>end ; j--){
                this.list[j+1] = this.list[j];
            }
            this.list[end+1] = tmp;
        }
        return this.list;
    }
}

var list = new InsertionSortDichotomy([2,4, 1, 6, 2, 8,3]).sort();
console.log(list);