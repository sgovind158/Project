class MainNode{
  
  constructor(data,left,right){
    this.data  = data;
    this.left = left;
    this.right = right ;

  }

}

class Pair{
    constructor(node,state){
        this.node = node;
        this.state = state;
    }
}


Array.prototype.peek = function(){
    return this[this.length - 1];
}
function main(){

    let arr = [50,25,12,null,null,37,30,null,null,null,75,62,null,70,null,null,87,null,null]

    let root = new MainNode(arr[0],null,null);
    let mainRoot = new Pair(root,1);
    let stack = [];
    stack.push(mainRoot)
    let index = 0;

    while(stack.length>0){
        let top = stack.peek();
        if(top.state == 1){
            index++;

            if(arr[index]!= null){
                top.node.left = new MainNode(arr[index],null,null);
                let lp = new Pair(top.node.left ,1)
                stack.push(lp)
            }else{
                top.node.left = null;
            } 

            top.state++;
            // if end
        }else if(top.state == 2){
            index++;
            if(arr[index]!= null){
                top.node.right = new MainNode(arr[index],null,null);
                let rp = new Pair(top.node.right ,1)
                stack.push(rp)
            }else{
                top.node.right = null;
            }
            top.state++;
           //else if end  
        }else{
            stack.pop()
        }
    }// while loop end

    return mainRoot
}

let ans = main()
console.log(ans.node.right)
