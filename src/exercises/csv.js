const parseCSV = require('csv-parse/lib/sync')
import { get } from 'lodash'

export const parse = input => parseCSV(input, {
  columns: true,
  // skip_empty_lines: true
})

export const convertSkus = skus => parse(skus).map(sku => {
  const getProp = path => get(sku, path, '')
  return (
    {
      '*尺寸(单选)': getProp('尺寸'),
      '*颜色(单选)': getProp('颜色'),
      'SKU吊牌价': '1',//TODO
      'SKU外部编码': getProp('国际码'),
      'SKU编码': getProp('条码'),
      'SKU重量(g)': '0', //TODO
      'SKU销售价': '1',//TODO
      '可用库存': '0',
      '商品编码': getProp('款号'),
      '总库存': '0',
      '是否主打': '是',
      '是否禁用': '启用',
      '条形码': '',
    }
  )
})

export const convertSpus = spus => parse(spus).map(spu => {
  const getProp = path => get(spu, path, '')
  return (
    {
      '*商品描述(输入)': getProp('卖点介绍') || '-',
      '*尺码指南(输入)': '-',
      '*成分和保养(输入)': getProp('材质特点') || '-',
      'seo关键字': '',
      'seo描述': '',
      'seo标题': '',
      'seo路径': '',
      '上下架状态': '已上架',
      '上架时间': getProp('修改时间'),
      '下架时间': '',
      '吊牌价': getProp('初始定价'),
      '品牌': getProp('品牌'),
      '品牌编码': '-', //TODO
      '商品分类': getProp('款类'),
      '商品分类code': '-', //TODO
      '商品名称': getProp('品名'),
      '商品排序号（非必填）': '0',
      '商品短名称': '',
      '商品类型 ': '普通',
      '商品编码': getProp('款号'),
      '尺码表url地址': '',
      '属性集': '通用商品',
      '款号（非必填）': '',
      '独立销售标志': '独立销售',
      '销售价': getProp('最终吊牌价'),
      '预售标志': '非预售',
    }
  )
})

function convert(spus, skus) {
  const spuArray = parse(spus)
  const skuArray = parse(skus)
  return [spuArray, skuArray]
  /*return {
    ...parse(spus),
    ...parse(skus)
  }*/
}

export default convert
