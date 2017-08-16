bstNode.prototype.breadthFirst = () => {
  let current
  let queue = [this]
  let result = ''

  while(queue.length > 1) {
    current = queue.pop()
    result += current.val + ' '
    if(current.left) queue.unshift(current.left)
    if(current.right) queue.unshift(current.right)
  }
  return result
}

// visit root -> left subtree -> right subtree
bstNode.prototype.preOrder = cb => {
  _walk(this)

  function _walk(node) {
    if(!node) return
    cb(node)
    if(node.left) _walk(node.left)
    if(node.right) _walk(node.right)
  }
}

// visit left subtree -> right subtree -> root
bstNode.prototype.postOrder = cb => {
  _walk(this)

  function _walk(node) {
    if(!node) return
    if(node.left) _walk(node.left)
    if(node.right) _walk(node.right)
    cb(node)
  }
}

// visit left subtree -> root -> right subtree
bstNode.prototype.inOrder = cb => {
  _walk(this)

  function _walk(node) {
    if(!node) return
    if(node.left) _walk(node.left)
    cb(node)
    if(node.right) _walk(node.right)
  }
}
