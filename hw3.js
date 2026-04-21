function reviewInput()
{
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'>Your Information:</th>";
    
    for (i = 0; i < formcontent.length; i++)  
    {    
        var ele = formcontent.elements[i];
        var datatype = ele.type;
        var name = ele.name;
        var value = ele.value;

        if (!name) continue;

        switch (datatype)
        {
            case "checkbox":
                if (ele.checked)
                {
                    formoutput += "<tr> <td align= 'right'>" + name + "</td>";
                    formoutput += "<td class= 'outputdata'>&#x2713; </td></tr>";
                }
                break;
                
            case "radio":
                if (ele.checked)
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
