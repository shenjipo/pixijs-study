//加载素材 数组
import { p1Arr, p2Arr, p2Arr2, p3Arr, p4Arr, p5Arr } from './data.js'

import { spriteGroupBgObject, sence1Object, sence2Object, sence3Object, sence4Object, spriteGroupLastObject } from './data.js'

PIXI.loader
  .add(p1Arr)
  .add(p2Arr)
  .add(p2Arr2)
  .add(p3Arr)
  .add(p4Arr)
  .add(p5Arr)
  .on('progress', function (loader, resource) {
    console.log(loader.progress)
    $('#loadingProgress').html(Math.round(loader.progress) + '%')
  })
  .load(setup)


//setup函数
function setup() {
  console.log('加载完成')
}