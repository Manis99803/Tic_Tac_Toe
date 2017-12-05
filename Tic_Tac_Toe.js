var obj={} 
		var count=1
		var user='X'
		var game_count=0
		var player1=0
		var player2=0
		obj.check=function()
		{
			if(user=='X')
            {
            if(this.innerHTML=='')
             {	
             	this.innerHTML='X';
             	game_count++
             	user='0';
             }
            }
            else
            {
            	if(this.innerHTML=='')
            		{
            			this.innerHTML='O';
            			game_count++
            			user='X';
            		}
            }

			var ret=obj.game();
			if(ret==1 || ret==2)
			{
				game_count=0
				var a =document.querySelectorAll("td")
				for(i=0;i<a.length;i++)
					a[i].innerHTML=''
				if(ret==1)
				{
					var score=document.getElementById("player1").innerHTML.split(":")
					var score_count=parseInt(score[1])+1;
					document.getElementById("player1").innerHTML=score[0]+":"+score_count
				}
				if(ret==2)
				{
					var score=document.getElementById("player2").innerHTML.split(":")
					var score_count=parseInt(score[1])+1;
					document.getElementById("player2").innerHTML=score[0]+":"+score_count
				}
			}
			else
			{
				
				if(game_count==9)
					{
						var a =document.querySelectorAll("td")
						for(i=0;i<a.length;i++)
							a[i].innerHTML=''
						game_count=0
					}

			}
		}
		var table=document.createElement("table");
		document.body.appendChild(table);
		for(i=0;i<3;i++)
		{
			new_row=document.createElement("tr");
			for(j=0;j<3;j++)
			{	
				new_col=document.createElement("td");
				new_col.id="box"+count
				count++;
				new_col.addEventListener("click",obj.check,false);
				new_row.appendChild(new_col)

			}
			table.appendChild(new_row);
		}
		obj.game=function()
		{
			var a=document.querySelectorAll("td");
			if(a[0].innerHTML=='X' && a[1].innerHTML=='X' && a[2].innerHTML=='X')
				{
					alert("Player one wins")

					return 1;
				}
			if(a[0].innerHTML=='O' && a[1].innerHTML=='O' && a[2].innerHTML=='O')
				{
					alert("Player two wins")
					return 2;
				}
			if(a[3].innerHTML=='X' && a[4].innerHTML=='X' && a[5].innerHTML=='X')
				{
					alert("Player one wins")
					return 1;
				}
			if(a[3].innerHTML=='O' && a[4].innerHTML=='O' && a[5].innerHTML=='O')
				{
					alert("Player two wins")
					return 2;
				}
			if(a[6].innerHTML=='X' && a[7].innerHTML=='X' && a[8].innerHTML=='X')
				{
					alert("Player one wins")
					return 1;
				}
			if(a[6].innerHTML=='O' && a[7].innerHTML=='O' && a[8].innerHTML=='O')
				{
					alert("Player two wins")
					return 2;
				}
			if(a[0].innerHTML=='X' && a[4].innerHTML=='X' && a[8].innerHTML=='X')
				{
					alert("Player one wins")
					return 1;
				}
			if(a[0].innerHTML=='O' && a[4].innerHTML=='O' && a[8].innerHTML=='O')
				{
					alert("Player two wins")
					return 2;
				}
			if(a[0].innerHTML=='X' && a[3].innerHTML=='X' && a[6].innerHTML=='X')
				{
					alert("Player one wins")
					return 1;
				}
			if(a[0].innerHTML=='O' && a[3].innerHTML=='O' && a[6].innerHTML=='O')
				{
					alert("Player two wins")
					return 2;
				}
			if(a[1].innerHTML=='X' && a[4].innerHTML=='X' && a[7].innerHTML=='X')
				{
					alert("Player one wins")
					return 1;
				}
			if(a[1].innerHTML=='O' && a[4].innerHTML=='O' && a[7].innerHTML=='O')
				{
					alert("Player two wins")
					return 2;
				}
			if(a[2].innerHTML=='X' && a[5].innerHTML=='X' && a[8].innerHTML=='X')
				{
					alert("Player one wins")
					return 1;
				}
			if(a[2].innerHTML=='O' && a[5].innerHTML=='O' && a[8].innerHTML=='O')
				{
					alert("Player two wins")
					return 2;
				}
			if(a[2].innerHTML=='X' && a[4].innerHTML=='X' && a[6].innerHTML=='X')
				{
					alert("Player one wins")
					return 1;
				}
			if(a[2].innerHTML=='O' && a[4].innerHTML=='O' && a[6].innerHTML=='O')
				{
					alert("Player two wins")
					return 2;
				}
		}
