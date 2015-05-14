# 163OpenCourse_playbackRate
利用html5 video标签修改网易公开课视频播放速度。
（仅测试chrome，因playbackRate目前只得到chrome及safari支持，估计也就只
支持这两个）

#使用方法
[把这个拖到书签栏](javascript:void !function(){var h=function(){var k=document.body.innerHTML;var j=/appsrc : '([\w\W]*)m3u8'/;return k.match(j)[1]+"mp4"};var a=null;var g=null;var b=null;var e="speedVideo";var i=function(){if(document.getElementById(e)!==null){return}g=document.createElement("div");g.style.width="860px";g.style.height="485px";g.style.backgroundColor="#000";g.style.position="absolute";g.style.zIndex=9999;g.style.top="140px";g.style.left=(document.body.clientWidth-860)/2+"px";a=document.createElement("video");a.id="speedVideo";var j=h();if(j===undefined){console.log("Can't get the src.");return}a.style.width="100%";a.style.height="100%";a.autoplay="true";a.src=j;a.controls="controls";b=document.createElement("span");b.innerHTML="x3";b.style.color="#fff";b.style.fontSize="4em";b.style.position="absolute";b.style.top=0;b.style.right="20px";b.style.visibility="hidden";g.appendChild(a);g.appendChild(b);document.body.appendChild(g);document.getElementById("FPlayer").style.display="none";document.onkeypress=c};var f=null;var c=function(l){var j=l.keyCode||l.which||l.charCode;var k=a.playbackRate;switch(j){case 91:k-=0.1;break;case 93:k+=0.1;break;case 43:k+=1;break;case 45:k-=1;break;default:break}k=Math.round(k*100)/100;if(k<=0||k>=32){k=Math.round(a.playbackRate*100)/100}a.playbackRate=k;b.innerHTML="X"+k;b.style.visibility="visible";clearTimeout(f);f=setTimeout(d,400)};var d=function(){b.style.visibility="hidden"};i()}();)


[: 播放速度 -= 0.1
]: 播放速度 += 0.1
-: 播放速度 -= 1.0
+: 播放速度 += 1.0
