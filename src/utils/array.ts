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

/**
 * @description 数组克隆
 * @param arr 需要克隆的数组
 * @param deep 深克隆/浅克隆
 * **/
export function arrayClone (arr: [], deep?: boolean): [] {
  const newArr: any = []
  if (arr === undefined) return newArr
  arr.forEach(a => {
    if (!deep) {
      newArr.push(a)
      return
    }
    if (typeof a === 'object') {
      newArr.push(Object.assign({}, a))
    } else {
      newArr.push(a)
    }
  })
  return newArr
}

/**
 * @description 根据对象数组内某一个字段的值，获取该对象的值
 * @param arr 需要克隆的数组
 * @param field 依据字段
 * @param fieldValue 依据值
 * **/
export function getArrayObjectByField (arr: [], field: string, fieldValue: any): {} | undefined {
  if (!arr || !Array.isArray(arr)) return {}
  return arr.find(item => item[field] === fieldValue)
}
