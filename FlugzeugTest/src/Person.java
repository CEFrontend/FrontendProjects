public class Person
{
    private int Alter=0;
    private String Name;

    public Person(int alter, String name) {
        Alter = alter;
        Name = name;
    }

    public int getAlter() {
        return Alter;
    }

    public void setAlter(int alter) {
        Alter = alter;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }


}
