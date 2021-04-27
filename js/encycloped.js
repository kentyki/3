var child_windows=new Array;function open_window(url,wnd_name,varname,x,y,props){if(!x){x=600;}
if(!y){y=400;}
if(!props){props=new Object();}
var wnd=window.open(url,wnd_name,'width='+x+',height='+y+',resizable='+(props["resizable"]?props["resizable"]:"yes")
+',toolbar='+(props["toolbar"]?props["toolbar"]:"no")
+',location='+(props["location"]?props["location"]:"no")
+',directories='+(props["directories"]?props["directories"]:"no")
+',status='+(props["status"]?props["status"]:"no")
+',scrollbars='+(props["scrollbars"]?props["scrollbars"]:"yes")
+',menubar='+(props["menubar"]?props["menubar"]:"no"));if(varname)eval(varname+'=wnd');if(varname){setTimeout('if('+varname+') if (!'+varname+'.closed) '+varname+'.focus()',200);}
wnd.focus();child_windows[child_windows.length+1]=wnd;return false;}
function focusSearchInp(fld){if(fld&&fld.value=='поиск')
fld.value='';}
function blurSearchInp(fld){if(fld&&(fld.value==''||fld.value.match(/^\s+$/)))
fld.value='поиск';}