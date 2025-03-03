package rs.ac.university.gradjevinaAplikacija.error;



public class ExceptionModel
{

    public ExceptionModel()
    {

    }

    private String name;

    private String message;

    private String path;

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getMessage()
    {
        return message;
    }

    public void setMessage(String message)
    {
        this.message = message;
    }

    public String getPath()
    {
        return path;
    }

    public void setPath(String path)
    {
        this.path = path;
    }


}
