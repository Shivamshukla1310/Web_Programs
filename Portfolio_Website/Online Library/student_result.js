let result = 75;
switch(result)
{
    case 1:
        if(result > 90)
        {
            document.write("Distinction");
        }
        break;
    case 2:
        if(result > 80 && result <=90)
        {
            document.write("Excellent");
        }
        break;
    case 3:
        if(result > 70 && result <= 80)
        {
            document.write("Good");
        }
        break;
    case 4:
        if(result > 60 && result <=70)
        {
            document.write("Ok Ok");
        }
        break;
    case 5:
        if(result < 60)
        {
            document.write("Beta/Beti Aapse na ho payega.");
        }
        break;
}