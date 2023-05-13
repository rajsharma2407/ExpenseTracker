package com.yaExpences.yaExpencesTracker.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "salary")
public class Salary {
    @Id
    private int index;
    private int moneyLeft;
    private int spentAmount;
    private Date date;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Salary(int index, int moneyLeft, int spentAmount, Date date) {
        this.index = index;
        this.moneyLeft = moneyLeft;
        this.spentAmount = spentAmount;
        this.date = date;
    }

    public Salary() {
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public int getMoneyLeft() {
        return moneyLeft;
    }

    public void setMoneyLeft(int moneyLeft) {
        this.moneyLeft = moneyLeft;
    }

    public int getSpentAmount() {
        return spentAmount;
    }

    public void setSpentAmount(int spentAmount) {
        this.spentAmount = spentAmount;
    }
}
