frames = ['content1', 'content2', 'content3', 'content4', 'content5', 'content6', null];
times = [0, // Today... 
         1500, // we will summarize
         4000, // what we learned so far
         7500, // And...
         9500, // we will create our first visualization!
         13500, // this is lecture 4
         19000];

document.getElementById("content").innerHTML = "\
    <div id='content1' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>Today...</div>\
\
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>We will summarize</div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:20%;left:10%;margin-left:50px;font-size:440%'>what we learned so far.</div>\
\
    <div id='content4' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>And..</div>\
\
    <div id='content5' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>we will create our first visualization!</div>\
\
    <div id='content6' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is lecture 4.</div>    \
\
<div style='visibility:hidden'>   \
  <audio id='voice'>    \
    <source src='lectures/04.mp3'>    \
  </audio>    \
</div>   \
\
";

