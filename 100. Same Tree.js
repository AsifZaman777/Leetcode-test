/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    //using bfs

   if(p===null && q===null )
   {
     return true;
   }

  
    var tree1=[];
    var tree2=[];

    var queueTree1 = [p];
    while(queueTree1.length)
    {
      const node = queueTree1.shift();
      tree1.push(node);

      if(node && node.left) queueTree1.push(node.left);
      if(node && node.right) queueTree1.push(node.right);
    }


    var queueTree2 =[q];
    while(queueTree2.length)
    {
      const node1 = queueTree2.shift();
      tree2.push(node1);

      if(node1 && node1.left) queueTree2.push(node1.left);
      if(node1 && node1.right) queueTree2.push(node1.right);
    }


    return (JSON.stringify(tree1)===JSON.stringify(tree2));


};