function shareTo(types){

  var title,imageUrl,url,description,keywords;

  //获取文章标题
  title = document.title;

  //获取网页中内容的第一张图片地址作为分享图
  //imageUrl = document.images[0].src;
  imageUrl = document.getElementById("pcdetails").getElementsByTagName("img")[0];
  //当内容中没有图片时，设置分享图片为网站logo
  if(typeof imageUrl == 'undefined'){
    imageUrl = 'https://'+window.location.host+'/static/images/logo.png';
  } else {
    imageUrl = imageUrl.src;
  }

  //获取当前网页url
  url = document.location.href;

  //获取网页描述
  description = document.querySelector('meta[name="description"]').getAttribute('content');

  //获取网页关键字
  keywords = document.querySelector('meta[name="keywords"]').getAttribute('content');

  //qq空间接口的传参
  if(types=='qzone'){
    window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+url+'&sharesource=qzone&title='+title+'&pics='+imageUrl+'&summary='+description);
  }
  //新浪微博接口的传参
  if(types=='sina'){
    window.open('http://service.weibo.com/share/share.php?url='+url+'&sharesource=weibo&title='+title+'&pic='+imageUrl+'&appkey=2706825840');
  }
  //qq好友接口的传参
  if(types == 'qq'){
    window.open('http://connect.qq.com/widget/shareqq/index.html?url='+url+'&sharesource=qzone&title='+title+'&pics='+imageUrl+'&summary='+description+'&desc='+keywords);
  }
  //生成二维码给微信扫描分享
  if(types == 'wechat'){
    //在线二维码（服务器性能限制，仅测试使用，屏蔽非大陆ip访问）
    window.open('https://zixuephp.net/inc/qrcode_img.php?url='+url);
  }

}