const parseCSV = require('csv-parse/lib/sync')
import { convertSpus, convertSkus, parse, parseFile } from './csv'
// Import the package main module
const csv = require('csv')
// Use the module
csv.generate({ seed: 1, length: 20 })
  .pipe(csv.parse())
  .pipe(csv.transform(function(record) {
    return record.map(function(value) {
      return value.toUpperCase()
    })
  }))
  .pipe(csv.stringify())
  .pipe(process.stdout)

describe('转化csv', () => {
  it('should verify the lib functionality', () => {
    const input = `
"key_1","key_2"
"value 1","value 2"
`
    const records = parseCSV(input, {
      columns: true,
      skip_empty_lines: true,
    })
    expect(records).toEqual([{ key_1: 'value 1', key_2: 'value 2' }])
  })
  it('should convert raw to standard', () => {
    // given
    const spus = `款号,品名,助记码,国标码,上市日,品牌,外采品牌,商品来源,年份,季节,商品类型,上货波段,单位,系列,子系列,产地,大类,款类,款型,组别,材质特点,卖点介绍,尺寸组,初始定价,预估成本,最终吊牌价,出货价,订货会成份,买手价,可作赠品,是否代销,状态代码,备注2,是否传入德卡,修改时间,可用
P191DR03,HE YAN轻薄无袖连衣裙,,,,ZUCZUG,HE YAN,外围合作,2019,春夏,成品,春4,件,设计师个人系列,,上海,女装/男装/婴童装,连衣裙,连衣裙,轻薄连衣裙,,,上装/连衣裙（旧）,1899,,1899,,,,否,否,20,,是,2019-06-01 21:07:57,是
`
    const skus = `条码,款号,色号,颜色,颜色别名,尺寸,国标码,外部条码,唯一条码,订货会条码,成分,规格,备注,ASI,是否传入WMS,可用
00000000-00-F,00000000,00,银色,,F,,,,,,F,,103371,是,是
`

    const expectedSpus = `商品编码,商品名称,商品短名称,属性集,商品类型 ,品牌编码,品牌,商品分类code,商品分类,吊牌价,销售价,预售标志,尺码表url地址,独立销售标志,款号（非必填）,商品排序号（非必填）,上下架状态,上架时间,下架时间,seo标题,seo关键字,seo描述,seo路径,*尺码指南(输入),*商品描述(输入),*成分和保养(输入)
P191DR03,HE YAN轻薄无袖连衣裙,,通用商品,普通,BR2019061500000003,HE YAN,1.90615E+13,裙子,1899,1899,非预售,,独立销售,,0,已上架,2019/6/15 14:12,,,,,,https://uxresources.baozun.com/sandbox/88005987/20190613/6F95BC425526DDB45FB528E0191F7866.jpg,https://uxresources.baozun.com/sandbox/88005987/20190613/490E96B1C589F418695EC1EFE23FFBFE.jpg,立体裁剪造型/侧高摆结合不平衡感斜裙摆设计/修身女性化/穿着效果极佳
`
    const expectedSkus = `商品编码,SKU编码,SKU外部编码,条形码,SKU吊牌价,SKU销售价,SKU重量(g),是否主打,是否禁用,总库存,可用库存,*颜色(单选),*尺寸(单选)
P191DR03,P191DR03_01,,,1,1,30,是,启用,500,500,黑色,2
P191DR03,P191DR03_02,,,0.01,0.01,0,否,启用,0,0,白色,2
`
    // when
    // const result = convert(spus, skus)

    // then
    // expect(parse(skus)).toEqual(parse(expectedSkus))
    expect(convertSkus(skus)).toEqual(parse(expectedSkus))

    // parseFile('/Users/Jing/c/_temp/tdd-with-javascript.workshop/src/fixtures/款号SPU - 商品属性.csv')
    // expect(parse(spus)).toEqual(parse(expectedSpus))
    // expect(convertSpus(spus)).toEqual(parse(expectedSpus))
  })
})
