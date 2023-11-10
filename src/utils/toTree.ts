/**
 *数组转化为树结构--递归
 * @description 优缺点：不适合大规模数据
 * @param data 需要转化的数组
 * @param parentId 父节点id
 **/
export function arrayToTreeRec (data: [], parentId = null): any {
  return data.filter((item: any) => item.parentId === parentId).map((item: any) => ({
    ...item,
    children: arrayToTreeRec(data, item.id)
  }))
}

/**
 * 数组转化为树结构（循环）
 * @description  优缺点：适合大规模数据
 * @param data 需要转化的数组
 * @param id 节点id
 * @param pId 父节点id
 **/
export function arrayToTreeLoop (data: [], id: string | number, pId: string | number): [] {
  if (!Array.isArray(data)) return []
  const flag = data.every(item => {
    return id in item && pId in item
  })
  if (!flag) throw new Error('invalid parameter')

  const map: any = {}
  const tree: any = []
  data.forEach((node: any) => {
    map[node[id]] = {
      ...node,
      children: []
    }
  })
  Object.values(map).forEach((node: any) => {
    if (node[pId] === null) {
      tree.push(node)
    } else {
      map[node[pId]]?.children.push(node)
    }
  })
  return tree
}
