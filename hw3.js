function reviewInput()
{
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'>Your Information:</th>";
    
    for (i = 0; i < formcontent.length; i++)  
    {    
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        if (!name) continue;

        switch (datatype)
        {
            case "checkbox":
                if (el.checked)
                {
                    formoutput += "<tr> <td align= 'right'>" + name + "</td>";
                    formoutput += "<td class= 'outputdata'>&#x2713; </td></tr>";
                }
                break;
                
            case "radio":
                if (el.checked)
                {
                    formoutput += "<tr> <td align = 'right'>" + name + "</td>";
                    formoutput += "<td class = 'outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                break;
            
            default:
                if (value !== "")
                {
                    formoutput += "<tr> <td align= 'right'>" + name + "</td>";
                    formoutput += "<td class= 'outputdata'>" + value + "</td></tr>";
                }
        }
    }

    {
        formoutput += "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}
