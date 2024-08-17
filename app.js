var root = document.getElementById("root");
// 1st div
var main_cotnainer = document.createElement("div");
root.appendChild(main_cotnainer);
main_cotnainer.setAttribute("class","card");
// image ke liye
var img = document.createElement("img");
img.setAttribute("src", "https://tse1.mm.bing.net/th?id=OIP.bPEGywG3ZYMLO-hBby4JmQHaEK&pid=Api&P=0&h=220"
);
main_cotnainer.appendChild(img);

// content ke liye
var MyDetails = document.createElement("div");
main_cotnainer.appendChild(MyDetails);
MyDetails.setAttribute("class","card__details")

// headding
var h1 = document.createElement("H1");
var h1Text = document.createTextNode("Shabbir Yousuf");
h1.appendChild(h1Text);
MyDetails.appendChild(h1);
h1.setAttribute("class","name");

var paraTag = document.createElement("p");
var para = document.createTextNode("My car is world fastest car.! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sequi!");
paraTag.appendChild(para);
MyDetails.appendChild(paraTag);


// button
var btn = document.createElement("BUTTON");
var bttn = document.createTextNode("click me");
btn.appendChild(bttn);
MyDetails.appendChild(btn);