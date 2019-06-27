import { moveFiles } from './index'

describe('Test for image handler', () => {
  it('should find and move all files in the source folder', () => {
    const results = moveFiles('/Users/Jing/Downloads/运营工具/0627', '/Users/Jing/Downloads/运营工具/target')

    // for sku
    expect(results).toContainEqual({
      source: 'mac_sku_1_M2LP3R.jpg',
      target: '/Users/Jing/Downloads/运营工具/target/M2LP3R/颜色/3R/main',
    })

    // for spu
    expect(results).toContainEqual({
      source: 'mac_spu_3_M0N904.jpg',
      target: '/Users/Jing/Downloads/运营工具/target/M0N904',
    })

    // for smoosh
    expect(results).toContainEqual({
      source: 'mac_smoosh_M2LP3L.jpg',
      target: '/Users/Jing/Downloads/运营工具/target/M2LP3L/颜色/3L/thumb',
    })

  })
})
