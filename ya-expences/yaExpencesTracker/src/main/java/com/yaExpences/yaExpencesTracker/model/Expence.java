package com.yaExpences.yaExpencesTracker.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "expences")
public class Expence {
    @Id
    private int index;

    private String expence;
    private int spent;
    private Date exdate;

    public Expence(int index,String expence, int spent, Date exdate) {
        this.expence = expence;
        this.spent = spent;
        this.exdate = exdate;
        this.index = index;
    }

    public Expence() {
    }

    public String getExpence() {
        return expence;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public void setExpence(String expence) {
        this.expence = expence;
    }

    public int getSpent() {
        return spent;
    }

    public void setSpent(int spent) {
        this.spent = spent;
    }

    public Date getExdate() {
        return exdate;
    }

    public void setExdate(Date exdate) {
        this.exdate = exdate;
    }
}
