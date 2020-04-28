//variables
var grid = document.getElementById("gamearea");
var univers = document.getElementById("univers");
var newcell;
var clock = 0;
var loop;
var current;
var left;
var right;
var up;
var upleft;
var upright;
var down;
var downleft;
var downright;
var lifecount = 0;
var killlist = [];
var birthlist = [];


//build map
for (i=0; i<625; i++)
{
    newcell = document.createElement("div");
    newcell.id = "c"+i;
    newcell.className = "off";
    newcell.addEventListener("click", activatecell);
    newcell.addEventListener("mouseover", hovercell);
    newcell.addEventListener("mouseout", quitcell);
    grid.appendChild(newcell);
}

//exercices

//mouse actions
function activatecell(e)
{
    if (e.target.className == "off")
    {
        e.target.className = "on";
    }
    else
    {
        e.target.className = "off";
    }
}

function hovercell(e)
{
    e.target.style.boxShadow = "0px 0px 0px 1px white inset";
}

function quitcell(e)
{
    e.target.style.boxShadow = "none";
}

//loop functions
function startloop()
{    
    loop = setInterval(function()
    {
        current = document.getElementById("c"+clock);
        left = document.getElementById("c"+(clock-1));
        right = document.getElementById("c"+(clock+1));
        up = document.getElementById("c"+(clock-25));
        upleft = document.getElementById("c"+(clock-26));
        upright = document.getElementById("c"+(clock-24));
        down = document.getElementById("c"+(clock+25));
        downleft = document.getElementById("c"+(clock+24));
        downright = document.getElementById("c"+(clock+26));

        lifecheck();
        rulescheck();

        clock++;

        if (clock > 624)
        {
            clock = 0;
            editboard();
            killlist = [];
            birthlist = [];
        }

        lifecount = 0;
    }, 0.1);
}

function endloop()
{
    clearInterval(loop);
}

//cell rules function
function lifecheck()
{
    if (left && left.className == "on")
    {
        lifecount++;
    }
    if (right && right.className == "on")
    {
        lifecount++;
    }
    if (up && up.className == "on")
    {
        lifecount++;
    }
    if (upleft && upleft.className == "on")
    {
        lifecount++;
    }
    if (upright && upright.className == "on")
    {
        lifecount++;
    }
    if (down && down.className == "on")
    {
        lifecount++;
    }
    if (downleft && downleft.className == "on")
    {
        lifecount++;
    }
    if (downright && downright.className == "on")
    {
        lifecount++;
    }
}

function rulescheck()
{
    if (lifecount < 2 && current.className == "on")
    {
        killlist.push(current.id);
    }
    if (lifecount > 3 && current.className == "on")
    {
        killlist.push(current.id);
    }
    if (lifecount == 3 && current.className == "off")
    {
        birthlist.push(current.id);
    }
}

function editboard()
{
    killlist.forEach(e => document.getElementById(e).className = "off");
    birthlist.forEach(e => document.getElementById(e).className = "on");
    console.log("editing board");
}
