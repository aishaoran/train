/**
 * 页面一加载获取html的宽/10，然后赋值给html的font-size属性上，并给HTML加上自定义属性data-dpr，
 * 假设我们的设计稿宽是640的，则html的字体大小则被设为64px.则相当于1rem=64px。
 * 假如一个元素的宽是160px,则应该给它的宽度是160/64（1rem的基数为64px）=2.5rem
 * 参考：http://caibaojian.com/flexible-js.html
 *      https://www.cnblogs.com/jcscript/p/5789503.html
 * 注：宽度10rem=100%
 *    字体最好还是用PX
 *    当dpr(像素比)不确定时，就得根据dpr来确定字体大小
 div {
    width: 1rem;
    height: 0.4rem;
    font-size: 12px; // 默认写上dpr为1的fontSize
 }
 [data-dpr="2"] div {
    font-size: 24px;
 }
 [data-dpr="3"] div {
    font-size: 36px;
 }
 * */

(function (win, lib) {
  //doc取文档的document对象
  var doc = win.document;
  //docEl取到html节点，后期我们需要向html插入dpr和font-size就是用这个属性
  var docEl = doc.documentElement;
  //metaEl取meta标签里面name＝viewport的元素，没有返回空，为了判断是否有自己设置的meta值来做一些逻辑
  var metaEl = doc.querySelector('meta[name="viewport"]');
  //flexibleEl取meta标签里面name＝flexible的元素，没有返回空，为了判断用户是否自己手动的设置了一些meta值
  var flexibleEl = doc.querySelector('meta[name="flexible"]');
  var dpr = 0;//dpr表示手机屏幕的dpr值,像素比
  //scale表示meta里面的intial-scale，取值1.0则页面按实际尺寸显示，无任何缩放,会根据不同的scale设置dpr
  var scale = 0;
  var tid;//定时器
  var flexible = lib.flexible || (lib.flexible = {});

  /**
   * 判断meta标签里面是不是设置了name=viewport属性，
   * 如果设置了viewport并且设置了initial-scale（初始屏幕的大小）我们将取到这个值作为dpr
   * (做了逻辑运算，如果你的页面初始的放大为二，那么我们的dpr会设置成0)
   * */
  if (metaEl) {
    console.warn('将根据已有的meta标签来设置缩放比例');
    //获取meta的contents属性的intial-scale:页面首次被显示是可视区域的缩放级别，
    //取值1.0则页面按实际尺寸显示，无任何缩放
    var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
    if (match) {
      scale = parseFloat(match[1]);
      dpr = parseInt(1 / scale);
    }
  } else if (flexibleEl) {//同理,如果动态设置了meta我们直接就取出来然后设置dpr和scale
    var content = flexibleEl.getAttribute('content');
    if (content) {
      var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
      var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
      if (initialDpr) {
        dpr = parseFloat(initialDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }
      if (maximumDpr) {
        dpr = parseFloat(maximumDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }
    }
  }

  /**
   * 如果我们动态设置了scale或者设置了meta标签里面的name＝flexible的inital-scale，
   * 那么我们就根据自己设置的dpr在判断iphone手机的retina屏幕的dpr比值判断不同型号的倍数，
   * 最后我们在html上设置了data-dpr自定义属性。
   * */
  if (!dpr && !scale) {
    var isAndroid = win.navigator.appVersion.match(/android/gi);
    var isIPhone = win.navigator.appVersion.match(/iphone/gi);
    var devicePixelRatio = win.devicePixelRatio;
    if (isIPhone) {
      // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
        dpr = 3;
      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
        dpr = 2;
      } else {
        dpr = 1;
      }
    } else {
      // 其他设备下，仍旧使用1倍的方案
      dpr = 1;
    }
    scale = 1 / dpr;
  }
  docEl.setAttribute('data-dpr', dpr);

  /**
   * 当我们之前没有设置metaEl标签的话，那么需要我们手动的去创建meta标签，实现移动端的适配
   * */
  if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl);
    } else {
      var wrap = doc.createElement('div');
      wrap.appendChild(metaEl);
      doc.write(wrap.innerHTML);
    }
  }

  /**
   * 这段代码的目的就是监听window里面的resize和pageshow方法来实现css样式的重绘。
   * 函数实现了取当前设备的width之后根据width计算出rem的具体值，
   * rem代表html的font-size，这里的rem代表的是一个自定义的rem，而不是rem属性！
   * */
  function refreshRem(){
    var width = docEl.getBoundingClientRect().width;

    //设计稿的最大尺寸为540，超出这个尺寸的话继续放大一些设计的图片会失真
    if (width / dpr > 540) {
      width = 540 * dpr;
    }
    var rem = width / 10;
    docEl.style.fontSize = rem + 'px';
    flexible.rem = win.rem = rem;
  }
  win.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  /**
   * 我们判断document对象是否处于complete状态，如果处于完成状态我们给body一个font-size＝12*dpr的值，
   * 否则我们判断dom加载方法来实现body中的font-size的设置。这个设置是为了页面中字体的大小，
   * 而html中的font-size是为了设置页面的height，width等属性。
   * */
  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = 12 * dpr + 'px';
  } else {
    doc.addEventListener('DOMContentLoaded', function(e) {
      doc.body.style.fontSize = 12 * dpr + 'px';
    }, false);
  }


  refreshRem();

  flexible.dpr = win.dpr = dpr;
  flexible.refreshRem = refreshRem;
  //添加了rem转px的方法
  flexible.rem2px = function(d) {
    var val = parseFloat(d) * this.rem;
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px';
    }
    return val;
  }
  //添加了PX转rem的方法
  flexible.px2rem = function(d) {
    var val = parseFloat(d) / this.rem;
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem';
    }
    return val;
  }
})(window, window['lib'] || (window['lib'] = {}));
