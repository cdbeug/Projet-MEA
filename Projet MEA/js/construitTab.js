
function construitTab3 (str, nomTable, free_abonne) {
	var i,c=str.length, tmp=1, res="", ag="", imgReco=""; //ag = agrandie

	res+= '<table id="'+nomTable+'"><caption id="tab1">';

	for (i=0; i<c && str.charAt(i)!=';'; i++) res+=str.charAt(i);

	res+='</caption>';

	i++;

	f=i;

	var bool2=false;

	for (i=f; i<c; i++) {
		if (str.charAt(i)=='f') res+= '</table><button id="met_a_jour" onclick="metAJourUrl (); return false;">Mettre à jour</button>';

		if (str.charAt(i)=='&') res+= '<tr>';

		if (str.charAt(i)=='r') res+='</tr>';

		if (str.charAt(i)=='|') res+='<td';

		if (i<c-2 && str.charAt(i+1)==':' && (!(isNaN(str.charAt(i)))) && (!(isNaN(str.charAt(i+2))))) { 
			/*
				x1 : colspan="x1"

				x2 : rowspan="x2"
			*/

			if (free_abonne && parseInt(str.charAt(i))<2 && parseInt(str.charAt(i+2))<2) bool2=true; //affichage des images Reco (toutes les petites dans ce template)

			if (parseInt(str.charAt(i))>1) {res+=' colspan="'+parseInt(str.charAt(i))+'"'; ag='_ag';} //ag prend la valeur '_ag' (initialement ag="").

			if (parseInt(str.charAt(i+2))>1) {res+=' rowspan="'+parseInt(str.charAt(i+2))+'"';}

			res+='>\n';
		}

		if (str.charAt(i)=='/') {
			if (!bool2) res+= '<div id="case'+tmp+'" class="case'+ag+'"><img class="imm'+ag+'" src="Images/Common/photoManquante.jpg" alt="Image manquante"/><img id="imt'+tmp+'" class="imt'+ag+'" src="Images/Common/photoManquante.jpg" alt="Image de couverture" title="" onmouseover="affiche_imc('+tmp+');" onmouseout="enleve_imc('+tmp+');"/><img class="imc'+ag+'" id="imc'+tmp+'" src="Images/Common/image_crayon.jpg" alt="Modifier l'+"'"+'image"/><div title="Modifier l'+"'"+'image" id="cache'+tmp+'" class="cache3'+ag+' ui-icon ui-icon-pencil ui-state-default ui-corner-all" onmousedown="M_dCacheJUi(this);" onmouseup="M_uCacheJUi(this);" onmouseover="M_ovCacheJUi(this); affiche_imc('+tmp+');" onmouseout="M_ouCacheJUi(this); enleve_imc('+tmp+');" onclick="fondNoir('+tmp+')"></div><form id="fp'+tmp+'" class="rp"><input id="rp'+tmp+'" type="text" placeholder="Entrer une référence" onblur="metAJourUrlImage('+tmp+');"/></form><div id="id_titre'+tmp+'" class="id_titre"><p id="id_img'+tmp+'"></p><p id="titre_img'+tmp+'"></p></div></div></td>';
			else {

				if (i%1==0) imgReco="Images/Common/Reco3.jpg"; //choix de l'image Reco
				if (i%2==0) imgReco="Images/Common/Reco1.jpg";
				if (i%3==0) imgReco="Images/Common/Reco2.jpg";
				if (i%4==0) imgReco="Images/Common/Reco0.jpg";
		
				if (i==53) imgReco="Images/Common/Reco2.jpg";
				if (i==58) imgReco="Images/Common/Reco0.jpg";

				res+= '<div id="case'+tmp+'" class="case'+ag+'"><img class="imm'+ag+'" src="'+imgReco+'" alt="Image recomandée" title="Image recomandée"/><img style="visibility : hidden;" id="imt'+tmp+'" class="imt'+ag+'" src="Images/Common/photoManquante.jpg" alt="Image de couverture" title="" onmouseover="affiche_imc('+tmp+');" onmouseout="enleve_imc('+tmp+');"/><img style="visibility : hidden;" class="imc'+ag+'" id="imc'+tmp+'" src="Images/Common/image_crayon.jpg" alt="Modifier l'+"'"+'image"/><div style="display : none;" title="Modifier l'+"'"+'image" id="cache'+tmp+'" class="cache3'+ag+'" onmousedown="M_dCache(this);" onmouseup="M_uCache(this);" onmouseover="M_ovCache(this); affiche_imc('+tmp+');" onmouseout="M_ouCache(this); enleve_imc('+tmp+');" onclick="fondNoir('+tmp+')"></div><form style="visibility : hidden;" style="display : none;" id="fp'+tmp+'" class="rp"><input style="visibility : hidden;" style="display : none;" id="rp'+tmp+'" type="text" placeholder="Entrer une référence" onblur="metAJourUrlImage('+tmp+');"/></form></div></td>';
			}

			//contenu en lui même

			tmp++;

			ag="";

			bool2=false;
		}
	}

	return res;
}

/*
	Format pour la table : 

	nom; : <table><caption>nom</caption>

	f : </table>

	& : <tr>

	r : </tr>

	| : <td>

	/ : </td>

	x = 1 : <td>...</td>

	x>1 : <td rowspan="x">..</td>

	ligne test : "table 1;&|2:2/|1:1/r&|1:2/|1:3/rf" : 

	<table>
		<caption>table 1</caption>

		<tr>
			<td rowspan="2" colspan="2">...</td>
			<td>...</td>
		</tr>

		<tr>
			<td colspan="2">...</td>
			<td rowspan="1" colspan="3">...</td>
		</tr>
	</table>
*/


//str = "table1;&|2:2/|1:1/|1:1/r&|1:1/|1:1/r&|1:1/|1:1/|1:1/|1:1/r&|1:1/|1:1/|1:1/|1:1/rf";


//alert(construitTab(str));